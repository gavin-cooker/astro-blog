<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="标题">
            <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="描述">
            <el-input v-model="form.description" type="textarea" />
        </el-form-item>
        <el-form-item label="作者">
            <el-input v-model="form.author" />
        </el-form-item>
        <el-form-item label="标签">
            <el-tag v-for="tag in dynamicTags" :key="tag" closable class="mx-1" :disable-transitions="false"
                @close="handleClose(tag)">
                {{ tag }}
            </el-tag>
            <el-input v-if="inputVisible" ref="inputRef" v-model="inputValue" class="ml-1 w-20" size="small"
                @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
            <el-button v-else class="button-new-tag ml-1" size="small" @click.native="showInput">
                + New Tag
            </el-button>
        </el-form-item>
        <el-form-item label="内容">
            <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">{{ type === 'update' ? 'Update' : 'Create' }}</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
import { ElButton, ElForm, ElFormItem, ElInput, ElTag } from 'element-plus'
import { nextTick, ref, computed, defineComponent } from 'vue';
const customHeaders = {
    "Content-Type": "application/json",
}
export default defineComponent({
    emits: [
        'onAdd'
    ],
    components:{
        ElButton,
        ElForm,
        ElFormItem,
        ElInput,
        ElTag,
    },
    props: {
        type: {
            type: String,
            default: 'add'
        },
        data: {
            type: Object,
            default: () => {
                return {
                    title: '',
                    description: '',
                    author: '',
                    tags: [],
                    content: ''
                }
            }
        }
    },
    setup(props, { emit }) {
        const form = ref(props.data)
        const { data } = props;

        const inputValue = ref('')
        const dynamicTags = ref(data.tags)
        const inputVisible = ref(false)
        const inputRef = ref<InstanceType<typeof ElInput>>()

        const handleClose = (tag: string) => {
            dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
        }

        const showInput = () => {
            inputVisible.value = true
            nextTick(() => {
                inputRef.value!.input!.focus()
            })
        }

        const handleInputConfirm = () => {
            if (inputValue.value) {
                dynamicTags.value.push(inputValue.value)
            }
            inputVisible.value = false
            inputValue.value = ''
        }
        const baseServerUrl = 'http://localhost:8080/api/blog/'
        const fetchUrl = computed(() => {
            return props.type === 'add' ? baseServerUrl : baseServerUrl + form.value._id
        })
        const fetchBody = computed(() => {
            return props.type === 'add' ? {
                method: "PUT",
                headers: customHeaders,
                body: JSON.stringify(form.value)
            } : {
                method: "POST",
                headers: customHeaders,
                body: JSON.stringify(form.value)
            }
        })
        const onSubmit = async () => {
            console.log('onsubmit gg', form.value);
            if (!fetchUrl.value) {
                throw new Error("need valid fetchurl");
            }
            try {
                let response = fetch(fetchUrl.value, fetchBody.value);
                console.log('response:', response);
            } catch (e) {
                console.log('error in on submit');
            } finally {
                location.href = '/blog'
            }
        }
        return {
            form,
            dynamicTags,
            inputVisible,
            inputValue,
            inputRef,
            handleClose,
            showInput,
            handleInputConfirm,
            onSubmit,
        }
    }
})

</script>
<style>
.button {
    border: 1px solid #000;
    width: 50px;
    height: 50px;
    background: #999;
}
</style>
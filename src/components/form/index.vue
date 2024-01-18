<template>
    <!-- <el-form :model="form" label-width="120px">
        <el-form-item label="Activity name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Activity form">
            <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form> -->
    <ElButton type="success" @click.native="trigger">{{props.type}}</ElButton>
</template>
<script lang="ts" setup>
import { ElButton } from 'element-plus'
import "element-plus/theme-chalk/src/button.scss";
import "element-plus/theme-chalk/base.css";

const props = defineProps({
    type: {
        type: String,
        default: 'add'
    },
})
const emit = defineEmits([
    'trigger'
])
const trigger = () => {

}

</script>
<style>
.button {
    border: 1px solid #000;
    width: 50px;
    height: 50px;
    background: #999;
}
</style>
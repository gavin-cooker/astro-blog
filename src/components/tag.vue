<template>
    <div class="tag" :style="{
        background: props.color,
        transform: `scale(${props.size})`
    }">
        <slot />
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    color: {
        type: String,
        default: 'black'
    },
    size: {
        type: Number,
        default: 1
    }
})
</script>
<style>
.tag {
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: .3rem;
    margin-right: 10px;
}
</style>
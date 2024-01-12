<template>
    <div class="button" @click.native="trigger">
        {{props.text}}
    </div>
</template>
<script lang="ts" setup>
import {isOpen} from '../store'
const props = defineProps({
    text: {
        type: String,
        default: 'default button text'
    },
    trigger: {
        type: Object,
    }
})
const emit = defineEmits([
    'trigger'
])
const trigger = () => {
    // nanostores
    isOpen.set(!isOpen.value)
    // ele custom event
    const event = new CustomEvent('trigger', { detail: props.text })
    document.querySelector('.astroEntry')?.dispatchEvent(event)
}
defineExpose({
    trigger
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
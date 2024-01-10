<template>
    <div class="button">
        {{props.text}}
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    text: {
        type: String,
        default: 'default button text'
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
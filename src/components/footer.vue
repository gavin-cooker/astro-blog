<template>
    <footer>{{ props.text }}</footer>
</template>
<script lang="ts" setup>
const props = defineProps({
    text: {
        type: String,
        default: 'default footer text'
    }
})

</script>
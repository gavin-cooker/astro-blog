<template>
    <div class="toolBar">
        <a href="/blog/add">+</a>
    </div>
</template>
<script lang="ts" setup>
const emit = defineEmits([
    'trigger'
])

</script>
<style>
.toolBar {
    border: 1px solid #000;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    font-weight: bolder;
    position: fixed;
    right: 10vw;
    bottom: 10vh;
    cursor: pointer;

    a {
        text-decoration: none;
        color: inherit;
        display: inline-block;
        width: 100%;
        height: 100%;
    }
}
</style>
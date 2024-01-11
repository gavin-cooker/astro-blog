<template>
    <div>
        <div>
            current page: {{ props.currentPage }}; total page: {{ props.maxPage }}
        </div>
        <commonLink v-for="number of props.maxPage" class="linkButton" :href="`/blog/${number}`"
            :class="{ 'active': number === props.currentPage }">
            <button>{{ number }}</button>
        </commonLink>
    </div>
</template>
<script lang="ts" setup>
import commonLink from '../components/commonLink.vue'
const props = defineProps({
    currentPage: {
        type: Number,
        default: 0
    },
    maxPage: {
        type: Number,
        default: 0
    },
})

</script>
<style scoped lang="scss">
button {
    cursor: pointer;
}
.linkButton {
    margin-right: .5rem;
}
.active {
    button {
        text-decoration: underline;
    }
}
</style>
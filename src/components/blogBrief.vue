
<template>
    <ul>
        <li v-for="post of props.blogs">
            <a :href="`/blog/${post.slug}/`">
                <img :width="180" :height="90" :src="post.data.heroImage" alt="" />
                <h4 class="title">{{post.data.title}}</h4>
                <p class="date">{{post.data.pubDate}}</p>
            </a>
            <hr />
        </li>
    </ul>
</template>
<script lang="ts" setup>
import type { CollectionEntry } from "astro:content";
import { PropType } from 'vue'
type Props = CollectionEntry<"blog">

const props = defineProps({
    blogs: {
        type: Array as PropType<Props[]>,
        default: () => []
    },
})
</script>
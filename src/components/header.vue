<template>
	<header>
		<nav>
			<h2><commonLink :href="'/'">{{ SITE_TITLE }}</commonLink></h2>
			<div class="internal-links">
				<commonLink :href="'/'">Home</commonLink>
				<commonLink :href="'/blog'">Blog</commonLink>
				<commonLink :href="'/about'">About</commonLink>
			</div>
		</nav>
	</header>
</template>
<script lang="ts" setup>
import commonLink from './commonLink.vue';
import { SITE_TITLE } from '../consts';

</script>

<style lang="scss" scoped>

.internal-links {
	display: flex;
	justify-content: space-around;
}
</style>
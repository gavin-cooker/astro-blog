<template>
	<a :href="href">
		<slot />
	</a>
</template>
<script setup>
const props = defineProps({
	href: {
		type: String,
		default: ''
	}
})
</script>
<style lang="scss" scoped>
a {
	display: inline-block;
	text-decoration: none;
	color: #000;

	&.active {
		font-weight: bolder;
		text-decoration: underline;
	}

	&:hover {
		color: #bc735e;
	}
}
</style>

<script setup lang="ts">
defineProps<{ item: { src: string; illustration: boolean; alt: {vi:string;en:string} }; eager?: boolean }>()
const {locale,t}=useCopy()
</script>
<template><div class="photo"><img :src="item.src" :alt="item.alt[locale]" :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : 'auto'" width="720" height="540"><span v-if="item.illustration" class="mock">{{ t('media.illustration') }}</span></div></template>

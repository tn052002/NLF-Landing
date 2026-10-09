<script setup lang="ts">
import {media} from '~/content/media'
const {t}=useCopy()
</script>
<template><section class="section bg"><div class="wrap"><h2>{{ t('stories.title') }}</h2><div class="cards mt"><article v-for="(item,i) in media.stories" :key="item.src"><MediaImage class="story-photo" :item="item" /><h3 class="mt">{{ t(i===0?'stories.firstTitle':'stories.secondTitle') }}</h3><p class="muted">{{ t(i===0?'stories.firstBody':'stories.secondBody') }}</p></article></div></div></section></template>

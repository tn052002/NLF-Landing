<script setup lang="ts">
import {links} from '~/content/media'
const {t}=useCopy()
</script>
<template><section class="section"><div class="wrap intro"><h2>{{ t('stories.title') }}</h2><p>{{ t('stories.pending') }}</p><p><a class="textlink" :href="links.zaloAdvice" target="_blank" rel="noopener noreferrer">{{ t('common.zalo') }} ↗</a></p><p class="small muted">{{ t('stories.note') }}</p></div></section></template>

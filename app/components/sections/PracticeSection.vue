<script setup lang="ts">
import {media} from '~/content/media'
const {t}=useCopy()
</script>
<template><section id="practice" class="section bg"><div class="wrap split"><MediaImage class="practice-photo" :item="media.practice" /><div><span class="eyebrow">{{ t('practice.eyebrow') }}</span><h2>{{ t('practice.title') }}</h2><div class="steps"><div v-for="key in ['observe','try','home']" :key="key" class="step"><h3>{{ t(`practice.${key}Title`) }}</h3><p>{{ t(`practice.${key}Body`) }}</p></div></div><p class="mt">{{ t('practice.note') }}</p></div></div></section></template>

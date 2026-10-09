<script setup lang="ts">
import {media,links} from '~/content/media'
const {t}=useCopy()
</script>
<template><section class="hero"><div class="wrap split"><div><span class="eyebrow">NEURO LINGUISTIC FITNESS</span><h1>{{ t('hero.title') }}</h1><p>{{ t('hero.description') }}</p><p v-html="t('hero.promise')" /><div class="actions"><a class="btn" href="#workshops">{{ t('hero.cta') }}</a><a class="textlink" :href="links.zaloAdvice" target="_blank" rel="noopener noreferrer">{{ t('common.zalo') }}</a></div></div><MediaImage class="hero-photo" :item="media.hero" eager /></div></section></template>

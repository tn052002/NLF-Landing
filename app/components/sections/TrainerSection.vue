<script setup lang="ts">
import {links} from '~/content/media'
const {t}=useCopy()
</script>
<template><section class="section bg"><div class="wrap intro"><h2>{{ t('trainer.title') }}</h2><p>{{ t('trainer.body') }}</p><p><a class="btn" :href="links.zaloAdvice" target="_blank" rel="noopener noreferrer">{{ t('common.zalo') }} ↗</a></p></div></section></template>

<script setup lang="ts">
import {links} from '~/content/media'
definePageMeta({validate:route=>['vi','en'].includes(String(route.params.locale))})
const {locale,t}=useCopy()
useHead(()=>({title:`NLF · ${t('privacy.title')}`,htmlAttrs:{lang:locale.value}}))
</script>
<template><div><SiteHeader/><main id="main" class="wrap section privacy"><h1>{{ t('privacy.title') }}</h1><p>{{ t('privacy.body') }}</p><p><a class="textlink" :href="links.zaloAdvice" target="_blank" rel="noopener noreferrer">{{ t('common.zalo') }}</a></p><p><NuxtLink class="btn" :to="`/${locale}`">{{ t('privacy.back') }}</NuxtLink></p></main><SiteFooter/></div></template>

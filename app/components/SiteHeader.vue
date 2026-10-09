<script setup lang="ts">
import { media } from '~/content/media'
const { locale, t } = useCopy()
const route = useRoute()
const alternate = (language: string) => ({ path: route.path.replace(/^\/(vi|en)/, `/${language}`), hash: route.hash })
</script>
<template>
  <a class="skip" href="#main">{{ t('common.skip') }}</a>
  <header><div class="wrap nav">
    <NuxtLink class="brand" :to="`/${locale}`"><img :src="media.logo.src" :alt="media.logo.alt" width="104" height="78"><span>NLF VIETNAM<small>NEURO-LINGUISTIC FITNESS</small></span></NuxtLink>
    <nav aria-label="Main"><a :href="`/${locale}#practice`">{{ t('nav.practice') }}</a><a :href="`/${locale}#workshops`">{{ t('nav.workshops') }}</a><a :href="`/${locale}#faq`">{{ t('nav.faq') }}</a>
      <div class="languages" aria-label="Language"><NuxtLink v-for="l in ['vi','en']" :key="l" :to="alternate(l)" :aria-current="locale === l ? 'page' : undefined">{{ l.toUpperCase() }}</NuxtLink></div>
    </nav>
  </div></header>
</template>

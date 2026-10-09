<script setup lang="ts">
import { media } from '~/content/media'
const {locale,t}=useCopy()
</script>
<template><footer><div class="wrap footer-row"><img :src="media.logo.src" :alt="media.logo.alt" width="104" height="78"><p>{{ t('footer.tagline') }}</p><NuxtLink :to="`/${locale}/privacy`">{{ t('signup.privacy') }}</NuxtLink></div></footer></template>

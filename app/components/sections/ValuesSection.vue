<script setup lang="ts">const {t}=useCopy()</script>
<template><section class="section values-section"><div class="wrap"><h2>{{ t('values.title') }}</h2><div class="values mt"><article v-for="key in ['community','results','growth','humility']" :key="key"><h3>{{ t(`values.${key}Title`) }}</h3><p>{{ t(`values.${key}Body`) }}</p></article></div></div></section></template>

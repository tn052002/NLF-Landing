<script setup lang="ts">const {t}=useCopy()</script>
<template><section id="faq" class="section"><div class="wrap faq"><h2>{{ t('faq.title') }}</h2><details v-for="key in ['start','limitations','details','continue']" :key="key"><summary>{{ t(`faq.${key}Question`) }}</summary><p>{{ t(`faq.${key}Answer`) }}</p></details></div></section></template>

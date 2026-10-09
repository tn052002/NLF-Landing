<script setup lang="ts">
import type { WorkshopEvent } from '~~/shared/catalogue'
definePageMeta({validate:route=>['vi','en'].includes(String(route.params.locale))})
const {locale,t}=useCopy()
const config=useRuntimeConfig()
const {data:events,error}=await useFetch<WorkshopEvent[]>('/api/workshops',{default:()=>[]})
const selection=useState('registration-selection',()=>({programme:'',eventId:''}))
function select(programme:string,eventId=''){selection.value={programme,eventId};document.getElementById('signup')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}
useHead(()=>({htmlAttrs:{lang:locale.value},title:`NLF Vietnam · ${t('hero.title')}`,meta:[{name:'description',content:t('hero.description')},{name:'robots',content:config.public.preview?'noindex,nofollow':'index,follow'}],link:config.public.siteUrl?[{rel:'canonical' as const,href:`${config.public.siteUrl}/${locale.value}`},...['vi','en'].map(l=>({rel:'alternate' as const,type:'text/html',hreflang:l,href:`${config.public.siteUrl}/${l}`}))]:[]}))
</script>
<template><div><div v-if="config.public.preview" class="preview">{{ t('preview.notice') }}</div><SiteHeader/><main id="main"><SectionsHeroSection/><SectionsPracticeSection/><SectionsGoalsSection/><SectionsStoriesSection/><SectionsWorkshopsSection :events="events" :unavailable="!!error" @select="select"/><SectionsValuesSection/><SectionsFaqSection/><RegistrationSection :events="events"/></main><SiteFooter/></div></template>

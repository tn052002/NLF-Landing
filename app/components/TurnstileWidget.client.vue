<script setup lang="ts">
const emit=defineEmits<{token:[value:string]}>()
const props=defineProps<{reset:number}>()
const config=useRuntimeConfig()
const container=ref<HTMLElement>()
let widget:string|undefined
type Turnstile={render:(el:HTMLElement,options:Record<string,unknown>)=>string;remove:(id:string)=>void;reset:(id:string)=>void}
const api=()=> (window as unknown as {turnstile?:Turnstile}).turnstile
let cancelled=false
onMounted(async()=>{
  if(!config.public.turnstileSiteKey)return
  if(!api())await new Promise<void>((resolve,reject)=>{const script=document.createElement('script');script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';script.async=true;script.onload=()=>resolve();script.onerror=()=>reject(new Error('challenge_unavailable'));document.head.appendChild(script)}).catch(()=>{})
  if(!cancelled&&api()&&container.value)widget=api()!.render(container.value,{sitekey:config.public.turnstileSiteKey,action:'registration',callback:(token:string)=>emit('token',token),'expired-callback':()=>emit('token',''),'error-callback':()=>emit('token','')})
})
watch(()=>props.reset,()=>{if(widget)api()?.reset(widget);emit('token','')})
onBeforeUnmount(()=>{cancelled=true;if(widget)api()?.remove(widget)})
</script>
<template><div ref="container" class="turnstile"/></template>

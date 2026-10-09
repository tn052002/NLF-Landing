<script setup lang="ts">
import {programmes,type WorkshopEvent} from '~~/shared/catalogue'
import {registrationSchema} from '~~/shared/registration'
import {links} from '~/content/media'
const props=defineProps<{events:WorkshopEvent[]}>()
const {locale,t}=useCopy()
const selection=useState('registration-selection',()=>({programme:'',eventId:''}))
// Memory only; no personal details go into localStorage or cookies.
const form=useState('registration-draft',()=>({name:'',phone:'',message:'',consent:false,website:''}))
const requestKey=useState('registration-request-key',()=> '')
const previousPayload=useState('registration-request-payload',()=> '')
const pending=ref(false),errorKey=ref(''),token=ref(''),reset=ref(0)
const result=ref<{reference:string;status:string}|null>(null)
const confirmation=ref<HTMLElement>()
const eligibleEvents=computed(()=>props.events.filter(e=>e.programmeId===selection.value.programme))
watch(()=>selection.value.programme,()=>{if(!eligibleEvents.value.some(e=>e.id===selection.value.eventId))selection.value.eventId=''})
async function submit(){
  if(pending.value)return
  errorKey.value='';result.value=null
  const payload={...form.value,programmeId:selection.value.programme,eventId:selection.value.eventId||null,locale:locale.value}
  const signature=JSON.stringify(payload)
  if(!requestKey.value||signature!==previousPayload.value){requestKey.value=crypto.randomUUID();previousPayload.value=signature}
  const parsed=registrationSchema.safeParse({...payload,idempotencyKey:requestKey.value,turnstileToken:token.value})
  if(!parsed.success){errorKey.value='signup.invalid';return}
  pending.value=true
  try{
    result.value=await $fetch('/api/registrations',{method:'POST',body:parsed.data})
    form.value={name:'',phone:'',message:'',consent:false,website:''}
    requestKey.value='';previousPayload.value=''
    await nextTick();confirmation.value?.focus()
  }catch(e){const code=(e as {statusCode?:number}).statusCode;errorKey.value=code===429?'signup.rate':code===400?'signup.invalid':'signup.error'}
  finally{pending.value=false;reset.value++}
}
</script>
<template><section id="signup" class="section bg"><div class="wrap register"><div><h2>{{ t('signup.title') }}</h2><p>{{ t('signup.intro') }}</p><p><a class="textlink" :href="links.zaloAdvice" target="_blank" rel="noopener noreferrer">{{ t('signup.zalo') }}</a></p><p class="small">{{ t('signup.note') }}</p></div><div><form :aria-busy="pending" @submit.prevent="submit"><label>{{ t('signup.name') }}<input v-model="form.name" name="name" autocomplete="name" required minlength="2" maxlength="100"></label><label>{{ t('signup.phone') }}<input v-model="form.phone" name="phone" type="tel" autocomplete="tel" required maxlength="30"></label><label>{{ t('signup.programme') }}<select v-model="selection.programme" name="programme" required><option value="">{{ t('signup.choose') }}</option><option v-for="p in programmes" :key="p.id" :value="p.id">{{ p.name }}</option><option value="advice">{{ t('signup.advice') }}</option></select></label><label v-if="eligibleEvents.length">{{ t('signup.event') }}<select v-model="selection.eventId" name="event"><option value="">{{ t('signup.interest') }}</option><option v-for="event in eligibleEvents" :key="event.id" :value="event.id">{{ new Intl.DateTimeFormat(locale,{timeZone:'Asia/Ho_Chi_Minh'}).format(new Date(event.startsAt)) }} · {{ event.location }}{{ event.status==='full'?' · '+t('workshops.full'):'' }}</option></select></label><label>{{ t('signup.message') }}<textarea v-model="form.message" name="message" maxlength="2000"/></label><p class="small">{{ t('signup.privateNote') }}</p><label class="honeypot" aria-hidden="true">Website<input v-model="form.website" name="website" tabindex="-1" autocomplete="off"></label><label class="check mt"><input v-model="form.consent" type="checkbox" required><span>{{ t('signup.consent') }} <NuxtLink class="textlink" :to="`/${locale}/privacy`" target="_blank">{{ t('signup.privacy') }}</NuxtLink></span></label><ClientOnly><TurnstileWidget :reset="reset" @token="token=$event"/></ClientOnly><p v-if="errorKey" class="error" role="alert">{{ t(errorKey) }}</p><button type="submit" class="btn full-width" :disabled="pending">{{ t(pending?'signup.sending':'signup.submit') }}</button></form><div v-if="result" ref="confirmation" class="confirmation" role="status" tabindex="-1"><h3>{{ t('signup.successTitle') }}</h3><p>{{ t('signup.reference') }}: {{ result.reference }}</p><p>{{ t('signup.successBody') }}</p></div></div></div></section></template>

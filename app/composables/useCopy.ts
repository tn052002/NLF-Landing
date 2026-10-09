import vi from '~/content/vi.json'
import en from '~/content/en.json'
export function useCopy() {
  const route = useRoute()
  const locale = computed<'vi' | 'en'>(() => route.params.locale === 'en' ? 'en' : 'vi')
  const t = (key: string) => (locale.value === 'en' ? en : vi)[key as keyof typeof vi] ?? key
  return { locale, t }
}

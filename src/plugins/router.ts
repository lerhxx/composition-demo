import { provide, inject } from '@vue/composition-api'

export const RouterSymbol = Symbol()

export function provideRouter(router: any) {
  provide(RouterSymbol, router)
}

export function useRouter() {
	const router = inject(RouterSymbol)
  if (!router) {
		// throw error, no router provided
		return {}
  }
  return router
}
import { provide, inject } from '@vue/composition-api'

export const StoreSymbol = Symbol()

export function provideStore(store: any) {
  provide(StoreSymbol, store)
}

export function useStore() {
	const store = inject(StoreSymbol)
  if (!store) {
		// throw error, no store provided
		return {}
  }
  return store
}
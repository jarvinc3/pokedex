import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ViewModeState {
   isList: boolean
   toggleView: () => void
   setView: (value: boolean) => void
}

export const useViewModeStore = create<ViewModeState>()(
   persist(
      (set) => ({
         isList: true,
         toggleView: () => set((state) => ({ isList: !state.isList })),
         setView: (value) => set({ isList: value }),
      }),
      {
         name: 'view-mode-storage',
      }
   )
)

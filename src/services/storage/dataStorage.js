import { create } from 'zustand'

export const useUserStorage = create((set) => ({
    userId: null,
    setUserId: (userId) => set({ userId }),

}))

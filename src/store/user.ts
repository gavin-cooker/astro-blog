import { defineStore } from 'pinia';
export const useMainStore = defineStore({
    id: 'globalStore',
    state: () => ({
      mac: '',
      area: '',
    })
})
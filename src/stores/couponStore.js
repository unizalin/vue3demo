import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore from './statusStore'
const status = statusStore()

export default defineStore('couponStore', {
  state: () => {
    return {
      coupons: []
    }
  },
  getters: {
    sortProducts: (state) => state.products.sort((a, b) => a.price - b.price)
  },
  actions: {
    getCoupons () {
      status.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      axios.get(url, this.tempProduct).then((response) => {
        this.coupons = response.data.coupons
        status.isLoading = false
        console.log(response)
      })
    }
  }
})

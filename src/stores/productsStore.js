import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore from './statusStore'
const status = statusStore()

export default defineStore('productStore', {
  state: () => {
    return {
      products: [],
      productsPage: [],
      pagination: {}
    }
  },
  getters: {
    sortProducts: (state) => state.products.sort((a, b) => a.price - b.price)
  },
  actions: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      status.isLoading = true
      console.log(status)
      axios.get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('actions getProducts', res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
            status.isLoading = false
          }
        })
    },
    getProductPage (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      status.isLoading = true
      axios.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log('getProductPage', res.data)
            this.productsPage = res.data.products
            this.pagination = res.data.pagination
            status.isLoading = false
          }
        })
    },
    updateProduct (item) {
      console.log(item)
      // 新增方式
      this.tempProduct = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 利用 data isNew 判定是否已存在來編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      status.isLoading = true

      axios[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          console.log(res)
          productComponent.hideModal()
          if (res.data.success) {
            console.log('success true')
            this.getProducts()
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功'
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、')
            })
          }
          status.isLoading = false
        })
    }
  }
})

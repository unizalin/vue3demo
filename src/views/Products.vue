<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button class="btn bnt-primary" type="button" @click="openModal(true)"> 增加一個</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product , idx) in products" :key="idx">
        <td>{{product.category}}</td>
        <td>{{product.content}}</td>
        <td class="text-right">{{product.origin_price}}</td>
        <td class="text-right">{{product.price}}</td>
        <td>
          <span class="text-success" v-if="product.is_enabled">啟用</span>
          <span class="text-success" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false,product)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="dalModal(product)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
  <DelModal ref="delModal" :product="tempProduct"></DelModal>
</template>
<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DelModal
  },
  inject: ['emitter'],
  methods: {
    openModal (isNew, item) {
      if (this.isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    dalModal (item) {
      this.tempProduct = { ...item }
      // this.$refs 直接取代 ＄()
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            // console.log(res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
            this.isLoading = false
          }
        })
    },
    updateProduct (item) {
      console.log(item)
      this.tempProduct = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 利用 data isNew 判定是否已存在來編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.isLoading = true

      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          console.log(res)
          productComponent.hideModal()
          if (res.data.success) {
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
          this.isLoading = false
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<template>
  <Loading :active="isLoading"></Loading>
  <UserNav></UserNav>
  <div class="tosat">
    <ToastMessages></ToastMessages>
  </div>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-style">
        <li class="breadcrumb-item font-weight-bold">
            首頁
          </li>
          <li aria-current="page" class="breadcrumb-item font-weight-bold active text-lakeblue">商品</li>
        </ol>
    </nav>
    <div class="row">
      <div class="col-md-2">
        <div class="row">
          <div class="col-sm-12 col-md-12 text-center mb-2 sortList" @click="active='all'" :class="active=='all'?'active':''">
            <div class="sortBtn font-weight-bold sortBtn_All" >全部商品</div>
          </div>
          <div class="col-3 col-md-12 text-center mb-2 sortList" @click="active='牛肉'" :class="active=='牛肉'?'active':''">
            <div class="sortBtn font-weight-bold">牛肉</div>
          </div>
          <div class="col-3 col-md-12 text-center mb-2 sortList" @click="active='豬肉'"  :class="active=='豬肉'?'active':''">
            <div class="sortBtn font-weight-bold">豬肉</div>
          </div>
          <div class="col-3 col-md-12 text-center mb-2 sortList" @click="active='堅果'"  :class="active=='堅果'?'active':''">
            <div class="sortBtn font-weight-bold">堅果</div>
          </div>
          <div class="col-3 col-md-12 text-center mb-2 sortList" @click="active='蜜餞'"  :class="active=='蜜餞'?'active':''">
            <div class="sortBtn font-weight-bold">蜜餞</div>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="row">
            <div class="classbox"  v-for="item in sortProducts" :key="item.id">
              <div class="top">
                <div class="classpicture" :style="'background-image:url('+item.imageUrl+')'"></div>
                <div class="tag">{{item.category}}</div>
                <div class="bookbtn"  @click="addCart(item.id)">
                  <i class="far fa-bookmark"></i></div>
              </div>
              <div class="bottom">
                <h1 class="classtitle">{{item.title}}</h1>
                <div class="texts">
                  <div class="pricerow">
                    <div class="preprice">原價<span class="orange">NT${{item.origin_price}}</span>，現在只要<span class="orange">NT${{item.price}}</span></div>
                  </div>
                  <div class="content">{{item.description.substring(0, 20)}}....</div>
                </div>
                <div class="btn-group btn-group-sm w-100">
                    <button type="button" class="btn btn-outline-secondary" @click="getProduct(item.id)">
                      查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger" @click="addCart(item.id)" :disabled="this.cartLoadingItem === item.id">加到購物車
                      <div v-if="this.cartLoadingItem === item.id"
                        class="spinner-grow text-danger spinner-grow-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    </button>
                  </div>
                <div class="orangebar"></div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="shopCart">
      <i class="fas fa-shopping-cart"></i>
      <div class="cartItem">
        <div class="cartBox">
          <UserCart></UserCart>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import { mapActions, mapState } from 'pinia'
import productsStore from '../stores/productsStore'
import statusStore from '../stores/statusStore'
import cartStore from '../stores/cartStore'
import UserNav from '@/components/UserNav.vue'
import UserCart from '@/components/UserCart.vue'
import router from '../router'
import ToastMessages from '@/components/ToastMessage.vue'

export default {
  data () {
    return {
      active: 'all',
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: {
    UserNav,
    UserCart,
    ToastMessages
  },
  computed: {
    ...mapState(productsStore, ['products']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(cartStore, ['cart']),
    sortProducts: function () {
      if (this.active === 'all') {
        return this.products
      } else {
        const filter = this.products.filter((item, idx) => {
          return item.category === this.active
        })
        return filter
      }
    }
  },
  methods: {
    ...mapActions(productsStore, ['getProducts']),
    ...mapActions(cartStore, ['addCart', 'getCart', 'updateCart', 'removeCartItem']),
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      this.isLoading = true
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(url, { data: coupon })
        .then((res) => {
          this.isLoading = false
          console.log(res)
          this.getCart()
        })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res)
          const checkoutId = res.data.orderId
          this.$router.push(`/user/checkout/${checkoutId}`)
        })
    },
    getProduct (item) {
      router.push(`/user/product/${item}`)
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}

</script>
<style>
.tosat{
  position: fixed;
  top: 8%;
  width: 100%;
  right: 8px;
  z-index: 9;
}
.sortBtn{
  border: 1px solid #333;
  border-radius: 8px;
  padding: 4px 0;
  cursor: pointer;
}
.sortBtn:hover{
  background-color: #f4f4f4;
}
.sortList.active .sortBtn{
  background-color: #777;
  cursor: default;
}
.classbox {
  width: 260px;
  background-color: white;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin: 30px 15px;
  padding: 0;
}

.classbox:hover .bookbtn {
  bottom: 10px;
}
.classbox:hover .classpicture {
  -webkit-transform: scale(1.13);
          transform: scale(1.13);
}
.classbox:hover .bottom .valuebar {
  width: 200px;
}

.top {
  width: 100%;
  height: 170px;
  overflow: hidden;
  position: relative;
}
.top .tag {
  width: 100%;
  text-align: center;
  -webkit-transform: translateX(95px) translateY(15px) rotate(45deg);
          transform: translateX(95px) translateY(15px) rotate(45deg);
  padding: 5px 0px;
  background-color: #FA8B00;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 20px;
}
.top .classpicture {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("https://hahow.in/images/574fab4f206cd60900c52a67?width=300");
  background-size: cover;
  background-position: center center;
  border-radius: 5px 5px 0px 0px;
  left: 0;
  top: 0;
  transition: 0.3s;
}
.top .bookbtn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  position: absolute;
  left: 15px;
  bottom: -50px;
  transition: bottom 0.3s;
  background-color: #fff;
  color: #EB5E00;
  cursor: pointer;
}
.top .bookbtn i {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  font-size: 22px;
}
.top .bookbtn:hover {
  background-color: #EB5E00;
  color: white;
}

.bottom {
  height: 184px;
  padding: 9px;
  position: relative;
}
.bottom .classtitle {
  font-size: 25px;
  margin-top: 0;
}
.bottom .texts {
  font-size: 15px;
  letter-spacing: 1px;
}
.bottom .texts .orange {
  padding-left: 5px;
  color: #FA8B00;
}
.bottom .pricerow {
  margin-bottom: 10px;
}
.bottom .pricerow .lastday {
  position: absolute;
  top: 0;
  right: 0;
}
.bottom .progressbar {
  height: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #e0e0db;
  overflow: hidden;
}
.bottom .progressbar .valuebar {
  border-radius: 5px 0px 0px 5px;
  transition: 0.5s;
  width: 150px;
  height: 100%;
  background-color: #FA8B00;
}
.bottom .nowpeople {
  text-align: center;
}
.bottom .orangebar {
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #EB5E00;
  border-radius: 0px 0px 5px 5px;
}

.shopCart{
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid #EB5E00;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 12%;
}
.shopCart:hover{
  background: #EB5E00;
}
.shopCart:hover .cartItem{
  display: block;
}
.cartItem{
  display: none;
  position: relative;
}
.cartBox{
  width: 320px;
  position: absolute;
  right: 0;
  top: -32vh;
  background-color: #fff;
  padding-top: 40px;
}

</style>

<template>
  <Navbar></Navbar>
  <div class="container-fluid position-relative">
    <div class="row">
      <Sidebar></Sidebar>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-4">
        <ToastMessages></ToastMessages>
        <router-view></router-view>
      </main>
      <!-- <router-view/> -->
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessage.vue'
export default {
  name: 'dashbord',
  components: {
    Navbar,
    Sidebar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  // 判斷是否登入
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log('check token', token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then((res) => {
      // console.log(res)
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>

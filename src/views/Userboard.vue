<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <router-view/>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'userBoard',
  components: {
    Navbar
  }
}
</script>

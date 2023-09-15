<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HeadBar from './components/HeadBar.vue'
import Merchant from './components/Merchant.vue'
import FootBar from './components/FootBar.vue'
import Login from './views/Login.vue'
</script>

<template>
  <!-- <div class="index">
    <HeadBar />
    <div style="display:flex ;">
      <Merchant />
      <router-view></router-view>
    </div>
    <FootBar />
  </div> -->
  <div class="index">
    <Login />
  </div>
</template>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  display: flex;
  background: #f8f6e9;
  flex-direction: column;
}
</style>

<template>
  <nav>
    <router-link to="/Home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/cart">Cart</router-link> | 
    <router-link to="/Wishlist">Wishlist</router-link> |
    <router-link to="/SellIt">SellIt</router-link> |
    <router-link to="/Farm">Farm</router-link> |
    <router-link to="/Butcher">Butcher</router-link> |
    <router-link to="/Blog">Blog</router-link> |
  </nav>
  <router-view v-slot="{ Component, route }">
  <transition :enter-active-class="route.meta.enterClass"
  :leave-active-class="route.meta.leaveClass">
  <component :is="Component"/></transition>
  </router-view>
</template>
<script>
import 'animate.css';
export default{}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.page{
  position: absolute;
  top: 30px;
}
.fade-enter-from,
.fade-leave-to{
  opacity:0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease-out;
}
</style>

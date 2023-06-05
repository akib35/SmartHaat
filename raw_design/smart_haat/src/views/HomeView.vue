<template>
  <v-app>
    <NavbarView class="index"/>
    <DashboardView/>
    <FooterView/>
    
  </v-app>
    
   
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import NavbarView from '@/components/NavbarView.vue'
import DashboardView from '@/components/DashboardView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  name: 'HomeView',
  components: {
   // HelloWorld,
    NavbarView,
    DashboardView,
    FooterView

  }
}
</script>

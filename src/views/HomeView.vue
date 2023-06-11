<template>
  <v-app>
    <NavbarView class="index"/>
    <DashboardView/>
    <FooterView/>
  </v-app>
 
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavbarView from '@/components/NavbarView.vue';
import DashboardView from '@/components/DashboardView.vue';
import FooterView from '@/components/FooterView.vue';

export default defineComponent({
  name: 'HomeView',
  
  components: {
    NavbarView,
    DashboardView,
    FooterView,

  },
});
</script>


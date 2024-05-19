import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueDatePicker from '@vuepic/vue-datepicker';
import Pagination from 'v-pagination-3';
import '@vuepic/vue-datepicker/dist/main.css';
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
loadFonts()
createApp(App).use(router)
  .use(vuetify)
  .use(pinia).component('VueDatePicker', VueDatePicker)
  .component('pagination', Pagination)
  .mount('#app')



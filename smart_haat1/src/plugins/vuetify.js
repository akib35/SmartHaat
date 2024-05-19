// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VuetifyDateAdapter } from 'vuetify/labs/date/adapters/vuetify'

// Vuetify
import { createVuetify } from 'vuetify'
export default createVuetify({
  date: {
    adapter: VuetifyDateAdapter,
  },
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)

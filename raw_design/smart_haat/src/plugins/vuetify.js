// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons:{
    iconfont : 'md'|| 'fa' || 'md'
  },
  theme : {
    themes :{
      light : {
        primary: '#7C92FE'
      }
    }
  }
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)

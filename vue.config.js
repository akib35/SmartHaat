const { defineConfig } = require('@vue/cli-service')
const { default: BootstrapVue, IconsPlugin } = require('bootstrap-vue')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

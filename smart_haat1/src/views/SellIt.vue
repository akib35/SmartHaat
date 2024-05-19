<template>
        <v-app>
        <NavbarView class="index"/>
    <div class="py-8">
        <v-file-input
    v-model="files"
    color="deep-blue-accent-4"
    counter
    label="File input"
    multiple
    placeholder="Select your files"
    prepend-icon="mdi-camera"
    variant="outlined"
    :show-size="1000"
  >
    <template v-slot:selection="{ fileNames }">
      <template v-for="(fileName, index) in fileNames" :key="fileName">
        <v-chip
          v-if="index < 2"
          color="deep-blue-accent-4"
          label
          size="small"
          class="me-2"
        >
          {{ fileName }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="text-overline text-grey-darken-3 mx-2"
        >
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </template>
  </v-file-input>
  <v-sheet max-width="300" class="mx-auto">
    <v-form validate-on="submit lazy" @submit.prevent="submit">
      <v-text-field
        v-model="userName"
        :rules="rules"
        label="User name*"
      ></v-text-field>
      <v-text-field
        v-model="price"
        label="Price*"
      ></v-text-field>
      <v-text-field
        v-model="weight"
        label="Live Weight*"
      ></v-text-field>
      <v-text-field
        v-model="location"
        label="Location*"
      ></v-text-field>
      <v-text-field
        v-model="breed"
        label="Breed*"
      ></v-text-field>
      <v-text-field
        v-model="farmId"
        label="Farm Id"
      ></v-text-field>
      <v-textarea
      name="input-7-1"
      variant="filled"
      label="Description*"
      auto-grow
    ></v-textarea>
      <v-btn
        :loading="loading"
        type="submit"
        block
        class="mt-2"
        text="Submit"
        color="blue"
      ></v-btn>
    </v-form>
  </v-sheet>
    </div>
    <FooterView/>
    </v-app> 
</template>
<script>
import { defineComponent } from 'vue';
import NavbarView from '@/components/NavbarView.vue';
import FooterView from '@/components/FooterView.vue';
export default defineComponent({
    name: 'SellIt',
    components: {
        NavbarView,
        FooterView,
    },
    data: vm => ({
      files: [],
      loading: false,
      rules: [value => vm.checkApi(value)],
      timeout: null,
      userName: '',
    }),

    methods: {
      async submit (event) {
        this.loading = true

        const results = await event

        this.loading = false

        alert(JSON.stringify(results, null, 2))
      },
      async checkApi (userName) {
        return new Promise(resolve => {
          clearTimeout(this.timeout)

          this.timeout = setTimeout(() => {
            if (!userName) return resolve('Please enter a user name.')
            if (userName === 'sadman') return resolve('User name does not match. Please try appropriate one.')
            return resolve(true)
          }, 1000)
        })
      },
    } 
})
</script>
<style>
</style>
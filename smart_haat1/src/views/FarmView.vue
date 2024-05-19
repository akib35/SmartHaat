<template>
    <v-app>
        <NavbarView class="index"/>
    <div>
     <v-container fluid>
     <v-card tile class="text-xs-center mx-5 mt-n6 card1" color="white">
        <v-layout row wrap>
          <v-flex cols-12>
            <v-carousel
              cycle
              class="carousel"
              hide-delimiter-background=""
              height="700px"
              show-arrows="hover"
              style="width: 1472px"
            >
              <v-carousel-item
                v-for="(img, i) in imgs"
                :key="i"
                :src="img.src"
                transition="scroll-x-transition"
                class="fade"
                cover
              >
                    <div class="d-flex fill-height align-center justify-center text-white"><div class="text-h3">{{ img.title }}</div></div>
                      <template v-slot:divider>
                        <v-icon color="#7C92FE">mdi-chevron-right</v-icon>
                    </template>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <v-row justify="center" class="pt-4 pb-4 px-4">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="blue"
          v-bind="props"
          variant="outlined"
          size="large"
        >
          Register Your Farm
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Farm Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Farm Name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Farm Id*"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Seller's User Name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Official Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-5', '5-10', '10-15', '15+']"
                  label="Duration*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Dhaka', 'Gazipur', 'Chittagong', 'Barisal', 'Pabna', 'Sirajganj', 'Nilfamary', 'Kustia', 'Khulna', 'Sylhet', 'Narayanganj', 'Cumilla', 'Rajshahi', 'Rangpur', 'Jessore']"
                  label="District*"
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Address*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-row>
            <v-col cols="12" sm="7">
                 <v-checkbox label="I Accept All Terms & Condition" class="mt-3 ml-0 d-flex justify-start" color="blue"
                 ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="5" class="mt-6">
                <span class="caption text-blue" justify="right">Terms & Condition</span>
                </v-col>                                 
                                        
          </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            :loading="loading"
            type="submit"
            color="blue-darken-1"
            variant="tonal"
            rounded="xl"
            @click="load"
          >
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <v-col cols="12" class="mt-2">
    <v-row class="fill height align-center" justify="center">
      <v-col cols="12" sm="2" v-for="(farm, i) in farms" :key="i" class="bg-grey-lighten-3">
        <div>
          <v-card>
            <v-avatar size="100">
              <v-img :src="farm.img">
              </v-img>
            </v-avatar>
            <v-card-text class="mx-auto pt-4"><strong>{{ farm.name }}</strong></v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  
  </v-col>
     </v-card>
     </v-container>   
    </div>
    <FooterView/>
    </v-app>
</template>
<script>
import { defineComponent } from 'vue';
import NavbarView from '@/components/NavbarView.vue';
import FooterView from '@/components/FooterView.vue';
export default defineComponent({
    name: 'WishlistView',
    components: {
        NavbarView,
        FooterView,
    },
    data: () => ({
    dialog: false,
    loaded: false,
    loading :false,
    imgs: [
        {
          src: "cattle-1.png",
          title: "Sell Your Cattle",
        },
        {
          src: "Cattle-2.png",
          title: "Find All The Firms In Bangladesh",
        },
        {
          src: "Cattle-4.avif",
          title: "Verified By Experts",
        },
        {
          src: "Cattle-11.jpg",
          title: "Upload From Anywhere",
        },
      ],
      methods: {
        load () {
        this.loading = true
        setTimeout(() => (this.loading = false,
                          this.loaded = true
                          ), 2500)
      },
    },
    farms: [
      {
        img: "Farm-1.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-4.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-5.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-6.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-9.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-7.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-8.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-2.avif",
        name: "Sadek Agro",
      },
      {
        img: "Farm-3.png",
        name: "Sadek Agro",
      },
      {
        img: "Farm-10.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-11.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-12.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-13.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-10.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-7.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-5.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-9.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-14.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-15.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-16.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-17.webp",
        name: "Sadek Agro",
      },
      {
        img: "Farm-18.png",
        name: "Sadek Agro",
      },
      {
        img: "Farm-19.webp",
        name: "Sadek Agro",
      },
      {
        img: "Farm-20.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-21.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-22.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-23.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-24.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-10.jpeg",
        name: "Sadek Agro",
      },
      {
        img: "Farm-12.jpeg",
        name: "Sadek Agro",
      },
    ],
  }),
})
</script>
<style>
 .fade {
    transition: opacity 0.3s ease out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .card1 {
    z-index: 10;
  }
</style>
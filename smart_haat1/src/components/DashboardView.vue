<template>
    <v-container fluid>
      <!-- <v-card
        color="blue-lighten-5"
        height="150px"
        title
        flat
        class="d-flex align-center justify-center light"
        light
      >
        <v-row>
          <v-col cols="12" sm="12">
            <h4 class="white-text">Cattle</h4>
            <v-breadcrumbs :items="items" class="justify-center mt-0" light>
              <template v-slot:divider>
                <v-icon color="#7C92FE">mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </v-col>
        </v-row>
      </v-card> -->
      <v-card tile class="text-xs-center mx-3 mt-n6 card1" color="white">
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
                <div class="d-flex fill-height justify-center align-center">
                  <div class="text-h3 white-text">
                    {{ img.title }}
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <!-- <div id="example">
          <carousel-3D :control-visible="true"
          :clickable="false" :key="imgs.length"
          :listData="imgs" :height="500"
          >
              <slide :index="i" :key="i" v-for="(img, i) in this.imgs">
                  <figure>
                      <img src="cow-1.jpg" alt="">
                      <figcaption>
                          <v-btn :to="/imgs/${img.src}" color="white">{{ img.src }}</v-btn>
                      </figcaption>
                  </figure>
              </slide>
          </carousel-3D>
          </div> -->
        <v-row>
          <v-col cols="12" sm="3" class="mt-0 pr-0 text-white">
            <v-toolbar VToolbar border class="bg-white">
              <v-toolbar-title><strong>Filter</strong></v-toolbar-title>
  
              <v-divider vertical></v-divider>
              <v-btn icon class="button">
                <v-icon color="#3853D8"> mdi-sync </v-icon>
              </v-btn>
              <v-divider vertical></v-divider>
            </v-toolbar>
          </v-col>
          <v-col cols="12" sm="3" class="mt-0 px-0">
            <v-toolbar VToolbar border class="bg-white">
              <v-toolbar-title> Sort By:<span>Price</span></v-toolbar-title>
  
              
              <v-btn icon class="button">
                <v-icon color="black"> mdi-menu-down </v-icon>
              </v-btn>
             
            </v-toolbar>
          </v-col>
          <v-col cols="12" sm="3" class="mt-0 px-0">
            <v-toolbar class="bg-white" VToolbar border>
              <v-toolbar-title> Show:</v-toolbar-title>
  
              
              <v-btn icon class="button">
                <v-icon color="black"> mdi-menu-down </v-icon>
              </v-btn>
            </v-toolbar>
          </v-col>
          <v-col cols="12" sm="3" class="mt-0 pl-0">
            <v-toolbar VToolbar border class="bg-white">
             
              <v-btn icon class="button">
                <v-icon color="#3853D8"> mdi-apps </v-icon>
              </v-btn>
              <v-divider vertical></v-divider>
              <v-btn icon class="button">
                <v-icon color="grey">mdi-format-list-bulleted</v-icon>
              </v-btn>
              
              <v-toolbar-title> compare:</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            
          </v-col>
          <v-col cols="3" class="py-0 pr-0 mt-n3">
            <v-card variant="outlined" tile class="ma-0">
              <v-toolbar VToolbar border>
                <v-icon color="black" class="button">mdi-chevron-down</v-icon>
                
                <div class="margin">
                  <strong>Categories</strong>
                </div>
                <v-spacer></v-spacer>
                <v-icon color=" black " small class="cross">mdi-close</v-icon>
              </v-toolbar>
              <v-list dense class="mt-n5" border>
                <v-list-item v-for="style in styles" :key="style.title">
                  <v-list-item-comment
                    v-text="style.title"
                    class="ml-6"
                  ></v-list-item-comment>
                  <v-list-item-action>
                    <v-list-item-subtitle v-text="style.count"></v-list-item-subtitle>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
           
            <v-card variant="outlined" tile>
              <v-toolbar VToolbar border>
                <v-icon color="black" class="button">mdi-chevron-down</v-icon>
                <strong>PRICE</strong>
                <v-spacer></v-spacer>
                <v-icon color="black" small class="cross">mdi-close</v-icon>
              </v-toolbar>
              <v-range-slider 
              v-model="range"
              color="blue" :max="20000" :min="500"
              :step="1"
              hide-details="" class="align-center">
              <template v-slot:prepend>
      <v-text-field
        :model-value="range[0]"
        hide-details
        single-line
        type="number"
        variant="outlined"
        density="compact"
        style="width: 75px"
        @change="$set(range, 0, $event)"
      ></v-text-field>
    </template>
    <template v-slot:append>
      <v-text-field
        :model-value="range[1]"
        hide-details
        single-line
        type="number"
        variant="outlined"
        style="width: 95px"
        density="compact"
        @change="$set(range, 1, $event)"
      ></v-text-field>
    </template>
              </v-range-slider>
            </v-card>
            <v-card variant="outlined" tile>
              <v-toolbar VToolbar border class="text-center">
                <v-icon color="black" class="button">mdi-chevron-down</v-icon>
                <strong>FARMS</strong>
                <v-spacer></v-spacer>
                <v-icon color="black" small class="cross">mdi-close</v-icon>
              </v-toolbar>
              <v-list dense class="mt-n5" border>
                <v-list-item v-for="farm in farms" :key="farm.title">
                  <v-list-item-content>
                    <v-list-item-title v-text="farm.title" class="ml-6"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-checkbox color="blue" v-model="farm.state"></v-checkbox>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
            <v-card variant="outlined" tile class="ma-0">
              <v-toolbar VToolbar border>
                <v-icon color="black" class="button">mdi-chevron-down</v-icon>
                <v-divider vertical></v-divider>
                <div class="margin">
                  <strong>District</strong>
                </div>
                <v-spacer></v-spacer>
                <v-icon color="black" small class="cross">mdi-close</v-icon>
              </v-toolbar>
              <v-list dense class="mt-n5" border>
                <v-list-item v-for="district in districts" :key="district.title">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="district.title"
                      class="ml-6"
                    ></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-checkbox color="blue" v-model="district.count"></v-checkbox>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="9" class="mt-n3 mb-8 elevation-4" v-model:page="page"
                :items-per-page="itemsPerPage">
            <v-row class="fill-height" align="center" justify="center">
              <v-col
                cols="12"
                sm="4"
                v-for="(cattle, i) in cattles"
                :key="i"
                :class="cattle.class"
                class="bg-grey-lighten-3 elevation-4"
              >
              <v-skeleton-loader
              :loading="loading"
              height="389"
              type="image, list-item-two-line"
            >
              <v-responsive>
              <div>
                <v-hover v-slot="{ isHovering, props }">
                  <v-card height="389" justify="center" v-bind="props"  variant="outlined" tile class="bg-white">
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="black" small dark>{{ cattle.sold }}</v-btn>
                    </v-card-actions>
                    <v-img :src="cattle.image" width="auto" height="240" justify="center" cover>
                      <v-expand-transition>
                      <div
                        v-if="isHovering"
                        class="d-flex transition-fast-in-fast-out bg-blue-lighten-3 v-card--reveal display-3 text-white"
                        style="height: 100%"
                      >
                        <V-row>
                        <V-col cols="12">
                        <v-btn rounded color="white" @click="add(cattle)">
                          <v-icon>mdi-cart-outline</v-icon>
                        </v-btn>
                        <v-btn fab small color="white" class="ml-2" @click="add1(cattle)">
                          <v-icon color="black">mdi-heart-outline</v-icon>
                        </v-btn>
                        </V-col>
                        <v-col cols="12"> <v-btn rounded>More Info
                          <v-dialog
        v-model="dialog"
        activator="parent"
        width="auto"
      >
        <v-card>
          <v-img :src="cattle.image" width="auto" height="280" justify="center" cover></v-img>
          <v-card-text>
           Breed:Shahiwal,
           Origin:Pabna,
           Location:Gabtali
          </v-card-text>
          <v-card-text>Naturally grown up, Grass-feed</v-card-text>
          <v-card-actions>
            <v-btn color="blue" block @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
                        </v-btn></v-col>
                        </V-row>
                      </div>
                    </v-expand-transition>
                    </v-img>
                    <v-card-text class="mx-auto pt-0">
                      <strong :elevation="isHovering ? 'text-red' : 'text-black'" :class="{'on-hover': isHovering}" justify="center">{{
                        cattle.title
                      }}</strong>
                    </v-card-text>
                    <v-card-text class="mx-auto pt-0">
                      <strong :elevation="isHovering ? 'text-red' : 'text-black'" :class="{'on-hover': isHovering}" justify="center">{{
                        cattle.price
                      }}</strong>
                    </v-card-text>
                    <v-card-text class="mx-auto pt-0">
                      <strong :elevation="isHovering ? 'text-red' : 'text-black'" :class="{'on-hover': isHovering}" justify="center">{{
                        cattle.weight
                      }}</strong>
                    </v-card-text>
                  </v-card>
                </v-hover>
                </div>
                </v-responsive>
                </v-skeleton-loader>
              </v-col>
            </v-row>

            <v-toolbar VToolbar border class="text-center">
              <v-pagination v-model="page" :length="5"></v-pagination>
            </v-toolbar>
            
          </v-col>
        </v-row>
      </v-card>
      <v-card
        color="grey-dark"
        height="250px"
        tile
        flat
        dark
        class="d-flex justify-center mt-0 card2"
  
      >
        <v-row>
          <v-col cols="12" sm="12">
            <h4 class="text-center text-black mt-10">SUBSCRIBE TO OUR NEWSLETTER</h4>
          </v-col>
          <v-col cols="12" sm="12"
            ><h6 class="text-center text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              consequuntur cupiditate sapiente nobis natus doloremque rem modi repellendus
              earum! Enim.
            </h6>
          </v-col>
          <v-responsive class="mx-auto" max-width="344">
            <v-text-field
              hide-details="auto"
              label="Email address"
              placeholder="sadman@gmail.com"
              type="email"
              append-inner-icon="mdi-email-outline"
            ></v-text-field>
          </v-responsive>
        </v-row>
      </v-card>
    </v-container>
  </template>
  <script>
  import { useCartStore } from "@/store/index";
  import {mapActions} from "pinia";
  import { useCartStore1 } from "@/store1/index";
  export default {
    methods: {
      ...mapActions(useCartStore, ["add"]),
      ...mapActions(useCartStore1, ["add1"]),
    },
    data: () => ({
      page: 1,
      loading: true,
      range: [500, 20000],
      dialog:false,
      itemsPerPage: 12,
      imgs: [
        {
          src: "Goat_3.png",
          title: "Huge Livestock All The Year",
        },
        {
          src: "cattle-1.png",
          title: "Sell Your Cattle",
        },
        {
          src: "Cattle-2.png",
          title: "Find All The Firms In Bangladesh",
        },
        {
          src: "Eid_ul_Adha.jpg",
          title: "Learn Eid_Al_Adha Related Rulings From Experts",
        },
        {
          src: "butcher-2.avif",
          title: "Looking For Butchers!! Grab A Team Before They Get Hired !",
        },
        {
          src: "Lama-4.jpg",
          title: "New Attraction Llama",
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

      items: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_home",
        },
        {
          text: "Services",
          disabled: false,
          href: "breadcrumbs_services",
        },
        {
          text: "Livestock",
          disabled: false,
          href: "breadcrumbs_cow",
        },
        {
          text: "Feedbacks",
          disabled: false,
          href: "breadcrumbs_goats",
        },
      ],
      styles: [
        {
          title: "Bull",
          count: "2000",
        },
        {
          title: "Cow",
          count: "1500",
        },
        {
          title: "Goat",
          count: "5000",
        },
        {
          title: "Camel",
          count: "20",
        },
        {
          title: "Sheep",
          count: "1500",
        },
        {
          title: "Lama",
          count: "20",
        },
      ],
      farms: [
        {
          title: "Sadek_Agro",
          state: false,
        },
        {
          title: "Bismillah_Agro",
          state: false,
        },
        {
          title: "Aftab_Farms",
          state: false,
        },
      ],
      districts: [
        {
          title: "Dhaka",
          count: false,
        },
        {
          title: "Chittagong",
          count: false,
        },
        {
          title: "Barisal",
          count: false,
        },
        {
          title: "Pabna",
          count: false,
        },
      ],
      cattles: [
        {
          class: "pa-2",
          sold: "No Discount",
          image: "Cow-14.jpg",
          title: "Bl 8",
          price: "$2000.00",
          weight: "290 KG",
          name: "Shahiwal"
        },
        { class: "pa-2", sold: "-20%", image: "Cow-5.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG", name: "Shahiwal"},
        { class: "pa-2", sold: "-28%", image: "Sheep-2.jpg", title: "Bl 6", price: "$2000.00" , weight: "290 KG", name: "Shahiwal"},
        { class: "pa-2", sold: "-30%", image: "Dumba-1.jpg", title: "Bl 5", price: "$2000.00" , weight: "290 KG", name: "Shahiwal"},
        { class: "pa-2", sold: "-20%", image: "Cow-8.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG", name: "Desi"},
        { class: "pa-2", sold: "-20%", image: "Buffalo-1.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG", name: "Desi"},
        { class: "pa-2", sold: "-20%", image: "Buffalo-4.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG", name: "Desi"},
        { class: "pa-2", sold: "-20%", image: "Goat-4.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG", name: "Desi"},
        { class: "pa-2", sold: "-20%", image: "Camel-3.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG", name: "Desal"},
        { class: "pa-2", sold: "-20%", image: "Lama-7.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG", name: "Desal"},
        { class: "pa-2", sold: "-20%", image: "Camel-2.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG", name: "Desal"},
        { class: "pa-2", sold: "-20%", image: "Cow-3.webp", title: "Bl 4", price: "$2000.00" , weight: "290 KG", name: "Desi"},
      ],
    }),
    computed: {
      pageCount(){
        return Math.ceil(this.cattles.length/this.itemsPerPage)
      },
    },
  };
  </script>
  <style scoped>
  .fade {
    transition: opacity 0.3s ease out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .container {
    padding: 0px !important;
  }
  .v-chip.v-size--default {
    border-radius: 50px !important;
    font-size: 14px !important;
    height: 40px !important;
    width: 40px !important;
  }
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
  }
  .card1 {
    z-index: 10;
  }
  .card2 {
    z-index: 1;
  }
  .white-text {
    color: white;
  }
  .button:hover {
    background-color: lightblue;
  }
  .margin {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .cross:hover {
    background-color: red;
  }
  .light{
    opacity: 0.6;
  }
  </style>
  
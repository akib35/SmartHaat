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
    <v-card tile class="text-xs-center mx-2 mt-n6 card1" color="white">
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
                  <v-breadcrumbs
                    :items="Links"
                    class="white-text mt-0 text-h5"
                    justify="center"
                  >
                    <template v-slot:divider>
                      <v-icon color="#7C92FE">mdi-chevron-right</v-icon>
                    </template>
                  </v-breadcrumbs>
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
            <v-toolbar VToolbar border>
              <v-text-field
                placeholder="$2000"
                filled
                rounded
                dense
                class="mx-2"
              ></v-text-field>
              <v-text-field
                placeholder="$200"
                filled
                rounded
                dense
                class="mx-2"
              ></v-text-field>
            </v-toolbar>
            <v-slider color="blue" max="30" min="0"></v-slider>
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
                <strong>Color</strong>
              </div>
              <v-spacer></v-spacer>
              <v-icon color="black" small class="cross">mdi-close</v-icon>
            </v-toolbar>
            <v-chip-group column multiple>
              <v-chip
                filter
                outlined
                color="black"
                text-color="black"
                class="ml-2"
              ></v-chip>
              <v-chip filter border color="#FF0000" text-color="black"></v-chip>
              <v-chip filter outlined color="#000000" text-color="red"></v-chip>
              <v-chip filter outlined color="#808080" text-color="black"></v-chip>
            </v-chip-group>
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
        <v-col cols="9" class="mt-n3">
          <v-row class="fill-height" align="center" justify="center">
            <v-col
              cols="12"
              sm="4"
              v-for="(cattle, i) in cattles"
              :key="i"
              :class="cattle.class"
            >
            <div>
              <v-hover v-slot="{ isHovering, props }">
                <v-card height="389" justify="center" v-bind="props"  variant="outlined" tile>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black" small dark>{{ cattle.sold }}</v-btn>
                  </v-card-actions>
                  <v-img src="Cow-5.jpg" width="auto" height="240" justify="center" cover>
                    <v-expand-transition>
                    <div
                      v-if="isHovering"
                      class="d-flex transition-fast-in-fast-out bg-blue-lighten-3 v-card--reveal display-3 text-white"
                      style="height: 100%"
                    >
                      <V-row>
                      <V-col cols="12">
                      <v-btn rounded color="white">
                        <v-icon>mdi-cart-outline</v-icon>
                      </v-btn>
                      <v-btn fab small color="white" class="ml-2">
                        <v-icon color="black">mdi-heart-outline</v-icon>
                      </v-btn>
                      </V-col>
                      <v-col cols="12"> <v-btn rounded>More Info</v-btn></v-col>
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
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n3 px-0 pb-0">
          <v-toolbar VToolbar border>
            <v-btn icon class="mr-1">
              <v-icon color="grey">mdi-chevron-up</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="6" class="mt-n3 px-0 pb-0">
          <v-toolbar VToolbar border class="text-center">
            <v-pagination v-model="page" :length="7"></v-pagination>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n3 pl-0 pb-0">
          <v-toolbar VToolbar border>
            <v-btn icon class="mr-1">
              <v-icon color="grey">mdi-chevron-down</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
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
export default {
  page: 1,
  data: () => ({
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
        src: "Qurbani_vid.png",
        title: "Informational Video",
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
    Links: [
      {
        title: "Buy",
        disabled: false,
        href: "breadcrumbs_buy_now",
      },
      {
        title: "Sell",
        disabled: false,
        href: "breadcrumbs_sell_now",
      },
      {
        title: "Register Your Farm",
        disabled: false,
        href: "breadcrumbs_register_your_farm",
      },
      {
        title: "Fatwa",
        disabled: false,
        href: "breadcrumbs_learn_more",
      },
      {
        title: "Hire Butcher",
        disabled: false,
        href: "breadcrumbs_hire_now",
      },
      {
        title: "Videos",
        disabled: false,
        href: "breadcrumbs_more_video",
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
        class: "pa-0",
        sold: "No Discount",
        image: "1.png",
        title: "Bl 8",
        price: "$2000.00",
        weight: "290 KG"
      },
      { class: "pa-0", sold: "-20%", image: "2.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG"},
      { class: "pa-0", sold: "-28%", image: "3.png", title: "Bl 6", price: "$2000.00" , weight: "290 KG"},
      { class: "pa-0", sold: "-30%", image: "4.png", title: "Bl 5", price: "$2000.00" , weight: "290 KG"},
      { class: "pa-0", sold: "-20%", image: "5.png", title: "Bl 4", price: "$2000.00" , weight: "290 KG"},
      { class: "pa-0", sold: "-20%", image: "6.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG"},
      { class: "pa-0", sold: "-20%", image: "7.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG"},
      { class: "pa-0", sold: "-20%", image: "8.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG"},
      { class: "pa-0", sold: "-20%", image: "9.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG"},
      { class: "pa-0", sold: "-20%", image: "10.jpg", title: "Bl 4", price: "$2000.00" , weight: "290 KG" },
      { class: "pa-0", sold: "-20%", image: "11.png", title: "Bl 4", price: "$2000.00" , weight: "290 KG" },
      { class: "pa-0", sold: "-20%", image: "12.png", title: "Bl 4", price: "$2000.00" , weight: "290 KG" },
    ],
  }),
};
</script>
<style lang="scss">
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
  opacity: 0.3s ;
}
</style>

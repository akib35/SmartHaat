<template>
    <v-app>
        <NavbarView class="index"/>
    <div>
    <v-container fluid>
        <v-card  tile class="text-xs-center mx-5 mt-n6 card1 pb-0" color="white">
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
        </v-card>
        </v-container>
        <v-container>

    <v-row justify="space-around" class="pb-4">
        <VueDatePicker v-model="date"></VueDatePicker>
    </v-row>
    <v-expansion-panels class="pb-4">
    <v-expansion-panel>
      <v-expansion-panel-title v-slot:default="{ expanded }">
        <v-row no-gutters>
          <v-col cols="4" class="d-flex justify-start">
            Location
          </v-col>
          <v-col
            cols="8"
            class="text--secondary"
          >
            <v-fade-transition leave-absolute>
              <span
                v-if="expanded"
                key="0"
              >
                Select Your Location
              </span>
              <span
                v-else
                key="1"
              >
                {{ butcher.location }}
              </span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col cols="5">
            <v-select
              v-model="butcher.location"
              :items="locations"
              chips
              flat
              variant="solo"
            ></v-select>
          </v-col>

          <v-divider
            vertical
            class="mx-4"
          ></v-divider>

          <v-col cols="3">
            Select your Location
          </v-col>
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            color="secondary"
          >
            Cancel
          </v-btn>
          <v-btn
            variant="text"
            color="primary"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col cols="4" class="d-flex justify-start">
              Butcher Team
            </v-col>
            <v-col
              cols="8"
              class="text-grey"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="expanded"
                  key="0"
                >
                  Enter a name of Butcher Team
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ butcher.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col cols="5">
            <v-select
              v-model="butcher.name"
              :items="Butchers"
              chips
              flat
              variant="solo"
            ></v-select>
          </v-col>

          <v-divider
            vertical
            class="mx-4"
          ></v-divider>

          <v-col cols="3">
            Hire  your Butcher Team
          </v-col>
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            color="secondary"
          >
            Cancel
          </v-btn>
          <v-btn
            variant="text"
            color="primary"
          >
            Hire
          </v-btn>
        </v-card-actions>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-container>
    </div>
    <FooterView/>
    </v-app>
</template>
<script>
import { defineComponent } from 'vue';
import NavbarView from '@/components/NavbarView.vue';
import FooterView from '@/components/FooterView.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default defineComponent({
    name: 'ButcherTeam',
    components: {
        NavbarView,
        FooterView,
        VueDatePicker,
    },
    data: () =>({
        imgs: [
            {
          src: "https://th.bing.com/th/id/OIP.KjQxogAx4ynbzr1z52G1CQHaD4?pid=ImgDet&rs=1",
          title: "Find Your Butcher",
        },
        {
            src: "Butcher-2.avif",
            title: "Looking For Butchers!! Grab A Team Before They Get Hired !"
        },
        ],

        butcher: {
            name: 'Butcher Teams',
            location: 'Location',
        },

        locations: ['Gulshan', 'Basundhara', 'Uttara', 'Banani', 'Agrabaad', 'Dhanmondi', 'DOHS', 'Panchlaish'],


        Butchers: ['Team_Kasem_1(Price- 20,000)', 'Team_Kasem_2(Price- 21,000)', 'Team_Shamsu_1(Price- 20,000)', 'Team_Shamsu_2(Price- 20,000)', 'Team_Motin(Price- 20,000)', 'Team_Ratan(Price- 20,000)', 'Team_Manik(Price- 20,000)', 'Team_Rana(Price- 20,000)', 'Team_Sumon(Price- 20,000)', 'Team_Sujon(Price- 20,000)', 'Team_Rupom(Price- 20,000)', 'Team_Ripon(23,000)'],


        date: null,

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
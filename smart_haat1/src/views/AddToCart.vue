<template>
    <v-app>
        <NavbarView class="index"/>
    <div class="py-6">
        <v-row>
            <v-col md="8">
                <v-card class="py-5 px-5" style="max-height: 500px; overflow-y:auto" justify-center>
                    <v-card-title class="mb-5">My Cart</v-card-title>
                    <v-card-text v-if="cartContent.length">
                        <div v-for="(item, i) in cartContent" :key="i" class="mb-3" >
                            <v-row>
                                <v-col sm="4">
                                    <div class="d-flex align-center no wrap">
                                        <img style="width: 90px; height  : 90px; object-fit: cover" :src="item.image" alt="">
                                        <h3 class="text-capitalize ml-3">{{ item.title }} </h3>
                                    </div>
                                </v-col>
                                <v-col sm="8">
                                 <div class="d-flex justify-space-between align-center no wrap w-full h-100">
                                    <div class="d-flex align-center rounded">
                                        <span class="number d-flex align-center pa-3">1</span>
                                    </div>
                                    <p>1 X  {{ item.price }} =<strong>{{ item.price }}</strong>
                                    </p>
                                    <v-btn @click="removeItem(item)" icon>
                                    <v-icon color="red">mdi-delete</v-icon>
                                    </v-btn>
                                 </div>
                                </v-col>
                                <v-col >
                                    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="blue"
          dark
          v-bind="props"
        >
          Checkout
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="blue"
          image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        >
          <v-toolbar-title>Shipping details</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-row>
          <v-col cols="12" sm="9">
        <v-card-text>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Receiver's name*"
                  required
                  outlined dense color="blue"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Receiver's Email*"
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-select
                  :items="['Dhaka', 'Chittagong', 'Khulna', 'Sylhet', 'Barishal', 'Rajshahi', 'Rangpur', 'Jessore', 'Mymensingh', 'Narsingdi', 'Gazipur', 'Narayanganj', 'Comilla']"
                  label="District*"
                  outlined dense color="blue"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
              >
                <v-select
                  :items="['Cantonment', 'Banani', 'DOHS Mohakhali', 'Symolli', 'Mirpur', 'Gulshan', 'Nikunj', 'Tejgaon', 'Wari', 'Kamlapur', 'Basundhara', 'Motijeel', 'banasree', 'Khilgaon', 'Rampura', 'Chawk', 'Baksibazar', 'Dhanmondi']"
                  label="Zone*"
                  outlined dense color="blue"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Shipping Address*"
                  hint="example of helper text only on focus"
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Receiver's Mobile_Number*"
                  hint="example of helper text only on focus"
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
          <small>*indicates required field</small>
          <v-col cols="12">
            <v-checkbox v-model="checkbox1" label="Cash On Delivery"></v-checkbox>
          </v-col>
          <v-col cols="12">
            <v-checkbox v-model="checkbox2" label="Online Payment">
            </v-checkbox>
          </v-col>
          <v-btn class="flex-grow-1" variant="tonal" color="blue" dark block tile @click="openDialog">Place Order</v-btn>
        </v-row>
        </v-card-text>
        </v-col>
     </v-row>
                 </v-container>
              </v-card>
              </v-dialog>
          <v-dialog v-model="dialog2" width="640">
            <v-card>
        <v-card-title class="headline">Card Details</v-card-title>
        <v-icon color="warning"></v-icon>
        <v-card-text>Give your Card Details To Proceed</v-card-text>
          <v-form ref="form">
           <v-text-field v-model="number1"
           :rules="cardNumber" label="Card Number*" required></v-text-field>
           <v-text-field v-model="name"
           :rules="nameRules" label="Card Holders Name*" required></v-text-field>
           <v-text-field v-model="date"
           :rules="dateRules" label="DD/MM/YYYY*" required></v-text-field>
           <v-text-field v-model="number2"
           :rules="cvcNumber" label="CVC*" required></v-text-field>
           <v-btn color="blue" space around tile  class="px-5 mr-10"><v-icon>mdi-credit-card-outline</v-icon>Pay</v-btn>
           <span></span>
           <v-btn @click="dialog2=false" color="blue" class="flex-grow-1">close</v-btn>
          </v-form>
      </v-card>
          </v-dialog>
              <template v-slot:activator="{ props }">
              <v-btn  class="px-5 ml-6" color="blue" v-bind="props"  @click="clear()">clear All</v-btn>
              </template>
              </v-col>
          </v-row>
        </div>
      </v-card-text>
                    <v-card-text class="text-center" v-else><v-btn class="mx-auto" @click="$router.push('/Home')" color="blue">Your cart is empty.Fill it</v-btn></v-card-text>
                </v-card>
            </v-col>
        </v-row>
        
    </div>
    <FooterView/>
    </v-app>
</template>
<script>
import { defineComponent } from 'vue';
import NavbarView from '@/components/NavbarView.vue';
import FooterView from '@/components/FooterView.vue';
import { useCartStore } from '@/store';
export default defineComponent({
    name: 'AddTOCart',
    components: {
        NavbarView,
        FooterView,
    },
    setup() {
    const cartStore = useCartStore()

    function addItem(item) {
      cartStore.addItem(item)
    }

    function removeItem(item) {
      cartStore.removeItem(item)
    }

    function clear() {
      cartStore.clear()
    }

    return { cartContent: cartStore.cartContent, itemCount: cartStore.itemCount, totalPrice: cartStore.totalPrice, addItem, removeItem, clear }
  },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => (this.loading = false,
                          this.loaded = true
                          ), 2500)
      },
      openDialog () {
      if (this.checkbox2) {
        this.dialog2 = true
      } else {
        this.dialog2 = false
      }
    },
    },
    data:() =>({
        dialog:false,
        loaded: false,
        loading :false,
        checkbox1:false,
        checkbox2:false,
        dialog2: false,
        number1:'',
        name:'',
        number2:'',
        date:'',

        nameRules:[
      v=> !!v || 'Minimum length of name is 2 characters'
    ],
    dateRules:[
      v=> !!v || 'You have to give a valid date'
    ],
    cardNumber:[
      v=> !!v || 'You have to give a valid Card Number'
    ],
    cvcNumber:[
      v=> !!v || 'You have to give a valid cvc Number'
    ],
        cartStore: [
        {
          class: "pa-2",
          sold: "No Discount",
          image: "1.png",
          id: "Bl 8",
          price: "$2000.00",
          weight: "290 KG"
        },
        { class: "pa-2", sold: "-20%", image: "2.jpg", id: "Bl 4", price: "$2000.00" , weight: "290 KG"},
        { class: "pa-2", sold: "-28%", image: "3.png", id: "Bl 6", price: "$2000.00" , weight: "290 KG"},
        { class: "pa-2", sold: "-30%", image: "4.png", id: "Bl 5", price: "$2000.00" , weight: "290 KG"},
        { class: "pa-2", sold: "-20%", image: "5.png", id: "Bl 4", price: "$2000.00" , weight: "290 KG"},
        { class: "pa-2", sold: "-20%", image: "6.jpg", id: "Bl 4", price: "$2000.00" , weight: "290 KG"},
        { class: "pa-2", sold: "-20%", image: "7.jpg", id: "Bl 4", price: "$2000.00" , weight: "290 KG"},
        { class: "pa-2", sold: "-20%", image: "8.jpg", id: "Bl 4", price: "$2000.00" , weight: "290 KG"},
        { class: "pa-2", sold: "-20%", image: "9.jpg", id: "Bl 4", price: "$2000.00" , weight: "290 KG"},
        { class: "pa-2", sold: "-20%", image: "10.jpg", id: "Bl 4", price: "$2000.00" , weight: "290 KG" },
        { class: "pa-2", sold: "-20%", image: "11.png", id: "Bl 4", price: "$2000.00" , weight: "290 KG" },
        { class: "pa-2", sold: "-20%", image: "12.png", id: "Bl 4", price: "$2000.00" , weight: "290 KG" },
      ],
    }),
})
</script>
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
</style>
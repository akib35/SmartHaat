<template>
    <v-app-bar app image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" theme="dark">
     <v-btn icon> <v-icon class="mx-0" @click="drawer=!drawer">mdi-menu</v-icon></v-btn>
            <v-divider vertical></v-divider>
                <div class="mx-1">
                <v-toolbar-title @click="$router.push('/')">
                    <strong>Smart Haat</strong>
                    </v-toolbar-title>
                </div>

        <v-divider vertical class="ml-5"></v-divider>
        <V-spacer></V-spacer>  
        <v-responsive class="text-black bg-white" max-width="344">
          <v-autocomplete
          :loading="loading"
          :items="items"
          density="compact"
            hide-details
            variant="solo"
            auto-select-first
            item-props
            label="Search"
            theme="light"
            menu-icon=""
            placeholder="Search for cattle, farms and more"
            type="search"
            append-inner-icon="mdi-magnify"
            single-line
            @click:append-inner="load"
          >
          </v-autocomplete>
        </v-responsive>
      
        <v-spacer></v-spacer>
        <v-btn @click="toggleTheme">toggle theme</v-btn>   
        <v-divider vertical></v-divider>
        <v-dialog
      v-model="dialog"
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
        ><v-icon>
          mdi-account
          </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-form ref="form" @submit.prevent="register">
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-container>
          <v-window v-model="step">
          <v-window-item :value="1">
          <v-row>
          <v-col cols="12" sm="9">
        <v-card-text>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="user name*"
                  v-model="formData.username"
                  required
                  outlined dense color="blue"
                  :rules="userNameRules"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                v-model="name1"
                :counter="10"
                :rules="nameRules"
                  label="first name"
                  hint="example of helper text only on focus"
                  outlined dense color="blue"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                v-model="name2"
                  :counter="6"
                  :rules="nameRules"
                  label="last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                v-model="email"
                :rules="emailRules"
                  label="Email*"
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="formData.password"
                  :rules="passwordRules"
                  label="Password*"
                  type="password"
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                v-model="select1"
                :rules="[v=> !!v || 'city is required']"
                  :items="['Dhaka', 'Chittagong', 'Khulna', 'Sylhet', 'Barishal', 'Rajshahi', 'Rangpur', 'Jessore', 'Mymensingh', 'Narsingdi', 'Gazipur', 'Narayanganj', 'Comilla']"
                  label="City*"
                  outlined dense color="blue"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                v-model="select2"
                :rules="[v=> !!v || 'Account type is required']"
                  :items="['Seller','Buyer']"
                  label="Account-Type*"
                  outlined dense color="blue"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="address"
                  :rules="[v=> !!v || 'Address is required']"
                  label="Address*"
                  hint="example of helper text only on focus"
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                v-model="mobile"
                :counter="11"
                :rules="mobileRules"
                label="Mobile Number"
                  hint="example of helper text only on focus"
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
          <small>*indicates required field</small>
          <v-row>
            <v-col cols="12" sm="7">
                 <v-checkbox  v-model="checkbox"
        :rules="[v => !!v || 'You must accept to continue!']"
                value="1"  type="checkbox" label="I Accept All Terms & Condition" class="mt-3 ml-0 d-flex justify-start" color="blue"
                 ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="5" class="mt-6">
                <span class="caption text-blue" justify="right">Terms & Condition</span>
                </v-col>                                 
                                        
          </v-row>
          <v-btn :loading="loading" class="flex-grow-1" variant="tonal" color="blue" dark block tile @click="load" type="submit">Sign Up</v-btn>
          
         
          <h5 class="text-center text-grey mt-4 mb-3"><span>Or Sign Up Using</span></h5>
         <div class="d-flex mt-10 mb-10 mx-10">
            <v-col cols="auto">
             <v-btn color="white" class="elevation-6">
                 <v-icon color="red" class="mx-1">mdi-google</v-icon>
            </v-btn>
            </v-col>
            <v-col cols="auto">
            <v-btn color="white" class="elevation-6">
                 <v-icon color="blue" class="mx-1">mdi-facebook</v-icon>
             </v-btn>
             </v-col>
             <v-col cols="auto">
            <v-btn color="white" class="elevation-6">
                 <v-icon color="light-blue lighten-3" class="mx-1">mdi-twitter</v-icon>
            </v-btn>
            </v-col>
        </div>
          </v-row>
        </v-card-text>
        </v-col>
      
        <v-col cols="12" sm="3" class=" bg-blue rounded-xl">
            <div style="text-align:center; padding:180px 0;">
                <v-card-text class="text-white">
                <h3 class="text-center">Already Have An Account?</h3>
                </v-card-text>
                <div class="text-center">
                <v-btn tile outlined dark @click="step++">Log In</v-btn>
                </div>
            </div>
        </v-col>
     </v-row>
            </v-window-item>
            <v-window-item :value="2">
                <v-row>
                    <v-col cols="12" sm="3" class="bg-blue rounded-xl">
                    <div style="text-align:center; padding: 180px 0;">
                        <v-card-text class="text-center">
                            <h3 class="text-center" justify="center">Don't Have An Account?</h3>
                            <h5 class="text-center text-grey">Get Started By Creating Account</h5>
                        </v-card-text>
                        <div class="text-center">
                            <v-btn tile outline dark @click="step--">Sign Up</v-btn>
                        </div>
                    </div>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-card-text class="mt-12">
                            <v-row align="center" justify="center">
                                <v-col cols="12" sm="12">
                                    <v-row>
                                      <v-col
                                      cols="12"
                                      sm="12"
                                    >
                                      <v-select
                                      v-model="select3"
                                      :rules="[v=> !!v || 'Account type is required']"
                                        :items="['Seller','Buyer']"
                                        label="Account-Type*"
                                        outlined dense color="blue"
                                        required
                                      ></v-select>
                                    </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <v-text-field 
                                            v-model="email"
                                            :rules="emailRules"
                                            label="Email" outlined dense color="blue" required class="mt-4"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-text-field 
                                            v-model="password"
                                            :rules="passwordRules"
                                            label="Password" type="password" outlined dense color="blue" required class="mt-4"></v-text-field>
                                            </v-col>
                                            <v-row>
                                                <v-col cols="12" sm="7">
                                                    <v-checkbox
                                                     label="Remember Me" class="mt-n1" color="blue"
                                                     type="checkbox"
                                                    ></v-checkbox>
                                             </v-col>
                                             <v-col cols="12" sm="5">
                                                <span class="caption text-blue" justify="right">Forget Password</span>
                                             </v-col>
                                            </v-row>
                                        
                                    </v-row>
                                 </v-col>
                                 <v-btn :loading="loading" class="flex-grow-1" variant="tonal" color="blue" dark block tile @click="handleAlertClick" type="submit">Log In</v-btn>
                                 <h5 class="text-center text-grey mt-4 mb-3"><span>Or Log In Using</span></h5>
                                 <div class="d-flex align-center justify-space-between mt-10 mb-10 mx-10">
                                 <v-col cols="auto">
                                    <v-btn color="white" class="elevation-6">
                                        <v-icon color="red">mdi-google</v-icon>
                                    </v-btn>
                                    </v-col>
                                    <v-col cols="auto">
                                    <v-btn color="white" class="elevation-6">
                                        <v-icon color="blue">mdi-facebook</v-icon>
                                    </v-btn>
                                    </v-col>
                                    <v-col cols="auto">
                                    <v-btn color="white" class="elevation-6">
                                        <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
                                    </v-btn>
                                    </v-col>
                                </div>
                            </v-row>
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-window-item>
            </v-window>
          </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
      </v-dialog>
        <v-divider vertical></v-divider>
        <v-btn icon @click="$router.push('/Cart')" class="mx-1" 
        stacked>
            <v-badge color="error" :content="len">
                <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn icon @click ="$router.push('/Wishlist')" class="mx-1" stacked>
            <v-badge color="error" :content="len1">
                <v-icon>mdi-heart-outline</v-icon>
            </v-badge>
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app location="left" class="mx-0" image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" theme="dark">
      <v-list
          nav>
        <v-list-item prepend-icon="mdi-home" title="Home" value="home" @click ="$router.push('/Home')"></v-list-item>
        <v-list-item prepend-icon="mdi-bank" title="Farm" value="farm" @click ="$router.push('/Farm')"></v-list-item>
        <v-list-item prepend-icon="mdi-currency-bdt" title="Sell" value="sell" @click ="$router.push('/SellIt')"></v-list-item>
        <v-list-item prepend-icon="mdi-chart-box" title="Blog" value="blog" @click="$router.push('/Blog')"></v-list-item>
        <v-list-item prepend-icon="mdi-knife" title="Butcher" value="butcher" @click="$router.push('/Butcher')"></v-list-item>
        </v-list>
        </v-navigation-drawer>
       
</template>
<script>
import { useTheme } from 'vuetify';
import { mapState } from 'pinia';
import { useCartStore } from '../store/index';
import { useCartStore1 } from '../store1/index';
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
    data:() =>({
        drawer:false,
        dialog:false,
        step:1,
        loaded: false,
        loading :false,
        name1: '',
        name2: '',
        username: '',
        password: '',
        email:'',
        select1: null,
        select2: null,
        checkbox: false,
        address: '',
        mobile: '',
        select3: '',
  userNameRules:[
      v=> !!v || 'Minimum length of username is 4 characters' 
    ],
    nameRules:[
      v=> !!v || 'Minimum length of name is 2 characters'
    ],
    emailRules:[
      v=> !!v || 'Input a valid email'
    ],
    passwordRules:[
      v=> !!v ||'Password should be at least 8 characters'
    ],
    mobileRules:[
      v=> !!v || 'Input a valid mobile number'
    ],
    addressRules:[
      v=> !!v || 'please input your address'
    ],
    formData:{
        username:"",
        password:"", 
      },
      items: [
        {
          title: 'Bull',
        },
        {
          title: 'Camel',
        },
        {
          
          title: 'Goat',
        },
        {
          title: 'Sheep',
        },
        {
          title: 'Buffalo',
        },
      ],
    }),
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Create a password'
          case 2: return 'Sign-Up'
          default: return 'Account created'
        }
      },
      ...mapState(useCartStore, ["len"]),
      ...mapState(useCartStore1, ["len1"]),
    },
    methods: {
      register(){
        axios
        .post("http://localhost:8000/api/accounts/register/", this.formData)
        .then((response) => {
          console.log("Registration successful:", response.data);
          // Handle successful registration (e.g., redirect to login page)
        })
        .catch((error) => {
          console.error("Error during registration:", error.response.data);
      });},
       load () {
        this.loading = true
        setTimeout(() => (this.loading = false,
                          this.loaded = true
                          ), 2500)
      },
      login() {
      axios
        .post("http://localhost:8000/api/accounts/login/", this.formData)
        .then((response) => {
          console.log("Login successful:", response.data);
          // Handle successful login (e.g., store token, redirect to dashboard)
        })
        .catch((error) => {
          console.error("Error during login:", error.response.data);
          // Handle login error (e.g., display error message)
        });
    },
    handleAlertClick(){
      Swal.fire('Success!','Log In Successful','success');
    },
      async submit(){
        const { valid } = await this.$refs.form.submit()

      if (valid) alert('Signed Up Successfully')
      },

    
    },
  }
</script>
<style>
.v-toolbar_title {
    font-size: 1 rem !important;
}

.v-badge_badge {
    font-size: 10px !important;
    height: 18px !important;
    min-width: 18px;
}

.mx-1 {
    color: white;
}
</style>

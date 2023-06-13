<template>
    <v-app-bar app color="blue-lighten-1" dark>
        
        
     <v-btn icon> <v-icon class="mx-1">mdi-menu</v-icon></v-btn>
            <v-divider vertical></v-divider>
                <div class="mx-1">
                    <strong>Smart Haat</strong>
                </div>

        <v-divider vertical class="ml-5"></v-divider>
        <V-spacer></V-spacer>
        <v-responsive class="text-black bg-white" max-width="344">
          <v-text-field
          :loading="loading"
          density="compact"
            hide-details
            label="Search"
            placeholder="Search for cattle, farms and more"
            type="search"
            append-inner-icon="mdi-magnify"
            single-line
            @click:append-inner="load"
          >
          </v-text-field>
        </v-responsive>
      
        <v-spacer></v-spacer>
        <v-divider vertical></v-divider>
        <v-dialog
      v-model="dialog"
      persistent
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
                  required
                  outlined dense color="blue"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
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
                  label="last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
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
                  label="Mobile_Number*"
                  hint="example of helper text only on focus"
                  outlined dense color="blue"
                  required
                ></v-text-field>
              </v-col>
          <small>*indicates required field</small>
          <v-row>
            <v-col cols="12" sm="7">
                 <v-checkbox label="I Accept All Terms & Condition" class="mt-3 ml-0" color="blue"
                 ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="5" class="mt-6">
                <span class="caption text-blue" justify="right">Terms & Condition</span>
                </v-col>                                 
                                        
          </v-row>
          <v-btn :loading="loading" class="flex-grow-1" variant="tonal" color="blue" dark block tile @click="load">Sign Up</v-btn>
          
         
          <h5 class="text-center text-grey mt-4 mb-3"><span>Or Sign Up Using</span></h5>
         <div class="d-flex mt-10 mb-10 mx-10">
             <v-btn depressed outlined color="grey">
                 <v-icon color="red" class="mx-1">mdi-google</v-icon>
            </v-btn>
            <v-btn depressed outlined color="grey">
                 <v-icon color="blue" class="mx-1">mdi-facebook</v-icon>
             </v-btn>
            <v-btn depressed outlined color="grey">
                 <v-icon color="light-blue lighten-3" class="mx-1">mdi-twitter</v-icon>
            </v-btn>
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
                                        :items="['Seller','Buyer']"
                                        label="Account-Type*"
                                        outlined dense color="blue"
                                        required
                                      ></v-select>
                                    </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <v-text-field label="Email" outlined dense color="blue" required class="mt-4"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-text-field label="Password" type="password" outlined dense color="blue" required class="mt-4"></v-text-field>
                                            </v-col>
                                            <v-row>
                                                <v-col cols="12" sm="7">
                                                    <v-checkbox label="Remember Me" class="mt-n1" color="blue"
                                                    ></v-checkbox>
                                             </v-col>
                                             <v-col cols="12" sm="5">
                                                <span class="caption text-blue" justify="right">Forget Password</span>
                                             </v-col>
                                            </v-row>
                                        
                                    </v-row>
                                 </v-col>
                                 <v-btn :loading="loading" class="flex-grow-1" variant="tonal" color="blue" dark block tile @click="load">Log In</v-btn>
                                 <h5 class="text-center text-grey mt-4 mb-3"><span>Or Log In Using</span></h5>
                                 <div class="d-flex align-center justify-space-between mt-10 mb-10 mx-10">
                                    <v-btn depressed outlined color="grey">
                                        <v-icon color="red">mdi-google</v-icon>
                                    </v-btn>
                                    <v-btn depressed outlined color="grey">
                                        <v-icon color="blue">mdi-facebook</v-icon>
                                    </v-btn>
                                    <v-btn depressed outlined color="grey">
                                        <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
                                    </v-btn>
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
      </v-card>
      </v-dialog>
        <v-divider vertical></v-divider>
        <v-btn icon class="mx-1">
            <v-badge color="#94D0EF" content="0">
                <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn icon class="mx-1">
            <v-badge color="#94D0EF" content="0">
                <v-icon>mdi-heart-outline</v-icon>
            </v-badge>
        </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    data:() =>({
        dialog:false,
        step:1,
        loaded: false,
        loading :false,
    }),
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Create a password'
          case 2: return 'Sign-Up'
          default: return 'Account created'
        }
      },
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => (this.loading = false,
                          this.loaded = true
                          ), 2500)
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

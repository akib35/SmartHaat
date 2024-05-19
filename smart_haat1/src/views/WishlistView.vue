<template>
    <v-app>
        <NavbarView class="index"/>
    <div>
        <v-row>
            <v-col md="8">
                <v-card class="py-5 px-5" style="max-height: 500px; overflow-y:auto" justify-center>
                    <v-card-title class="mb-5">My Wishlist</v-card-title>
                    <v-card-text v-if="cartContent.length">
                        <div v-for=" (item, i) in cartContent" :key="i" class="mb-3" >
                            <v-row>
                                <v-col sm="4">
                                    <div class="d-flex align-center no wrap">
                                        <img style="width: 90px; height  : 90px; object-fit: cover" :src="item.image" alt="">
                                        <h3 class="text-capitalize ml-3">{{ item.title }} </h3>
                                    </div>
                                </v-col>
                                <v-col sm="8">
                                 <div class="d-flex justify-space-between align-center no wrap w-full h-100">
                                    <span><strong>{{ item.price }}</strong>
                                    </span>
                                    <v-btn prepend-icon="mdi-cart-plus" space around color="blue" @click="add(item)">Add To Cart</v-btn>
                                    <v-btn @click="removeItem1(item)" icon>
                                    <v-icon color="red">mdi-delete</v-icon>
                                    </v-btn>
                                 </div>
                                </v-col>
                                <v-col>
                                <template v-slot:activator="{ props }">
              <v-btn  class="px-5 ml-6" color="blue" v-bind="props"  @click="clear()">clear All</v-btn>
              </template>
                                </v-col>
                                </v-row>
                                </div>
                                </v-card-text>
                                <v-card-text class="text-center" v-else><v-btn class="mx-auto" @click="$router.push('/Home')" color="blue">Your Wishlist is empty</v-btn></v-card-text>
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
import { useCartStore } from "@/store";
import { useCartStore1 } from '@/store1';
import { mapState, mapActions } from 'pinia';
export default defineComponent({
    name: 'WishlistView',
    components: {
        NavbarView,
        FooterView,
    },
    setup() {
    const cartStore = useCartStore1()

    function addItem1(item) {
      cartStore.addItem1(item)
    }

    function removeItem1(item) {
      cartStore.removeItem1(item)
    }

    function clear1() {
      cartStore.clear1()
    }

    return { cartContent: cartStore.cartContent, itemCount: cartStore.itemCount, addItem1, removeItem1, clear1 }
  },
    computed: {
        ...mapState(useCartStore1, ["cartContent"])
    },
    methods: {
        ...mapActions(useCartStore, ["add"]),
        ...mapActions(useCartStore1, ['add1']),
    },
})
</script>
<style>
</style>
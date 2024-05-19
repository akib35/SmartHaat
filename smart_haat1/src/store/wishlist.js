import {defineStore} from "pinia"

export const useCartStore1 = defineStore("cart", {
    state: () => ({
        cartContent: [],
    }),
    actions: {
        add(item) {
            this.cartContent.push(item)
        },
    },
    getters: {
        len: (state) => state.cartContent.length
    }
});
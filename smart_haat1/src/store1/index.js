import {defineStore} from "pinia"

export const useCartStore1 = defineStore("Wishlist", {
    id: 'Wishlist',
    state: () => ({
        cartContent: [],
    }),
    actions: {
        add1(item) {
            this.cartContent.push(item)
        },
        addItem1(item) {
            const existingItem = this.cartContent.find(i => i.id === item.id)
      
            if (existingItem) {
              existingItem.quantity++
            } else {
              this.cartContent.push({ ...item, quantity: 1 })
            }
          },
          removeItem1(item) {
            const index = this.cartContent.findIndex(i => i.id === item.id)
      
            if (index !== -1) {
              const existingItem = this.cartContent[index]
      
              if (existingItem.quantity > 1) {
                existingItem.quantity--
              } else {
                this.cartContent.splice(index, 1)
              }
            }
          },
          clear1() {
            this.cartContent = []
          },
    },
    getters: {
        len1: (state) => state.cartContent.length,
    }
});
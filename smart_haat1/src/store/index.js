import {defineStore} from "pinia"

// export const useCartStore = defineStore("cart", {
//     state: () => ({
//         cartContent: [],
//     }),
//     actions: {
//         add(item) {
//             this.cartContent.push(item)
//         },
//         increment(){
//             this.count++
//         },
//         decrement(){
//             this.count--
//         }
//     },
//     getters: {
//         len: (state) => state.cartContent.length
//     }
// });
import products from '../data';
export const useCartStore = defineStore('cart',{
    id:'cartStore',
    state: () => ({
        cartContent: [],
        count: 0,
        currentIndex: 0,
        products: products, 
    }),
    getters:{
        len: (state) => state.cartContent.length,
        // formattedCart(){
        //     return Object.keys(this.cartContent).map(productId => {
        //         const product = this.cartContent[productId];
        //         return{
        //             id : product.productId,
        //             image: products.find((p)  => p.id === product.productId).image,
        //             name : products.find((p)  => p.id === product.productId).name,
        //             price: products.find((p)  => p.id === product.productId).price,
        //             quantity: product.quantity,
        //             cost: product.quantity* products.find((p)  => p.id === product.productId).price,
        //         }
        //     },);
        //},
        // total(){
        //     return Object.keys(this.cartContent).reduce((acc, id)=>{
        //         const product = products.find((p) => p.id === id) ;
        //         if(product){
        //             return acc + product.price * this.cartContent[id].quantity;
        //         }
        //         return  acc + 0; 
        //     }, 0);
        // },
        totalPrice(state) {
            return state.cartContent.reduce((total, item) => total + item.price * item.quantity, 0)
          }
    },
    actions : {
        add(item) {
            this.cartContent.push(item)
        },
        addItem(item) {
            const existingItem = this.cartContent.find(i => i.id === item.id)
      
            if (existingItem) {
              existingItem.quantity++
            } else {
              this.cartContent.push({ ...item, quantity: 1 })
            }
          },
          removeItem(item) {
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
          clear() {
            this.cartContent = []
          }
        },
});
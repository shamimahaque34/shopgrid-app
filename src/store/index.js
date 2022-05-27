import {createStore} from "vuex";

export default createStore({
    state()
    {
      return {
          products : [],
      }
    },

    getters : 
    {
       getProducts(state)
       {
           return state.products;
       }
    },

    mutations:
    {
       addProduct(state,payload)
       {
           state.products.push(payload);
       },

       updateCartProduct(state,payload)
       {
          var product =state.products.find(product=>product.id ===payload.id);
          product.qty =payload.qty;
          product.total =payload.qty*product.price;
       },

       deleteCartProduct(state,payload)
       {
           var productIndex =state.products.findIndex(product=>product.id === payload.id);
           state.products.spice(productIndex,1);
       }
    },

    actions :
    {

    },

    modules :
    {

    }
});
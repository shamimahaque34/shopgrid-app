<template>
<div class="product-basic-info">

   <div class="top-area">
        <div class="row align-items-center">
        <div class="col-lg-6 col-md-12 col-12">
        <div class="product-images">
        <main id="gallery">
        <div class="main-img">
        <img :src="product.image" id="current" :alt="main-image">
        </div>
        <div class="images">
        <img   v-for ="(image,key1) in product.images" :key="key1" :src="image.image" class="img" :alt="image">
        
        </div>
        </main>
        </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12" >
        <div class="product-info">
        <h2 class="title">{{product.name}}</h2>
        <p class="category">Category:<a href="javascript:void(0)">{{product.category}}</a></p>
         <p class="category">Brand:<a href="javascript:void(0)">{{product.brand}}</a></p>
        <h3 class="price">{{product.selling_price}}<span>{{product.regular_price}}</span></h3>
        <p class="info-text" v-html="product.description"></p>
        <div class="row">
        <div class="col-lg-4 col-md-4 col-12">
        <div class="form-group color-option">
        <label class="title-label" for="size">Choose color</label>
        <div class="single-checkbox checkbox-style-1">
        <input type="checkbox" id="checkbox-1" checked>
        <label for="checkbox-1"><span></span></label>
        </div>
        <div class="single-checkbox checkbox-style-2">
        <input type="checkbox" id="checkbox-2">
        <label for="checkbox-2"><span></span></label>
        </div>
        <div class="single-checkbox checkbox-style-3">
        <input type="checkbox" id="checkbox-3">
        <label for="checkbox-3"><span></span></label>
        </div>
        <div class="single-checkbox checkbox-style-4">
        <input type="checkbox" id="checkbox-4">
        <label for="checkbox-4"><span></span></label>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
        <div class="form-group">
        <label for="color">Battery capacity</label>
        <select class="form-control" id="color">
        <option>5100 mAh</option>
        <option>6200 mAh</option>
        <option>8000 mAh</option>
        </select>
        </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
        <div class="form-group quantity">
        <label for="color">Quantity</label>
          <input type="number" class="form-control" v-model="qty" min="1"/>
        </div>
        </div>
        </div>
        <div class="bottom-content">
        <div class="row align-items-end">
        <div class="col-lg-4 col-md-4 col-12">
        <div class="button cart-button">
        <button class="btn" style="width: 100%;" @click="addToCart">Add to Cart</button>
        </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
        <div class="wish-button">
        <button class="btn"><i class="lni lni-reload"></i> Compare</button>
        </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
        <div class="wish-button">
        <button class="btn"><i class="lni lni-heart"></i> To Wishlist</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

    </div>
    
</template>


<script>

import axios from "axios";
export default {
    name:'ProductBasicInfo',

    data(){
       return {
               id:this.$route.params.id,
               product:'',
               qty:1,

       }
    },

    created(){
        this.getProductBasicInfo();
    },

    methods :{
           getProductBasicInfo()
           {
              axios.get('http://localhost/shopgrid-admin/public/api/get-product-basic-info/' +this.id).then((response) =>{
              this.product = response.data;
              });
           },

           addToCart()
           {  
              var cartProducts =this.$store.getters.getProducts;
              var cartItem =cartProducts.find(product=>product.id === this.product.id);

              if(cartItem)
              {
                    var qty =cartItem.qty+1;
                    this.$store.commit('updateCartProduct',{qty:qty,id:this.product.id});
              }

              else
              {
               var data ={id:this.product.id,name:this.product.name,price:this.product.selling_price,image:this.product.main_image,qty:this.qty,total:this.product.selling_price*this.qty}
              //console.log(data);
              this.$store.commit('addProduct',data);
              this.$router.push('/show-cart');
              }
              
           }
    }
    
    }
    

</script>

<style scoped>

</style>
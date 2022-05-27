<template>
    <div class="card-list-head">
        <div class="cart-list-head">

<div class="cart-list-title">
<div class="row">
<div class="col-lg-1 col-md-1 col-12">
</div>
<div class="col-lg-4 col-md-3 col-12">
<p>Product Name</p>
</div>
<div class="col-lg-2 col-md-2 col-12">
<p>Quantity</p>
</div>
<div class="col-lg-2 col-md-2 col-12">
<p>Price</p>
</div>
<div class="col-lg-2 col-md-2 col-12">
<p>Total</p>
</div>
<div class="col-lg-1 col-md-2 col-12">
<p>Remove</p>
</div>
</div>
</div>


<div class="cart-single-list" v-for="(product,key) in products" :key="key">
<div class="row align-items-center">
<div class="col-lg-1 col-md-1 col-12">
<a href="product-details.html"><img :src="product.image" alt="#"></a>
</div>
<div class="col-lg-4 col-md-3 col-12">
<h5 class="product-name"><a href="product-details.html">
{{product.name}}</a></h5>
<p class="product-des">
<span><em>Type:</em> Mirrorless</span>
<span><em>Color:</em> Black</span>
</p>
</div>
<div class="col-lg-2 col-md-2 col-12">
    <div class="input-group mb-3">
  <input type="number" min="1" class="form-control" :value="product.qty" :id="'qty'+product.id" >
  <button class="btn btn-outline-secondary" @click="updateCartProduct(product.id)" type="button" id="button-addon2">Update</button>
</div>

</div>
<div class="col-lg-2 col-md-2 col-12">
<p>Tk {{product.price}}</p>
</div>
<div class="col-lg-2 col-md-2 col-12">
<p>TK {{product.total}}</p>
</div>
<div class="col-lg-1 col-md-2 col-12">
<a class="remove-item" @click="deleteCartProduct(product.id)" href=""><i class="lni lni-close"></i></a>
</div>
</div>
</div>




</div>
    </div>
</template>

<script>
export default {
    name:'CardListHead',
    computed:{
        products(){
            return this.$store.getters.getProducts;
        }
    },

    methods:
    {
       updateCartProduct(id)
       {
         var qty =document.getElementById('qty'+id).value;
         this.$store.commit('updateCartProduct',{qty:qty,id:id})
       },
       
       deleteCartProduct(id)
       {
         this.$store.commit('deleteCartProduct',{id:id});
       }

    }

}
</script>

<style scoped>

</style>
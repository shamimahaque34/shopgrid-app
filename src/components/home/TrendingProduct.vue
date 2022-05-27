<template>
<div class="trending-product">
    <section class="trending-product section">
<div class="container">
<div class="row">
<div class="col-12">
<div class="section-title">
<h2>Trending Product</h2>
<p>There are many variations of passages of Lorem Ipsum available, but the majority have
suffered alteration in some form.</p>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-3 col-md-6 col-12" v-for="(product,key) in products" :key="key">

<div class="single-product">
<div class="product-image">
<img :src="product.image" :alt="product.name" height="300">
<div class="button">
<a href="" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
</div>
</div>
 <div class="product-info">
<span class="category">Watches</span>
<h4 class="title">
<router-link :to="{name:'detail',params:{id:product.id}}">{{product.name}}</router-link>
</h4>
<ul class="review">
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star"></i></li>
<li><span>4.0 Review(s)</span></li>
</ul>
<div class="price">
<span><span>&#2547;</span>{{product.selling_price}}</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</template>

<script>
import axios from "axios";
export default {
    name:'TrendingProduct',
    data(){

        return{
            
            products :[],
        }
    },

    created(){
        this.getAllTrendingProduct();
    },

    methods:{
        getAllTrendingProduct(){
            axios.get('http://localhost/shopgrid-admin/public/api/all-trending-product').then((response)=>{
                //console.log(response.data);
                this.products = response.data;
            });
        }
    }
}
</script>

<style>

</style>
<template>
    
     <div class="total-amount">
<div class="row">
<div class="col-lg-8 col-md-6 col-12">
<div class="left">
<div class="coupon">
 <form action="#" target="_blank">
<input name="Coupon" placeholder="Enter Your Coupon">
<div class="button">
<button class="btn">Apply Coupon</button>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 col-12">
<div class="right">
<ul>
<li>Cart Subtotal<span>$2560.00</span></li>
<li>Shipping<span>Free</span></li>
<li>You Save<span>$29.00</span></li>
<li class="last">You Pay<span>$2531.00</span></li>
</ul>
<div class="button">
<router-link :to="{name:'checkout'}" class="btn">Checkout</router-link>
<a href="product-grids.html" class="btn btn-alt">Continue shopping</a>
</div>
</div>
</div>
</div>
</div>   


</template>

<script>
export default {
    name:'TotalAmount'
}
</script>


<style scoped>

</style>
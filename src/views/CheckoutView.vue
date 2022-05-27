<template>
    <div class="Checkout-view">
        <PageTitle/>
        <section class="checkout-wrapper section">
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-8">

<CheckoutStepsFormStyle/>
</div>
<div class="col-lg-4">

  <CheckoutSidebar/>
</div>
</div>
</div>
</section>

    </div>
</template>

<script>
import PageTitle from "@/components/includes/PageTitle.vue"
import CheckoutStepsFormStyle from "@/components/checkout/CheckoutStepsFormStyle.vue"
import CheckoutSidebar from "@/components/checkout/CheckoutSidebar.vue"
export default { 
  name:'CheckoutView' ,
  components:{PageTitle,CheckoutStepsFormStyle,CheckoutSidebar} 
}
</script>

<style scoped>

</style>
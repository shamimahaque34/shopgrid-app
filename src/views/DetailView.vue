<template>
   <div class="detail">
       <PageTitle/>
        <section class="item-details section">
<div class="container">
    <ProductBasicInfo/>
<div class="product-details-info">
    <ProductDetail/>
    <ProductReview/>

</div>
</div>

</section>
       
   </div>
</template>

<script>
import PageTitle from "@/components/includes/PageTitle.vue"
import ProductBasicInfo from "@/components/detail/ProductBasicInfo.vue"
import ProductDetail from "@/components/detail/ProductDetail.vue"
import ProductReview from "@/components/detail/ProductReview.vue"

export default {
    name:'DetailView',
    components:{PageTitle,ProductBasicInfo,ProductDetail,ProductReview}
    
}
</script>

<style scoped>

</style>
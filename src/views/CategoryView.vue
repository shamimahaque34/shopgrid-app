<template>
    <div class="category">
      <PageTitle/>  
      <section class="product-grids section">
<div class="container">
<div class="row">
<div class="col-lg-3 col-12">

<div class="product-sidebar">

<SingleWidgetSearch/>

<SingleWidgetCategory/>

<SingleWidgetRange/>

<SingleWidgetPrice/>

<SingleWidgetBrand/>


</div>

</div>
<div class="col-lg-9 col-12">
<div class="product-grids-head">
<CategoryProduct/>
</div>
</div>
</div>
</div>
</section>
    </div>
</template>

<script>
import PageTitle from "@/components/includes/PageTitle.vue"
import SingleWidgetSearch from "@/components/category/SingleWidgetSearch.vue"
import SingleWidgetCategory from "@/components/category/SingleWidgetCategory.vue"
import SingleWidgetRange from "@/components/category/SingleWidgetRange.vue"
import SingleWidgetPrice from "@/components/category/SingleWidgetPrice.vue"
import SingleWidgetBrand from "@/components/category/SingleWidgetBrand.vue"
import CategoryProduct from "@/components/category/CategoryProduct.vue"
export default {
    name:'CategoryView',
    components:{PageTitle,SingleWidgetSearch,SingleWidgetCategory,SingleWidgetRange,SingleWidgetPrice,SingleWidgetBrand,CategoryProduct }
    
}
</script>

<style scoped>

</style>
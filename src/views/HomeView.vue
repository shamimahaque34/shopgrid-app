<template>
  <div class="home">
   <HeroArea/> 
   <FeaturedCategories/>
   <TrendingProduct/>
   <BannerArea/>
   <SpecialOffer/>
   <HomeProductList/>
   <BrandsSlider/>
   <BlogSection/>
   <ShippingInfo/>
  </div>
</template>

<script>
// @ is an alias to /src

import HeroArea from "@/components/home/HeroArea.vue"
import FeaturedCategories from "@/components/home/FeaturedCategories.vue"
import TrendingProduct from "@/components/home/TrendingProduct.vue"
import BannerArea from "@/components/home/BannerArea.vue"
import SpecialOffer from "@/components/home/SpecialOffer.vue"
import HomeProductList from "@/components/home/HomeProductList.vue"
import BrandsSlider from "@/components/home/BrandsSlider.vue"
import BlogSection from "@/components/home/BlogSection.vue"
import ShippingInfo from "@/components/home/ShippingInfo.vue"
export default {
  name: 'HomeView',
  components: {HeroArea,FeaturedCategories,TrendingProduct,BannerArea,SpecialOffer,HomeProductList,BrandsSlider,BlogSection,ShippingInfo}
}
</script>

<style scoped>

</style>

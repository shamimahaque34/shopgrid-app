<template>

    <div class="single-block">
<div class="row">
   <div class="col-lg-12 ">
     <div v-html="detail"></div>
</div>

</div>
</div>

    
</template>


<script>
import axios from "axios";

export default {
    name:'ProductDetail',

    data()
    {
        return {
            id:this.$route.params.id,
            detail:'',
        }
       
    },
  
   created()
    {
       this.getProductDetailInfo();
    },
   

    methods:{
        getProductDetailInfo()
        {
          
          axios.get('http://localhost/shopgrid-admin/public/api/get-product-detail-info/' +this.id).then((response) =>{
                            this.detail = response.data;

          });
        }

    }
    
}
</script>

<style scoped>

</style>
<template>
  <MyNavbar/>
  <router-view/>
  <MyFooter/>
</template>

<script>
import MyNavbar from "@/components/includes/MyNavbar.vue"
import MyFooter from "@/components/includes/MyFooter.vue"
export default {
  name:'App',
  components :{MyNavbar,MyFooter}
  
}
</script>

<style scoped>

</style>

<template>
    <div class="cart-view">
        <PageTitle/>
        <div class="shopping-cart section">
<div class="container">
<CardListHead/>
<div class="row">
<div class="col-12">

 <TotalAmount />
    </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import PageTitle from "@/components/includes/PageTitle.vue"
import CardListHead from "../components/cart/CardListHead.vue"

import TotalAmount from "../components/cart/TotalAmount.vue"
export default {
    name:'CartView',
    components:{ PageTitle, CardListHead, TotalAmount }
}
</script>

<style scoped>

</style>
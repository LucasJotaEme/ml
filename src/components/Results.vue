<template>
    <div class="template-default">
        <List></List>
        <div class="div-results margin-top">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
        
    </div>
</template>

<script>

import List from './List'
import Product from './Product'

export default {
    name: 'Results',
    components:{
        List,
        Product
    }
}
</script>
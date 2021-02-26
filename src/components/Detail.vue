<template>
    <div class="template-default">
        
        <List></List>
        
        <div class="div-detail">

            <div class="">    
                <div class="row">
                    <div class="col-sm-7">
                        <img class="product-image" src="./../assets/img/test-iphone.jpg">
                    </div>

                    <div class="col-sm-5">
                            <p class="text-date">Nuevo - 234 vendidos</p>
                            <p class="text-name">Deco Reverse Sombrero Oxford</p>
                            <p class="text-price">$ 1.980</p>

                            <buttom class="btn btn-ml">Comprar</buttom>
                    </div>
                </div>
                <div class="detail-description">
                    <p class="text-title-description">Descripción del producto</p>

                    <div class="padding-top detail-description">
                        <p class="text-description">asdjklasdjaskldjaskldj klasdjaskldjasdklasjdkl asjdklasjdklasjdklsajdklsa jasj jkl ajlj laj j jaj laj lj lajl asjkl aj jl jaljl al </p>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
</template>


<script>

import List from './List'

export default {
    name: 'Detail',
    components: {
        List
    }
}
</script>

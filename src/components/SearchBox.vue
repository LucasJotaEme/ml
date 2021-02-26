<template>
    <div id="searchBox">
        <div class="navbar-nav nav-search">
            <div class="navbar-nav navbar-center d-inline">
                
                <div class="row auto">

                    <div class="col-sm-3" style="text-align:right;">
                        <a href="#"><img src="./../assets/img/Logo_ML.png"></a>
                    </div>
                    
                    <div class="col-sm-9">
                        <form class="form-inline">
                            <div class="input-group">
                                <input class="nav-input form-control" type="text" placeholder="Nunca dejes de buscar">

                                <div class="input-group-prepend">
                                    <span class="input-group-text nav-search" ><img src="./../assets/img/ic_Search.png"></span>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBox'
}
</script>
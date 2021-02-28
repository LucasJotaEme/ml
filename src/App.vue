<template>
  <div id="app">
    <SearchBox></SearchBox>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox'

export default {
  name: 'App',
  components: {
    SearchBox,
  }
}
</script>

<style>
@import url('./assets/css/Styles.css');
</style>

<template>
  <div id="app">
    <SearchBox></SearchBox>
    <Detail></Detail>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox'
import Detail from './components/Detail'

export default {
  name: 'App',
  components: {
    SearchBox,
    Detail
  }
}
</script>

<style>
@import url('./assets/css/Styles.css');
</style>

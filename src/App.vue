<template>
  <div id="app">
    <SearchBox></SearchBox>
    <Results></Results>
    <Detail></Detail>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox'
import Detail from './components/Detail'
import Results from './components/Results'

export default {
  name: 'App',
  components: {
    SearchBox,
    Results,
    Detail
  }
}
</script>

<style>
@import url('./assets/css/Styles.css');
</style>

<template>
  <div id="app">
    <header-top></header-top>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'



export default {
  name: 'App', 
  components: {
    'header-top': Header
     }
  }
  

</script>

<style>

#app {
  font-family:'Open Sans', sans-serif;
  
  text-align: center;
  margin-top: 60px;
}
.fixed-top-position{
    position: absolute;
    top:450px;
}
    @media screen and (max-width: 767px) {
 
  .fixed-top-position{
    top:500px;
  } 
}
   
</style>

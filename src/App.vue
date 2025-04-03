<template>
  <div id="app">
    <header-top></header-top>
    <div class="content">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'App', 
  components: {
    'header-top': Header,
    'app-footer': AppFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;

}


.content {
  flex-grow: 1;
  display: flex;
  align-items: center; /* aligne verticalement les enfants */
  justify-content: center; /* aligne horizontalement si besoin */
  min-height: calc(100vh - 94px); /* ajustable selon la taille de ton header + footer */
  padding-top: 280px;
}


.d-flex{
 justify-content: center;
} 

.flex{
 display: flex;
}
</style>

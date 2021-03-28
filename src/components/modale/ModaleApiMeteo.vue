<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall5"  title="App Météo" class="text-center text-white" hide-footer>
    <h5 class="my-4 text-decoration-underline">Détails : </h5>
    <p class="font-italic">
      Application météo avec VueJs
    </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Déploiement d'une API</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Téchnologies : </h5>
      <span class="badge bg-success text-white mr-2 mb-3">VueJs</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">API OpenWeather</span>
      <span class="badge bg-primary text-white mr-2 mb-3">CSS</span>
      <span class="badge bg-bootstrap mr-2 mb-3">Bootstrap</span>
      <hr>
      <a href="https://api-meteo.paul-fournier-dev.com/" target="_blank" class="btn btn-primary btn-lg float-right mt-2 b-3">Voir le site</a>
  </b-modal>
  </div>
</template> 


<script>


export default {
  name: "ModaleApiMeteo",
  props: ["reveleapimeteo", "toggleModaleApiMeteo"], 
  data(){
    return {
      hideFooter : true,
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>

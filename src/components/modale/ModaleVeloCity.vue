<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall4"  title="Vélo City" class="text-center text-white" hide-footer>
    <h5 class="my-4 text-decoration-underline">Détails : </h5>
    <p class="font-italic">
      Application de réservation de vélo, "single page"
    </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Base de données</li>
        <li class="ml-4 mb-3 list-item">Déploiement d'une API</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Téchnologies : </h5>
      <span class="badge bg-warning text-dark mr-2 mb-3">JavaScript</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Jquery</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">AJAX</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">API Mapbox</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Gulp.js</span>
      <span class="badge bg-sass mr-2 mb-3">Sass</span>
      <span class="badge bg-php mr-2 mb-3">PHP</span>
      <span class="badge bg-bootstrap mr-2 mb-3">Bootstrap</span>
      <hr>
      <a href="https://velo-city.paul-fournier-dev.com" target="_blank" class="btn btn-primary btn-lg float-right mt-2 b-3">Voir le site</a>
  </b-modal>
  </div>
</template> 


<script>


export default {
  name: "ModaleVeloCity",
  props: ["revelevelocity", "toggleModaleVeloCity"], 
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

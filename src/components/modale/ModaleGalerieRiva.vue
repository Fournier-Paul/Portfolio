<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall"  title="Galerie Riva" class="text-center text-white" hide-footer>
    <h5 class="my-4 text-decoration-underline">Détails :</h5>
    <p class="font-italic">
      Site E-commerce d'antiquité, "from-scratch" 
    </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Base de données</li>
        <li class="ml-4 mb-3 list-item">Authentification</li>
        <li class="ml-4 mb-3 list-item">Sécurisation</li>
        <li class="ml-4 mb-3 list-item">Gestion du panier</li>
        <li class="ml-4 mb-3 list-item">Templates e-mail</li>
        <li class="ml-4 mb-3 list-item">Paiement</li>
        <li class="ml-4 mb-3 list-item">API la poste</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Téchnologies : </h5>
      <span class="badge bg-dark text-white mr-2 mb-3">PHP</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">AJAX</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">API la poste</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">JavaScript</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Jquery</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">JSON</span>
      <span class="badge bg-pink text-dark mr-2 mb-3">MySql</span>
      <span class="badge bg-primary text-white mr-2 mb-3">Bootstrap</span>
      <span class="badge bg-primary text-white mr-2 mb-3">Sass</span>
      <span class="badge bg-danger text-white mr-2 mb-3">Gulp.js</span>
      <span class="badge bg-danger text-white mr-2 mb-3">htaccess</span>
  </b-modal>
  </div>
</template> 

<script>


export default {
  name: "ModaleGalerieRiva",
  props: ["revelegalerieriva", "toggleModaleGalerieRiva"], 

}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>


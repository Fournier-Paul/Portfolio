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
      <span class="badge bg-php mr-2 mb-3">PHP</span>
      <span class="badge bg-dark text-light mr-2 mb-3">htaccess</span>
      <span class="badge bg-light text-dark mr-2 mb-3">MySql</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">JavaScript</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Jquery</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">AJAX</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">API la poste</span>
      <p><span class="badge bg-warning text-dark mr-2 mb-3">Gulp.js</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">JSON</span>
      <span class="badge bg-sass mr-2 mb-3">Sass</span>
      <span class="badge bg-bootstrap mr-2 mb-3">Bootstrap</span></p>
      <hr>
      <a href="https://galerie-riva.com" target="_blank" class="btn btn-primary btn-lg float-right mt-2 b-3">Voir le site</a>
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


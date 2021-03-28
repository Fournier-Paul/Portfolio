<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall2" title="SymBnb" class="text-center text-white" hide-footer>
    <h5 class="my-4 text-decoration-underline">Détails :</h5>
    <p class="font-italic">
      Site factice de location de vacances avec le framework Symfony
    </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Base de données</li>
        <li class="ml-4 mb-3 list-item">Authentifications</li>
        <li class="ml-4 mb-3 list-item">Gestion des rôles utilisateurs</li>
        <li class="ml-4 mb-3 list-item">Réservations</li>
        <li class="ml-4 mb-3 list-item">Gestion du profil</li>
        <li class="ml-4 mb-3 list-item">Commentaires</li>
        <li class="ml-4 mb-3 list-item">Notes clients</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Téchnologies : </h5>
      <span class="badge bg-dark text-light mr-2 mb-3">Frameword Symfony</span>
      <span class="badge bg-dark text-light mr-2 mb-3">CLI</span>
      <span class="badge bg-dark text-light mr-2 mb-3">Composer</span>
      <span class="badge bg-dark text-light mr-2 mb-3">Npm</span>
      <span class="badge bg-php mr-2 mb-3">PHP</span>
      <span class="badge bg-success text-light mr-2 mb-3">Twig</span>
      <span class="badge bg-light text-dark mr-2 mb-3">MySql</span>
      <p><span class="badge bg-warning text-dark mr-2 mb-3">JavaScript</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Jquery</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">AJAX</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Webpack</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Faker librairie</span>
      <span class="badge bg-sass mr-2 mb-3">Sass</span>
      <span class="badge bg-bootstrap mr-2 mb-3">Bootstrap</span>
      <span class="badge bg-bootstrap mr-2 mb-3">Heroku</span></p>
      <hr>
      <a href="http://symfony-app-62568.herokuapp.com/" target="_blank" class="btn btn-primary btn-lg float-right mt-2 b-3">Voir le site</a>
    </b-modal>
  </div>
</template> 

<script>

export default {
  name: "ModaleSymbnb",
  props: ["revelesymbnb", "toggleModaleSymbnb"], 

}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>

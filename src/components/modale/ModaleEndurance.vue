<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall9"  title="Endurance24" class="text-center text-white" hide-footer>
    <h5 class="my-4 text-decoration-underline">Détails :</h5>
    <p class="font-italic">
      Site d'actualité du mortorsport
    </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Base de données</li>
        <li class="ml-4 mb-3 list-item">Page builders</li>
        <li class="ml-4 mb-3 list-item">Gestion des accès et sécurité utilisateur</li>
        <li class="ml-4 mb-3 list-item">Gestion du panier</li>
        <li class="ml-4 mb-3 list-item">Paiement</li>
        <li class="ml-4 mb-3 list-item">Live texte</li>
        <li class="ml-4 mb-3 list-item">Formulaire de contact</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Téchnologies : </h5>
      <span class="badge bg-dark text-white mr-2 mb-3">PHP</span>
      <span class="badge bg-dark text-white mr-2 mb-3">Wordpress</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">AJAX</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">JavaScript</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Jquery</span>
      <span class="badge bg-danger text-white mr-2 mb-3">Duplicator</span>
      <span class="badge bg-danger text-white mr-2 mb-3">W3 Total Cache</span>
      <span class="badge bg-danger text-white mr-2 mb-3">Wordfence</span>
      <span class="badge bg-secondary text-white mr-2 mb-3">Child-theme</span>
      <hr>
      <a href="https://endurance24.fr/" target="_blank" class="btn btn-primary btn-lg float-right mt-2 b-3">Voir le site</a>
      <p class="text-muted mt-4 small">
      *Certaines technologies sensibles ont été volontairement généralisées pour des raisons de sécurité.
      </p>
    </b-modal>
  </div>
</template> 

<script>


export default {
  name: "ModaleEndurance",
  props: ["reveleendurance", "toggleModaleEndurance"], 

}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>


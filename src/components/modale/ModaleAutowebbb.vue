<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall12"  title="Autowebbb" class="text-center text-white" hide-footer>
    <h5 class="my-4 text-decoration-underline">Détails :</h5>
    <p class="font-italic">
      Autowebbb | Agence de Communication automobile
    </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Frontend</li>
        <li class="ml-4 mb-3 list-item">Backend</li>
        <li class="ml-4 mb-3 list-item">Base de données</li>
        <li class="ml-4 mb-3 list-item">Gestion des accès et sécurité utilisateur</li>
        <li class="ml-4 mb-3 list-item">Configuration serveur</li>
        <li class="ml-4 mb-3 list-item">Variables d'environnement</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Technologies : </h5>
      <span class="badge bg-php mr-2 mb-3">PHP</span>
      <span class="badge bg-dark text-white mr-2 mb-3">Cockpit</span>
      <span class="badge bg-sass mr-2 mb-3">SQLite</span>
      <span class="badge bg-sass mr-2 mb-3">YAML</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Nuxt.js</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">API</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Composer</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">JSON</span>
      <span class="badge bg-primary text-white mr-2 mb-3">Tailwind CSS</span>
      <span class="badge bg-light mr-2 mb-3">i18n </span>
      <span class="badge bg-light mr-2 mb-3">Recaptcha</span>
      <hr>
      <a href="https://autowebbb-motorsport.com/" target="_blank" class="btn btn-primary btn-lg float-right mt-2 b-3">Voir le site</a>
      <p class="text-muted mt-4 small">
  *Certaines technologies sensibles ont été volontairement généralisées pour des raisons de sécurité.
</p>
  </b-modal>
  </div>
</template> 

<script>


export default {
  name: "ModaleAutowebbb",
  props: ["reveleautowebbb", "toggleModaleAutowebbb"], 

}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>


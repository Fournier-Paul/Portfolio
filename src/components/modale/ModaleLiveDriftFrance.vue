<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall8"  title="Live DriftFrance" class="text-center text-white" hide-footer>
    <h5 class="my-4 text-decoration-underline">Détails :</h5>
    <p class="font-italic">
      Site du Live du Championnat de France de Drift FFSA
      Récupération du classement en live pendant les courses via la télémétrie
    </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Frontend</li>
        <li class="ml-4 mb-3 list-item">Backend</li>
        <li class="ml-4 mb-3 list-item">Gestion des accès et sécurité utilisateur</li>
        <li class="ml-4 mb-3 list-item">Configuration serveur</li>
        <li class="ml-4 mb-3 list-item">Templates e-mail</li>
        <li class="ml-4 mb-3 list-item">API</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Téchnologies : </h5>
      <span class="badge bg-dark text-white mr-2 mb-3">Node.js</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Flux JSON</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">JavaScript</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Websocket</span>
      <span class="badge bg-primary text-white mr-2 mb-3">PostCss</span>
      <span class="badge bg-primary text-white mr-2 mb-3">TailwindCSS</span>
      <span class="badge bg-danger text-white mr-2 mb-3">Vite.js</span>
      <p class="text-muted mt-4 small">
        *Certaines technologies sensibles ont été volontairement généralisées pour des raisons de sécurité.
      </p>
  </b-modal>
  </div>
</template> 

<script>


export default {
  name: "ModaleLiveDriftFrance",
  props: ["revelelivedriftfrance", "toggleModaleLiveDriftFrance"], 

}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>
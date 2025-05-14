<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall20" title="Mise à jour des Points des Pilotes" class="text-center text-white" hide-footer>
      <h5 class="my-4 text-decoration-underline">Détails :</h5>
      <p class="font-italic">
        Script d'automatisation en Python permettant de mettre à jour les points des pilotes dans la base de données à partir d'un fichier Excel.
      </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Lecture et traitement de fichiers Excel</li>
        <li class="ml-4 mb-3 list-item">Requête API REST</li>
        <li class="ml-4 mb-3 list-item">Mise à jour de la base de données à distance</li>
        <li class="ml-4 mb-3 list-item">Ajout automatique de nouveaux pilotes</li>
        <li class="ml-4 mb-3 list-item">Mise à jour des pilotes existants</li>
        <li class="ml-4 mb-3 list-item">Gestion des erreurs (connexion, structure du fichier...)</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Technologies :</h5>
      <span class="badge bg-dark text-white mr-2 mb-3">Python 3</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Pandas</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Requests</span>
      <span class="badge bg-primary text-white mr-2 mb-3">API REST</span>
      <span class="badge bg-success text-white mr-2 mb-3">Excel</span>
      <span class="badge bg-secondary text-white mr-2 mb-3">JSON</span>
      <hr>
      <a href="#" target="_blank" class="btn btn-primary btn-lg float-right mt-2 b-3 disabled" aria-disabled="true">Code privé</a>
      <p class="text-muted mt-4 small">
        *Le code source est confidentiel et n'est pas disponible publiquement pour des raisons de sécurité.
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModaleUpdatePoints",
  props: ["revelupdatepoints", "toggleModaleUpdatePoints"], 
}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>

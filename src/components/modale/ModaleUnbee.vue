<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall3" title="Unbee" class="text-center text-white" hide-footer>
    <h5 class="my-4 text-decoration-underline">Détails :</h5>
    <p class="font-italic">
      Site de gestion de contenu, permettant d'afficher un diaporama d'ambiance, pour une salle de sport, destiné à être héberger sur un raspberry Pi
    </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Base de données</li>
        <li class="ml-4 mb-3 list-item">Authentification</li>
        <li class="ml-4 mb-3 list-item">Gestion des images</li>
        <li class="ml-4 mb-3 list-item">Gestion du texte de la banderole</li>
        <li class="ml-4 mb-3 list-item">Gestion des articles</li>
        <li class="ml-4 mb-3 list-item">Gestion des effets</li>
        <li class="ml-4 mb-3 list-item">Gestion du temps d'affichage de chaque page du diaporama</li>
        <li class="ml-4 mb-3 list-item">Générateur de templates</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Téchnologies : </h5>
      <span class="badge bg-php mr-2 mb-3">PHP</span>
      <span class="badge bg-danger text-light mr-2 mb-3">HTML</span>
      <span class="badge bg-primary text-light mr-2 mb-3">CSS</span>
      <span class="badge bg-light text-dark mr-2 mb-3">MySql</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">JavaScript</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Jquery</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">AJAX</span>
      <hr>
      <a v-on:click="toggleUnbee = !toggleUnbee" class="btn btn-primary btn-lg float-right mt-2 b-3">Aperçu du site</a>
    </b-modal>
      <div v-if="toggleUnbee">
        <unbee></unbee>
      </div> 
  </div>
</template> 

<script>
import Unbee from '../projects/Unbee'

export default {
  name: "ModaleUnbee",
  props: ["reveleunbee", "toggleModaleUnbee"], 
   data(){
      return {
        toggleUnbee: false,
      }
    }, 
    components: {
        'unbee' : Unbee
    },
}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>

<template>
    <div class="container fixed-top-position">
      <b-modal id="modal-tall16"  title="ParkLib" class="text-center text-white" hide-footer>
      <h5 class="my-4 text-decoration-underline">Détails :</h5>
      <p class="font-italic">
        Application mobile de localisation de Parking et de location pour les particuliers
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
        <span class="badge bg-dark text-white mr-2 mb-3">Node.js</span>
        <span class="badge bg-success text-white mr-2 mb-3">Angular</span>
        <span class="badge bg-success text-white mr-2 mb-3">ReactNative</span>
        <span class="badge bg-warning text-dark mr-2 mb-3">API</span>
        <span class="badge bg-warning text-dark mr-2 mb-3">JWT Token</span>
        <span class="badge bg-pink text-dark mr-2 mb-3">JSON</span>
        <span class="badge bg-pink text-dark mr-2 mb-3">Redis</span>
        <span class="badge bg-pink text-dark mr-2 mb-3">SQL</span>
        <span class="badge bg-primary text-white mr-2 mb-3">Tailwind CSS</span>
        <span class="badge bg-danger text-white mr-2 mb-3">Docker</span>
        <span class="badge bg-danger text-white mr-2 mb-3">Expo</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">Recaptcha</span>
        <hr>
        <a v-on:click="toggleParkLib = !toggleParkLib" class="btn btn-primary btn-lg float-right mt-2 b-3">Aperçu de l'application</a>
    </b-modal>
      <div v-if="toggleParkLib">
        <parklib></parklib>
      </div> 
  </div>
  </template> 
  
  <script>
  import ParkLib from '../projects/ParkLib'
  
  export default {
    name: "ModaleParkLib",
    props: ["reveleparklib", "toggleModaleParkLib"], 
     data(){
        return {
          toggleParkLib: false,
        }
      }, 
      components: {
          'parklib' : ParkLib
      },
  }
  </script>
  
  <style lang="scss">
  @import '../../assets/modals.scss';
  </style>
  
  
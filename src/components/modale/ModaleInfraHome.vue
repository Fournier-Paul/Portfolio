<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall19" title="Projet d'infrastructure locale domestique" class="text-center text-white" hide-footer>
      <h5 class="my-4 text-decoration-underline">Services hébergés :</h5>
      <p class="font-italic">
        Stack domestique hébergée sur un Raspberry Pi 5 avec plusieurs services conteneurisés via Docker.<br><br>
        Une migration vers un cluster K3s est en cours pour renforcer la stabilité, la montée en charge, l'isolation des services et une montée en compétence.
      </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Jeedom (domotique)</li>
        <li class="ml-4 mb-3 list-item">Zigbee2MQTT (intégration d'appareils Zigbee)</li>
        <li class="ml-4 mb-3 list-item">Mosquitto (broker MQTT)</li>
        <li class="ml-4 mb-3 list-item">Nextcloud (stockage cloud privé, messagerie, outil de gestion de projet, agenda)</li>
        <li class="ml-4 mb-3 list-item">Assistant vocal</li>
        <li class="ml-4 mb-3 list-item">Serveur mail API (pour portfolio)</li>
        <li class="ml-4 mb-3 list-item">Frontend Vue.js (portfolio)</li>
        <li class="ml-4 mb-3 list-item">Monitoring</li>
        <li class="ml-4 mb-3 list-item">Impressions 3D</li>
        <li class="ml-4 mb-3 list-item">Autres services</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Technologies :</h5>
      <span class="badge bg-dark text-white mr-2 mb-3">Raspberry Pi 5</span>
      <span class="badge bg-dark text-white mr-2 mb-3">Support et disque SSD NVMe</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Docker</span>
      <span class="badge bg-primary text-white mr-2 mb-3">Vue.js</span>
      <span class="badge bg-info text-dark mr-2 mb-3">MQTT</span>
      <span class="badge bg-success text-white mr-2 mb-3">Zigbee2MQTT</span>
      <span class="badge bg-secondary text-white mr-2 mb-3">Nextcloud</span>
      <span class="badge bg-danger text-white mr-2 mb-3">Plex</span>
      <span class="badge bg-danger text-white mr-2 mb-3">Grafana</span>
      <span class="badge bg-danger text-white mr-2 mb-3">Prometheus</span>
      <hr>
      <a v-on:click="toggleInfraHome = !toggleInfraHome" class="btn btn-primary btn-lg float-right mt-2 b-3">Aperçu du projet</a>
    </b-modal>
    <div v-if="toggleInfraHome">
      <infrahome></infrahome>
    </div> 
  </div>
</template>

<script>
  import InfraHome from '../projects/InfraHome'

export default {
  name: "ModaleInfraHome",
  props: ["reveleinfrahome", "toggleModaleInfraHome"], 
  data(){
    return {
      toggleInfraHome: false,
    }
  }, 
  components: {
    'infrahome' : InfraHome
  },
}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>

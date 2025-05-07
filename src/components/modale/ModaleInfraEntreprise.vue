<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall18" title="Projet d'infrastructure d'entreprise" class="text-center text-white" hide-footer>
      <h5 class="my-4 text-decoration-underline">Infrastructure et Technologies :</h5>
      <p class="font-italic">
        L’infrastructure contient une solution de service cloud (DigitalOcean) et un serveur local accessible à distance, chacun hébergeant des applications web et des services complémentaires.
      </p>

      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Infrastructure cloud hébergeant des services web (Cockpit CMS, Nuxt.js)</li>
        <li class="ml-4 mb-3 list-item">Déploiements automatisés via Jenkins, Ansible et Terraform</li>
        <li class="ml-4 mb-3 list-item">Infrastructure physique locale sur Raspberry Pi pour stockage et services internes</li>
        <li class="ml-4 mb-3 list-item">Reverse proxy NGINX avec Let’s Encrypt (HTTPS)</li>
        <li class="ml-4 mb-3 list-item">Services NextCloud (stockage cloud privé, messagerie, outil de gestion de projet, agenda), Plex, Signature mail accessible via le web</li>
        <li class="ml-4 mb-3 list-item">Bases de données</li>
        <li class="ml-4 mb-3 list-item">Sécurité : VPN WireGuard, UFW, Fail2ban, accès SSH restreint</li>
        <li class="ml-4 mb-3 list-item">Monitoring avec Prometheus, Grafana, Node-Exporter</li>
        <li class="ml-4 mb-3 list-item">Sauvegardes (Rsync, BorgBackup) sur des disques locaux 12To et via Dropbox</li>
      </ul>

      <div class="my-4">
        <h5 class="text-decoration-underline">Stack Technologique :</h5>
        <span class="badge bg-dark text-white mr-2 mb-3">DigitalOcean</span>
        <span class="badge bg-dark text-white mr-2 mb-3">Raspberry Pi OS Lite</span>
        <span class="badge bg-dark text-white mr-2 mb-3">NVMe</span>
        <span class="badge bg-warning text-dark mr-2 mb-3">Docker</span>
        <span class="badge bg-danger text-white mr-2 mb-3">Jenkins</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">Ansible</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">Terraform</span>
        <span class="badge bg-primary text-white mr-2 mb-3">NGINX</span>
        <span class="badge bg-primary text-white mr-2 mb-3">Prometheus</span>
        <span class="badge bg-primary text-white mr-2 mb-3">Grafana</span>
        <span class="badge bg-success text-white mr-2 mb-3">Let’s Encrypt</span>
        <span class="badge bg-info text-white mr-2 mb-3">Cockpit CMS</span>
        <span class="badge bg-info text-white mr-2 mb-3">Nuxt.js</span>
        <span class="badge bg-info text-white mr-2 mb-3">NextCloud</span>
        <span class="badge bg-info text-white mr-2 mb-3">Plex</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">Signature mail</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">PostgreSQL</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">Node-Exporter</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">MySQL</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">Rsync</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">BorgBackup</span>
        <span class="badge bg-success text-white mr-2 mb-3">WireGuard VPN</span>
        <span class="badge bg-danger text-white mr-2 mb-3">Fail2ban</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">UFW</span>
        <span class="badge bg-secondary text-white mr-2 mb-3">Disques externes 12To</span>
      </div>

      <hr>
      <a v-on:click="toggleInfraEntreprise = !toggleInfraEntreprise" class="btn btn-primary btn-lg float-right mt-2 b-3">Aperçu du projet</a>
    </b-modal>
    <div v-if="toggleInfraEntreprise">
      <infraentreprise></infraentreprise>
    </div> 
  </div>
</template>


<script>
  import InfraEntreprise from '../projects/InfraEntreprise'

export default {
  name: "ModaleInfraEntreprise",
  props: ["reveleinfraentreprise", "toggleModaleInfraEntreprise"], 
  data(){
    return {
      toggleInfraEntreprise: false,
    }
  }, 
  components: {
    'infraentreprise' : InfraEntreprise
  },
}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>


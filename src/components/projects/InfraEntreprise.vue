<template>
  <div class="container">
    <div class="row">
      <LightBox :media="media" :showCaption="true"></LightBox>
    </div>
  </div>
</template>

<script>
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
import LightBox from 'vue-image-lightbox'

export default {
  name: 'InfraEntreprise',
  components: {
    LightBox,
  },
  data() {
    return {
      media: [
              { src: 'img/infra-entreprise/old-infra.png', thumb: 'img/infra-entreprise/old-infra.png', caption: 'Ancienne infrastructure' },
              { src: 'img/infra-entreprise/POC-hebergement-automatisation-monitoring.png', thumb: 'img/infra-entreprise/POC-hebergement-automatisation-monitoring.png', caption: 'POC - Hébergement, automatisation & monitoring' },
              { src: 'img/infra-entreprise/infra-local-entreprise.png', thumb: 'img/infra-entreprise/infra-local-entreprise.png', caption: 'Infrastructure locale' },
              // { src: 'img/infra-entreprise/new-infra-local.png', thumb: 'img/infra-entreprise/new-infra-local.png', caption: 'Nouvelle infrastructure locale' },
              // { src: 'img/infra-entreprise/diagramme-reseau.png', thumb: 'img/infra-entreprise/diagramme-reseau.png', caption: 'Diagramme du réseau d\'entreprise' },
              // { src: 'img/infra-entreprise/docker-compose.png', thumb: 'img/infra-entreprise/docker-compose.png', caption: 'Fichier docker-compose pour services' },
              // { src: 'img/infra-entreprise/exemple-config-vpn.png', thumb: 'img/infra-entreprise/exemple-config-vpn.png', caption: 'Exemple de configuration VPN' },
              // { src: 'img/infra-entreprise/playbook-ansible.png', thumb: 'img/infra-entreprise/playbook-ansible.png', caption: 'Extrait de Playbook Ansible' },
              // { src: 'img/infra-entreprise/grafana.png', thumb: 'img/infra-entreprise/grafana.png', caption: 'Dashboard de monitoring - Grafana' },
      ]

    }
  }
}
</script>

<style>
.container {
  padding-top: 20px;
}

div.vue-lb-info {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>

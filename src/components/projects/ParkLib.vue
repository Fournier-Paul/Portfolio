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
  name: 'Parklib',
  components: {
    LightBox,
  },
  data() {
    return {
      media: [
        // Analyse & Conception
        { src: 'img/parklib/Diagrammes use case2.png', thumb: 'img/parklib/Diagrammes use case2.png', caption: 'Use Case - Gestion utilisateur' },
        { src: 'img/parklib/Diagrammes use case3.png', thumb: 'img/parklib/Diagrammes use case3.png', caption: 'Use Case - Consulter l\'annonce de place de parking' },
        { src: 'img/parklib/Use cases backoffice4.png', thumb: 'img/parklib/Use cases backoffice4.png', caption: 'Location de parking' },
        { src: 'img/parklib/Diagrammes use case4.png', thumb: 'img/parklib/Diagrammes use case4.png', caption: 'Use Case - Backoffice admin de l\'application mobile' },
        { src: 'img/parklib/Dictionnaire de données.png', thumb: 'img/parklib/Dictionnaire de données.png', caption: 'Dictionnaire de données - Définition des champs' },
        { src: 'img/parklib/Le modèle conceptuel de données.jpg', thumb: 'img/parklib/Le modèle conceptuel de données.jpg', caption: 'Modèle conceptuel de données (MCD)' },
        { src: 'img/parklib/Le modèle logique de données.png', thumb: 'img/parklib/Le modèle logique de données.png', caption: 'Modèle logique de données (MLD)' },
        { src: 'img/parklib/Digramme de classes.png', thumb: 'img/parklib/Digramme de classes.png', caption: 'Diagramme de classes principal' },
        { src: 'img/parklib/diagramme de classes2.png', thumb: 'img/parklib/diagramme de classes2.png', caption: 'Diagramme de classes complémentaire' },
        { src: 'img/parklib/Diagramme de class de comportement.png', thumb: 'img/parklib/Diagramme de class de comportement.png', caption: 'Diagramme de classes de comportement' },
        { src: 'img/parklib/Diagramme de Séquence de connexion.png', thumb: 'img/parklib/Diagramme de Séquence de connexion.png', caption: 'Diagramme de séquence - Connexion utilisateur' },
        { src: 'img/parklib/Diagramme de séquence du système d\'authentification d\'un utilisateur.png', thumb: 'img/parklib/Diagramme de séquence du système d\'authentification d\'un utilisateur.png', caption: 'Diagramme de séquence - Authentification' },

        // Maquettes UI
        { src: 'img/parklib/maquette-mobile.png', thumb: 'img/parklib/maquette-mobile.png', caption: 'Maquette mobile - Vue utilisateur' },
        { src: 'img/parklib/Maquette Back-office.png', thumb: 'img/parklib/Maquette Back-office.png', caption: 'Maquette du back-office administrateur' },

        // Implémentation
        { src: 'img/parklib/Implémentation et communication à la base de données.png', thumb: 'img/parklib/Implémentation et communication à la base de données.png', caption: 'Schéma technique - Base de données et API' },
        { src: 'img/parklib/Chemin de connexion et d’inscription de l’utilisateur.png', thumb: 'img/parklib/Chemin de connexion et d’inscription de l’utilisateur.png', caption: 'Flux de connexion/inscription utilisateur' },

        // Déploiement
        { src: 'img/parklib/deploiement.jpg', thumb: 'img/parklib/deploiement.jpg', caption: 'Architecture de déploiement' },

        // Use Cases Back-office
        { src: 'img/parklib/Use cases backoffice.png', thumb: 'img/parklib/Use cases backoffice.png', caption: 'Backoffice - Gestion des utilisateurs' },
        { src: 'img/parklib/Use cases backoffice2.png', thumb: 'img/parklib/Use cases backoffice2.png', caption: 'Backoffice - Gestion des réservations' },
        { src: 'img/parklib/usecase6.png', thumb: 'img/parklib/usecase6.png', caption: 'Backoffice - Administration' },

        // UI Screens classiques
        { src: 'img/parklib/Accueil.png', thumb: 'img/parklib/Accueil.png', caption: 'Page d\'accueil mobile' },
        { src: 'img/parklib/Login.png', thumb: 'img/parklib/Login.png', caption: 'Écran de connexion' },
        { src: 'img/parklib/Map.png', thumb: 'img/parklib/Map.png', caption: 'Carte des parkings' },
        { src: 'img/parklib/Map-drawer.png', thumb: 'img/parklib/Map-drawer.png', caption: 'Carte - menu latéral' },
        { src: 'img/parklib/Map-info-park.png', thumb: 'img/parklib/Map-info-park.png', caption: 'Infos détaillées sur un parking' },
        { src: 'img/parklib/Register.png', thumb: 'img/parklib/Register.png', caption: 'Formulaire d\'inscription' },
        { src: 'img/parklib/Web-Home.png', thumb: 'img/parklib/Web-Home.png', caption: 'Page d\'accueil web' },
        { src: 'img/parklib/Web-Booking.png', thumb: 'img/parklib/Web-Booking.png', caption: 'Interface de réservation web' },
        { src: 'img/parklib/Web-detail-user.png', thumb: 'img/parklib/Web-detail-user.png', caption: 'Profil utilisateur (détails)' },
        { src: 'img/parklib/Web-login.png', thumb: 'img/parklib/Web-login.png', caption: 'Connexion web' },
        { src: 'img/parklib/Web-register.png', thumb: 'img/parklib/Web-register.png', caption: 'Inscription web' },
        { src: 'img/parklib/Web-Profile.png', thumb: 'img/parklib/Web-Profile.png', caption: 'Profil utilisateur - Vue web' }
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

<template>
  <div class="container-fluid fixed-top-position pt-150"> 
    
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleInfraHome" class="btn" v-b-modal.modal-tall19>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/infra-local/f722750b-ec16-4dbd-badd-38be368ba901~1.jpg" alt="Projet d'infrastructure locale domestique">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Projet d'infrastructure locale domestique</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleDriftFrance" class="btn" v-b-modal.modal-tall7>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/drift.png" alt="Drift France">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Drift France</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleInfraEntreprise" class="btn" v-b-modal.modal-tall18>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/infra-entreprise/clarilog-les-echos-image.jpg" alt="Projet d'infrastructure locale d'entreprise">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Projet d'infrastructure d'entreprise</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleParkLib" class="btn" v-b-modal.modal-tall16>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top mt-2 mb-2" src="/img/Image1.png" alt="ParkLib">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">ParkLib</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleLiveDriftFrance" class="btn" v-b-modal.modal-tall8>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/live-driftfrance.png" alt="Live Drift France">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Live Drift France</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleEndurance" class="btn" v-b-modal.modal-tall9>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/endurance.png" alt="Endurance24">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Endurance24</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleShopDrivn" class="btn" v-b-modal.modal-tall10>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/drivn-site.png" alt="Shop Driv'n motorsport">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Shop Driv'n motorsport</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleSignatureMail" class="btn" v-b-modal.modal-tall15>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/signture-mail.png" alt="Signature Mail">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Signature Mail</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleCaniCottage" class="btn" v-b-modal.modal-tall11>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/cani-cottage.png" alt="Cani-Cottage">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Cani Cottage</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleAutowebbb" class="btn" v-b-modal.modal-tall12>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/autowebbb.png" alt="Autowebbb">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Autowebbb</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleSteveLeiber" class="btn" v-b-modal.modal-tall13>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/steve.png" alt="Steve Leiber">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Steve Leiber</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleJulienGerbi" class="btn" v-b-modal.modal-tall14>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/juliengerbi.png" alt="Julien Gerbi">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Julien Gerbi</h5>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleGalerieRiva" class="btn" v-b-modal.modal-tall>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/galerie-riva.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Galerie Riva</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleSymbnb" class="btn" v-b-modal.modal-tall2>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/SymBnb.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Symbnb</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModalePanterest" class="btn" v-b-modal.modal-tall6>
            <div class="btn card" style="width: 18rem;">
              <img class="card-img-top" src="/img/panterest1.png" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title font-weight-bold  mt-2">Panterest</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleUnbee" class="btn" v-b-modal.modal-tall3>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/img/unbee.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title font-weight-bold  mt-2">Unbee</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleVeloCity" class="btn" v-b-modal.modal-tall4>
            <div class="btn card" style="width: 18rem;">
              <img class="card-img-top" src="/img/velo-city.png" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title font-weight-bold  mt-2">Vélo City</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleApiMeteo" class="btn" v-b-modal.modal-tall5>
            <div class="btn card" style="width: 18rem;">
              <img class="card-img-top" src="/img/api-meteo.png" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title font-weight-bold  mt-2">App Météo</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleStuliday" class="btn card" style="width: 18rem;" v-b-modal.modal-tall1>
            <img class="card-img-top" src="/img/stuliday.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title font-weight-bold  mt-2">Stuliday</h5>
            </div>
          </div>
        </div>
      </div>
      <unbeemodale :reveleunbee="reveleunbee" :toggleModaleUnbee="toggleModaleUnbee" />
    <symbnbmodale :revelesymbnb="revelesymbnb" :toggleModaleSymbnb="toggleModaleSymbnb" />
    <velocitymodale :revelevelocity="revelevelocity" :toggleModaleVeloCity="toggleModaleVeloCity" />
    <apimeteomodale :reveleapimeteo="reveleapimeteo" :toggleModaleApiMeteo="toggleModaleApiMeteo" />
    <panterestmodale :revelepanterest="revelepanterest" :toggleModalePanterest="toggleModalePanterest" />
    <stulidaymodale :revelestuliday="revelestuliday" :toggleModaleStuliday="toggleModaleStuliday" />
    <galerierivamodale :revelegalerieriva="revelegalerieriva" :toggleModaleGalerieRiva="toggleModaleGalerieRiva" />
    <driftfrancemodale :reveledriftfrance="reveledriftfrance" :toggleModaleDriftFrance="toggleModaleDriftFrance" />
    <infrahomemodale :reveleinfrahome="reveleinfrahome" :toggleModaleInfraHome="toggleModaleInfraHome" />
    <infraentreprisemodale :reveleinfraentreprise="reveleinfraentreprise" :toggleModaleInfraEntreprise="toggleModaleInfraEntreprise" />
    <livedriftfrancemodale :revelelivedriftfrance="revelelivedriftfrance" :toggleModaleLiveDriftFrance="toggleModaleLiveDriftFrance" />
    <endurancemodale :reveleendurance="reveleendurance" :toggleModaleEndurance="toggleModaleEndurance" />
    <shopdrivnmodale :reveleshopdrivn="reveleshopdrivn" :toggleShopDrivn="toggleShopDrivn" />
    <canicottagemodale :revelecanicottage="revelecanicottage" :toggleModaleCaniCottage="toggleModaleCaniCottage" />
    <autowebbbmodale :reveleautowebbb="reveleautowebbb" :toggleModaleAutowebbb="toggleModaleAutowebbb" />
    <steveleibermodale :revelesteveleiber="revelesteveleiber" :toggleModaleSteveLeiber="toggleModaleSteveLeiber" />
    <juliengerbimodale :revelejuliengerbi="revelejuliengerbi" :toggleModaleJulienGerbi="toggleModaleJulienGerbi" />
    <signaturemailmodale :revelesignaturemail="revelesignaturemail" :toggleModaleSignatureMail="toggleModaleSignatureMail" />
    <parklibmodale :reveleparklib="reveleparklib" :toggleModaleParkLib="toggleModaleParkLib" />
    </div>
</template>

<script>
import ModaleUnbee from './modale/ModaleUnbee'
import ModaleSymbnb from './modale/ModaleSymbnb'
import ModaleGalerieRiva from './modale/ModaleGalerieRiva'
import ModaleVeloCity from './modale/ModaleVeloCity'
import ModaleStuliday from './modale/ModaleStuliday'
import ModaleApiMeteo from './modale/ModaleApiMeteo'
import ModalePanterest from './modale/ModalePanterest'
import ModaleDriftFrance from './modale/ModaleDriftFrance'
import ModaleLiveDriftFrance from './modale/ModaleLiveDriftFrance'
import ModaleEndurance from './modale/ModaleEndurance'
import ModaleShopdrivn from './modale/ModaleShopDrivn'
import ModaleCaniCottage from './modale/ModaleCaniCottage'
import ModaleAutowebbb from './modale/ModaleAutowebbb'
import ModaleSteveLeiber from './modale/ModaleSteveLeiber'
import ModaleJulienGerbi from './modale/ModaleJulienGerbi'
import ModaleSignatureMail from './modale/ModaleSignatureMail'
import ModaleParkLib from './modale/ModaleParkLib'
import ModaleInfraEntreprise from './modale/ModaleInfraEntreprise'
import ModaleInfraHome from './modale/ModaleInfraHome'

export default {
  name: 'Portfolio',
  data(){
    return {
      reveleunbee: false,
      revelesymbnb: false,
      revelegalerieriva: false,
      revelevelocity: false,
      revelestuliday: false,
      reveleapimeteo: false,
      revelepanterest: false,
      reveledriftfrance: false,
      revelelivedriftfrance: false,
      reveleendurance: false,
      reveleshopdrivn: false,
      revelecanicottage: false,
      reveleautowebbb: false,
      revelesteveleiber: false,
      revelejuliengerbi: false,
      revelesignaturemail: false,
      reveleparklib: false,
      reveleinfrahome: false,
      reveleinfraentreprise: false,
    }
  },
  methods: {
    toggleModaleUnbee: function() {
    this.reveleunbee = !this.reveleunbee
  },
  toggleModaleSymbnb: function() {
    this.revelesymbnb = !this.revelesymbnb
  },
  toggleModaleGalerieRiva: function() {
    this.revelegalerieriva = !this.revelegalerieriva
  },
  toggleModaleVeloCity: function() {
    this.revelevelocity = !this.revelevelocity
  },
  toggleModaleApiMeteo: function() {
    this.reveleapimeteo = !this.reveleapimeteo
  },
  toggleModalePanterest: function() {
    this.revelepanterest = !this.revelepanterest
  },
  toggleModaleStuliday: function() {
    this.revelestuliday = !this.revelestuliday
  },
  toggleModaleDriftFrance: function() {
    this.reveledriftfrance = !this.reveledriftfrance
  },
  toggleModaleLiveDriftFrance: function() {
    this.revelelivedriftfrance = !this.revelelivedriftfrance
  },
  toggleModaleEndurance: function() {
    this.reveleendurance = !this.reveleendurance
  },
  toggleShopDrivn: function() {
    this.reveleshopdrivn = !this.reveleshopdrivn
  },
  toggleModaleCaniCottage: function() {
    this.revelecanicottage = !this.revelecanicottage
  },
  toggleModaleAutowebbb: function() {
    this.reveleautowebbb = !this.reveleautowebbb
  },
  toggleModaleSteveLeiber: function() {
    this.revelesteveleiber = !this.revelesteveleiber
  },
  toggleModaleSignatureMail: function() {
    this.revelesignaturemail = !this.revelesignaturemail
  },
  toggleModaleParkLib: function() {
    this.reveleparklib = !this.reveleparklib
  },
  toggleModaleInfraEntreprise: function() {
    this.reveleinfraentreprise = !this.reveleinfraentreprise
  },
  toggleModaleInfraHome: function() {
    this.reveleinfrahome = !this.reveleinfrahome
  },
  toggleModaleJulienGerbi: function() {
    this.revelejuliengerbi = !this.revelejuliengerbi
  }
  },
  components: {
    'unbeemodale' : ModaleUnbee,
    'symbnbmodale' : ModaleSymbnb,
    'galerierivamodale' : ModaleGalerieRiva,
    'velocitymodale' : ModaleVeloCity,
    'stulidaymodale' : ModaleStuliday,
    'apimeteomodale' : ModaleApiMeteo,
    'panterestmodale' : ModalePanterest,
    'driftfrancemodale' : ModaleDriftFrance,
    'livedriftfrancemodale' : ModaleLiveDriftFrance,
    'endurancemodale' : ModaleEndurance,
    'shopdrivnmodale' : ModaleShopdrivn,
    'canicottagemodale' : ModaleCaniCottage,
    'autowebbbmodale' : ModaleAutowebbb,
    'steveleibermodale' : ModaleSteveLeiber,
    'juliengerbimodale' : ModaleJulienGerbi,
    'signaturemailmodale' : ModaleSignatureMail,
    'parklibmodale' : ModaleParkLib,
    'infraentreprisemodale' : ModaleInfraEntreprise,
    'infrahomemodale' : ModaleInfraHome,
  }
}
</script>

<style scoped lang="scss">
@import '../assets/portfolio.scss';
@import '../assets/modals.scss';

</style>
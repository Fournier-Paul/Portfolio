<template>
  <div class="container-fluid fixed-top-position"> 
    
    <div class="row">
      <div class="col-md-12 mb-3">
        <h1>Portfolio</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mb-5">
        <p class="font-italic">Quelques exemples du travail que je suis capable de fournir dans le domaine du développement web.</p>
      </div>
    </div>
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleGalerieRiva" class="btn" v-b-modal.modal-tall>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="../../public/img/galerie-riva.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title font-weight-bold font-italic mt-2">Galerie Riva</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleSymbnb" class="btn" v-b-modal.modal-tall2>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="../../public/img/SymBnb.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title font-weight-bold font-italic mt-2">Symbnb</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModalePanterest" class="btn" v-b-modal.modal-tall6>
            <div class="btn card" style="width: 18rem;">
              <img class="card-img-top" src="../../public/img/panterest1.png" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title font-weight-bold font-italic mt-2">Panterest</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleUnbee" class="btn" v-b-modal.modal-tall3>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="../../public/img/unbee.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title font-weight-bold font-italic mt-2">Unbee</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleVeloCity" class="btn" v-b-modal.modal-tall4>
            <div class="btn card" style="width: 18rem;">
              <img class="card-img-top" src="../../public/img/velo-city.png" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title font-weight-bold font-italic mt-2">Vélo City</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleApiMeteo" class="btn" v-b-modal.modal-tall5>
            <div class="btn card" style="width: 18rem;">
              <img class="card-img-top" src="../../public/img/api-meteo.png" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title font-weight-bold font-italic mt-2">App Météo</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center animate__animated animate__zoomIn mb-5">
          <div v-on:click="toggleModaleStuliday" class="btn card" style="width: 18rem;" v-b-modal.modal-tall1>
            <img class="card-img-top" src="../../public/img/stuliday.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title font-weight-bold font-italic mt-2">Stuliday</h5>
            </div>
          </div>
        </div>
      </div>
        <unbeemodale v-bind:reveleunbee="reveleunbee" v-bind:toggleModaleUnbee="toggleModaleUnbee"></unbeemodale>
        <symbnbmodale v-bind:revelesymbnb="revelesymbnb" v-bind:toggleModaleSymbnb="toggleModaleSymbnb"></symbnbmodale>
        <velocitymodale v-bind:revelevelocity="revelevelocity" v-bind:toggleModaleVeloCity="toggleModaleVeloCity"></velocitymodale>
        <apimeteomodale v-bind:reveleapimeteo="reveleapimeteo" v-bind:toggleModaleApiMeteo="toggleModaleApiMeteo"></apimeteomodale>
        <panterestmodale v-bind:revelepanterest="revelepanterest" v-bind:toggleModalePanterest="toggleModalePanterest"></panterestmodale>
        <stulidaymodale v-bind:revelestuliday="revelestuliday" v-bind:toggleModaleStuliday="toggleModaleStuliday"></stulidaymodale>
        <galerierivamodale v-bind:revelegalerieriva="revelegalerieriva" v-bind:toggleModaleGalerieRiva="toggleModaleGalerieRiva"></galerierivamodale>
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
    }
  },
  methods: {
    toggleModaleUnbee: function(){
      this.reveleunbee = !this.reveleunbee
    },
    toggleModaleSymbnb: function(){
      this.revelesymbnb = !this.revelesymbnb
    },
    toggleModaleGalerieRiva: function(){
      this.revelegalerieriva = !this.revelegalerieriva
    },
    toggleModaleVeloCity: function(){
      this.revelevelocity = !this.revelevelocity
    },
    toggleModaleApiMeteo: function(){
      this.reveleapimeteo = !this.reveleapimeteo
    },
    toggleModalePanterest: function(){
      this.revelepanterest = !this.revelepanterest
    },
    toggleModaleStuliday: function(){
      this.revelestuliday = !this.revelestuliday
    }
  },
  components: {
    'unbeemodale' : ModaleUnbee,
    'symbnbmodale' : ModaleSymbnb,
    'galerierivamodale' : ModaleGalerieRiva,
    'velocitymodale' : ModaleVeloCity,
    'stulidaymodale' : ModaleStuliday,
    'apimeteomodale' : ModaleApiMeteo,
    'panterestmodale' : ModalePanterest
  }
}
</script>

<style scoped lang="scss">
@import '../assets/portfolio.scss';
@import '../assets/modals.scss';

</style>


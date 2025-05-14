<template>
    <div class="container-fluid fixed-top-position smooth pt-150">
        <div class="row">
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn flex d-flex">
            <a href="#section" class="btn" v-on:click="toggleOngAutomate">
                <div class="progress blue2">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                    <div class="progress-value">2 ans</div>
                </div>
                <p class="mt-3 h5 mb-5">Automatisation </p>
                <img id="scrool-anim" src="img/picto/arrow48.png" class="arrowImg4" />
            </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn flex d-flex">
            <a href="#section" class="btn" v-on:click="toggleOngSecurity">
                <div class="progress red">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                    <div class="progress-value">2 ans</div>
                </div>
                <p class="mt-3 h5 mb-5">Sécurité</p>
                <img id="scrool-anim" src="img/picto/arrow48.png" class="arrowImg5" />
            </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn flex d-flex">
            <a href="#section" class="btn" v-on:click="toggleOngCloud">
                <div class="progress grey">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                    <div class="progress-value">2 ans</div>
                </div>
                <p class="mt-3 h5 mb-5">Cloud</p>
                <img id="scrool-anim" src="img/picto/arrow48.png" class="arrowImg6" />
            </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn flex d-flex">
            <a href="#section" class="btn" v-on:click="toggleOngNetwork">
                <div class="progress green">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                    <div class="progress-value">2 ans</div>
                </div>
                <p class="mt-3 h5 mb-5">Réseau</p>
                <img id="scrool-anim" src="img/picto/arrow48.png" class="arrowImg7" />
            </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn flex d-flex">
                <a href="#section" class="btn" v-on:click="toggleOngSoftwareDesign">
                <div class="progress purple">
                    <span class="progress-left">
                        <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">4 ans</div>
                </div>
                    <p class="mt-3 h5 mb-5">Conception</p>
                    <img src="img/picto/arrow48.png" class="arrowImg9"/>
            </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn flex d-flex">
            <a href="#section" class="btn" v-on:click="toggleOngBdd">
                <div class="progress rose">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                    <div class="progress-value">7 ans</div>
                </div>
                <p class="mt-3 h5 mb-5">Base de données</p>
                <img id="scrool-anim" src="img/picto/arrow48.png" class="arrowImg8" />
            </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn flex d-flex">
                <a href="#section" class="btn" v-on:click="toggleOngJs">
                <div class="progress yellow">
                    <span class="progress-left">
                        <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">7 ans</div>
                </div>
                    <p class="mt-3 h5 mb-5">JavaScript</p>
                    <img src="img/picto/arrow48.png" class="arrowImg3"/>
            </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn flex d-flex">
                <a href="#section" class="btn" v-on:click="toggleOngPhp">
                <div class="progress violet">
                    <span class="progress-left">
                        <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">7 ans</div>
                </div>
                    <p class="mt-3 h5 mb-5">PHP</p>
                    <img src="img/picto/arrow48.png" class="arrowImg4"/>
            </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn flex d-flex">
            <a href="#section" class="btn" v-on:click="toggleOngCss">
                <div class="progress orange">
                    <span class="progress-left">
                    <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">7 ans</div>
                </div>
                    <p class="mt-3 h5 mb-5">CSS</p>
                    <img src="img/picto/arrow48.png" class="arrowImg2"/>
                    </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn flex d-flex">
            <a href="#section" class="btn" v-on:click="toggleOngHtml">
                <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                    <div class="progress-value">7 ans</div>
                </div>
                <p class="mt-3 h5 mb-5">HTML et autres</p>
                <img id="scrool-anim" src="img/picto/arrow48.png" class="arrowImg1" />
            </a>
            </div>
            <div class="container-fluid" v-if="togglePhp">
            <php></php>
            </div>
            <div class="container-fluid"  v-if="toggleJs">
            <javascript></javascript>
            </div>
            <div class="container-fluid"  v-if="toggleHtml">
            <htmldisplay></htmldisplay>
            </div>
            <div class="container-fluid"  v-if="toggleBdd">
            <bdd></bdd>
            </div>
            <div class="container-fluid"  v-if="toggleCss">
            <css></css>
            </div>
            <div class="container-fluid" v-if="toggleAutomate">
            <automate></automate>
            </div>
            <div class="container-fluid"  v-if="toggleSecurity">
            <security></security>
            </div>
            <div class="container-fluid"  v-if="toggleCloud">
            <cloud></cloud>
            </div>
            <div class="container-fluid"  v-if="toggleNetwork">
            <network></network>
            </div>
            <div class="container-fluid"  v-if="toggleSoftwareDesign">
            <softwaredesign></softwaredesign>
            </div>
        </div>
    </div>
</template>

<script>
import Php from './skills/Php'
import JavaScript from './skills/JavaScript'
import Html from './skills/Html'
import Css from './skills/Css'
import Automate from './skills/Automate'
import Security from './skills/Security'
import Cloud from './skills/Cloud'
import Network from './skills/Network'
import Bdd from './skills/Bdd'
import SoftwareDesign from './skills/SoftwareDesign'



export default {
  name: "Competences",
  data(){
      return {
        toggleJs: false,
        togglePhp: false,
        toggleHtml: false,
        toggleBdd: false,
        toggleCss: false,
        toggleAutomate : false,
        toggleSecurity : false,
        toggleCloud : false,
        toggleNetwork : false,
        toggleSoftwareDesign : false
        // element : document.getElementByTagName("html"),
        // html : element.classList.add(".smooth")
      
      }
  },
  methods: {
      
      toggleOngJs: function (){
          this.toggleJs = true
          this.togglePhp = false
          this.toggleHtml = false
          this.toggleSoftwareDesign = false
          this.toggleBdd = false
          this.toggleCss = false
          this.toggleAutomate = false
          this.toggleSecurity = false
          this.toggleCloud = false
          this.toggleNetwork = false
      },
      toggleOngPhp: function (){
          this.toggleJs = false
          this.togglePhp = true
          this.toggleHtml = false
          this.toggleSoftwareDesign = false
          this.toggleBdd = false
          this.toggleCss = false
          this.toggleAutomate = false
          this.toggleSecurity = false
          this.toggleCloud = false
          this.toggleNetwork = false
      },
      toggleOngHtml: function (){
          this.toggleJs = false
          this.togglePhp = false
          this.toggleHtml = true
          this.toggleSoftwareDesign = false
          this.toggleBdd = false
          this.toggleCss = false
          this.toggleAutomate = false
          this.toggleSecurity = false
          this.toggleCloud = false
          this.toggleNetwork = false
      },
      toggleOngSoftwareDesign : function (){
          this.toggleJs = false
          this.togglePhp = false
          this.toggleHtml = false
          this.toggleSoftwareDesign = true
          this.toggleBdd = false
          this.toggleCss = false
          this.toggleAutomate = false
          this.toggleSecurity = false
          this.toggleCloud = false
          this.toggleNetwork = false
      },
      toggleOngBdd: function (){
          this.toggleJs = false
          this.togglePhp = false
          this.toggleHtml = false
          this.toggleSoftwareDesign = false
          this.toggleBdd = true
          this.toggleCss = false
          this.toggleAutomate = false
          this.toggleSecurity = false
          this.toggleCloud = false
          this.toggleNetwork = false
      },
      toggleOngCss: function (){
          this.toggleJs = false
          this.togglePhp = false
          this.toggleHtml = false
          this.toggleSoftwareDesign = false
          this.toggleBdd = false
          this.toggleCss = true
          this.toggleAutomate = false
          this.toggleSecurity = false
          this.toggleCloud = false
          this.toggleNetwork = false
      },
      toggleOngAutomate: function (){
          this.toggleJs = false
          this.togglePhp = false
          this.toggleHtml = false
          this.toggleSoftwareDesign = false
          this.toggleBdd = false
          this.toggleCss = false
          this.toggleAutomate = true
          this.toggleSecurity = false
          this.toggleCloud = false
          this.toggleNetwork = false
      },
      toggleOngSecurity: function (){
          this.toggleJs = false
          this.togglePhp = false
          this.toggleHtml = false
          this.toggleSoftwareDesign = false
          this.toggleBdd = false
          this.toggleCss = false
          this.toggleAutomate = false
          this.toggleSecurity = true
          this.toggleCloud = false
          this.toggleNetwork = false
      },
      toggleOngCloud: function (){
          this.toggleJs = false
          this.togglePhp = false
          this.toggleHtml = false
          this.toggleSoftwareDesign = false
          this.toggleBdd = false
          this.toggleCss = false
          this.toggleAutomate = false
          this.toggleSecurity = false
          this.toggleCloud = true
          this.toggleNetwork = false
      },
      toggleOngNetwork: function (){
          this.toggleJs = false
          this.togglePhp = false
          this.toggleHtml = false
          this.toggleSoftwareDesign = false
          this.toggleBdd = false
          this.toggleCss = false
          this.toggleAutomate = false
          this.toggleSecurity = false
          this.toggleCloud = false
          this.toggleNetwork = true
      }
  },
  components: {
      'php' : Php,
      'javascript' : JavaScript,
      'htmldisplay' : Html,
      'bdd' : Bdd,
      'css' : Css,
      'automate' : Automate,
      'security' : Security,
      'cloud' : Cloud,
      'network' : Network,
      'softwaredesign' : SoftwareDesign
  },
};


</script>

<style scoped lang="scss">
@import '../assets/competences.scss';
</style>

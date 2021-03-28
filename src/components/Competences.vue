<template>
    <div class="container-fluid fixed-top-position smooth">
           <h1 class="mb-5">Compétences</h1>
        <div class="row">
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn">
            <a href="#section" class="btn" v-on:click="toggleOngHtml">
                <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                    <div class="progress-value">3 ans</div>
                </div>
                <p class="mt-3 h5 mb-5">HTML et autres</p>
                <img id="scrool-anim" src="img/arrow48.png" class="arrowImg1" />
            </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn">
            <a href="#section" class="btn" v-on:click="toggleOngCss">
                <div class="progress orange">
                    <span class="progress-left">
                    <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">3 ans</div>
                </div>
                    <p class="mt-3 h5 mb-5">CSS</p>
                    <img src="img/arrow48.png" class="arrowImg2"/>
                    </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn">
                <a href="#section" class="btn" v-on:click="toggleOngJs">
                <div class="progress yellow">
                    <span class="progress-left">
                        <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">3 ans</div>
                </div>
                    <p class="mt-3 h5 mb-5">JavaScript</p>
                    <img src="img/arrow48.png" class="arrowImg3"/>
            </a>
            </div>
            <div class="col-md-3 col-sm-6 mt-5 mb-5 animate__animated animate__zoomIn">
                <a href="#section" class="btn" v-on:click="toggleOngPhp">
                <div class="progress violet">
                    <span class="progress-left">
                        <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">3 ans</div>
                </div>
                    <p class="mt-3 h5 mb-5">PHP</p>
                    <img src="img/arrow48.png" class="arrowImg4"/>
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
            <div class="container-fluid"  v-if="toggleCss">
            <css></css>
            </div>
        </div>
    </div>
</template>

<script>
import Php from './skills/Php'
import JavaScript from './skills/JavaScript'
import Html from './skills/Html'
import Css from './skills/Css'



export default {
  name: "Competences",
  data(){
      return {
        toggleJs: false,
        togglePhp: false,
        toggleHtml: false,
        toggleCss: false,
        // element : document.getElementByTagName("html"),
        // html : element.classList.add(".smooth")
      
      }
  },
  methods: {
      
      toggleOngJs: function (){
          this.toggleJs = true
          this.togglePhp = false
          this.toggleHtml = false
          this.toggleCss = false
      },
      toggleOngPhp: function (){
          this.toggleJs = false
          this.togglePhp = true
          this.toggleHtml = false
          this.toggleCss = false
      },
      toggleOngHtml: function (){
          this.toggleJs = false
          this.togglePhp = false
          this.toggleHtml = true
          this.toggleCss = false
      },
      toggleOngCss: function (){
          this.toggleJs = false
          this.togglePhp = false
          this.toggleHtml = false
          this.toggleCss = true
      }
  },
  components: {
      'php' : Php,
      'javascript' : JavaScript,
      'htmldisplay' : Html,
      'css' : Css
  },
};


</script>

<style scoped lang="scss">
@import '../assets/competences.scss';
</style>

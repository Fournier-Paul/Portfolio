<template>
    <div class="container">
        <div class="container-fluid">
            <div class="row">
                <div class="navbar navbar-expand-lg fixed-top d-flex justify-content-center"> 
                    <div v-on:scroll="handleScrollFixed" id="posFixed" class="col-xl-12">
                        <h1 class ="d-flex justify-content-center text-white font-weight-bold">Paul Fournier</h1>  
                            <div class="row"> 
                                <div class="col-md-12">
                                    <p class="line-1 font-italic anim-typewriter text-white mt-2">Développeur Web {{ typeValue }}<span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span></p>                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <b-navbar v-on:scroll="handleScroll" id="myHeader" class="navbar navbar-expand-lg fixed-top d-flex justify-content-center customNav">
                <div class="container-fluid">
                    <div  class="col-xl-12">
                        <button id="menu-button" class="menu-button mt-1 mb-1" v-on:click="active = !active"><img src="../../public/img/menu1.svg" class="menu-svg" alt=""></button>
                    <ul v-if="active" class="menu-list mt-3 ">
                        <li class="inline-pad hvr-underline-from-center nav-link"><router-link to="/a-propos" class="moove-margin">à propos</router-link></li><span class="pr-5"></span>
                        <li class="inline-pad hvr-underline-from-center nav-link"><router-link to="/services" class="moove-margin">Services</router-link></li><span class="pr-5"></span>
                        <li class="inline-pad hvr-underline-from-center nav-link"><router-link to="/portfolio" class="moove-margin">Portfolio</router-link></li><span class="pr-5"></span>
                        <li class="inline-pad hvr-underline-from-center nav-link"><router-link to="/competences" class="moove-margin">Compétences</router-link></li><span class="pr-5"></span>
                        <li class="inline-pad hvr-underline-from-center nav-link"><router-link to="/experiences" class="moove-margin">expériences</router-link></li><span class="pr-5"></span>
                        <li class="inline-pad hvr-underline-from-center nav-link"><router-link to="/diplomes" class="moove-margin">diplômes</router-link></li><span class="pr-5"></span>
                        <li class="inline-pad hvr-underline-from-center nav-link"><router-link to="/interets" class="moove-margin">intérêts</router-link></li><span class="pr-5"></span>
                        <li class="inline-pad hvr-underline-from-center nav-link"><router-link to="/contacts" class="moove-margin">contacts</router-link></li><span class="pr-5"></span>
                    </ul>
                </div>
            </div>
        </b-navbar>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    name: "Header",
    data(){
        return {
            active: true,
            typeValue: '',
            typeStatus: false,
            typeArray: ['Full-Stack Junior', 'Symfony / Vue.js', 'PHP / JS', ''],
            typingSpeed: 200,
            erasingSpeed: 100,
            newTextDelay: 2000,
            typeArrayIndex: 0,
            charIndex: 0,
        }
    },  
    created () {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.handleScrollFixed);
        window.addEventListener('resize', this.screenWidth);
        if (screen.width <= 1081){
            this.active = !this.active
        }
        setTimeout(this.typeText, this.newTextDelay + 200);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.handleScrollFixed);
        window.removeEventListener('resize', this.screenWidth);
    },
    methods: {
        typeText() {
            if (this.typeArrayIndex < 3){
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
            
            if(!this.typeStatus)
            this.typeStatus = true;

            this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
            this.charIndex += 1;

            setTimeout(this.typeText, this.typingSpeed);
        }
        else {
            this.typeStatus = false;
            setTimeout(this.eraseText, this.newTextDelay);
        }}
      },
        eraseText() {
            if(this.charIndex > 0) {
                if(!this.typeStatus)
                    this.typeStatus = true;
                    this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                    this.charIndex -= 1;
                    setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
            this.typeStatus = false;
            this.typeArrayIndex += 1;
            if(this.typeArrayIndex >= this.typeArray.length)
                this.typeArrayIndex = 0;
            setTimeout(this.typeText, this.typingSpeed + 1000);
        }
    },
        handleScroll () {
            if(window.scrollY > 300) {
                var element = document.getElementById("myHeader");
                element.classList.add("custom-position");
            } 
            else if (window.scrollY < 300){
                var elements = document.getElementById("myHeader");
                elements.classList.remove("custom-position");
            }
        },
        handleScrollFixed () {
            if(window.scrollY > 190) {
                var element1 = document.getElementById("posFixed");
                element1.classList.remove("custom-position-nav");
            } 
            else if(window.scrollY < 190) {
                var elements1 = document.getElementById("posFixed");
                elements1.classList.add("custom-position-nav");
            } 
        } 
    }
}  
</script>
<style scoped lang="scss">
    @import '../assets/header.scss';
 
</style>

<template>
  <div class="container-fluid fixed-top-position">
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center align-items-center flex-column animate__animated animate__zoomIn mt-sm-0 mt-5">

<img src="../../public/img/1548689240518.jpg" class="rounded-circle mt-5 mt-10 mb-5" alt="">

      </div>
      <div class="col-md-6 animate__animated animate__zoomIn">
        <p class="text-center text-sm-left font-italic h5 mt-5">Développeur / DevOps</p>
        <p class="text-center text-sm-left h5 mt-5">
          Création de site web, d'infrastrucutre informatique, d'automatisation et de mise en place de système de sécurité.</p>
            <p class="text-center text-sm-left h5 mt-3">Je souhaite intégrer une entreprise dans laquelle je pourrais évoluer, mettre en pratique mes connaissances et progresser avec celle des autres. 
                    </p>
        <div class="text-center text-sm-left mt-5">
        <a href="img/CV-Paul-Fournier-Developpeur-Web.pdf" class="btn btn-lg btn-light text-left font-weight-bold rounded p-3 mb-5" download>Consulter mon CV</a> 
        <router-link to="/contacts" class="btn btn-lg btn-primary text-left font-weight-bold rounded p-3 ml-2 mb-5">Me contacter</router-link>
      </div>
      <div class="offset-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "A-propos",
  props: {},
};
</script>

<style scoped lang="scss">
@import '../assets/a-propos.scss';
</style>

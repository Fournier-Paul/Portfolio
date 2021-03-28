<template>
  <div class="container-fluid fixed-top-position">
    <div class="row">
      <div class="col-md-4 animate__animated animate__zoomIn">

<img src="../../public/img/1548689240518.jpg" class="rounded-circle mt-5 mb-5" alt="">

      </div>
      <div class="col-md-6 animate__animated animate__zoomIn">
        <h2 class="text-left mt-5 h1"><span class="mb-5">À Propos</span></h2>
        <p class="text-left font-italic h5 mt-5">Développeur web et web mobile</p>
        <p class="text-left h5 mt-5">
          Étudiant, stagiaire, créateur d'un site e-commerce puis autodidacte passionné par le développement web.</p>
          <p class="text-left h5 mt-3">De la conception d’un site web à l’optimisation SEO en passant par la sécurisation, 
          j’ai su construire mon expérience à travers mes différentes créations.
          Ayant l'envie perpétuelle de valoriser mon parcours professionnel à travers des projets
          enrichissants.</p>
            <p class="text-left h5 mt-3">Je souhaite intégrer une entreprise dans laquelle je pourrais évoluer, mettre en pratique mes connaissances et progresser avec celle des autres. 
                    </p>
        <div class="text-left mt-5">
        <a href="img/CV-Paul-Fournier-Developpeur-Web.pdf" class="btn btn-lg btn-light text-left font-weight-bold rounded p-3 mb-5" download>Consulter mon CV</a> 
        <router-link to="/contacts" class="btn btn-lg btn-primary text-left font-weight-bold rounded p-3 ml-2 mb-5">Me contacter</router-link>
      </div>
      <div class="offset-2"></div>
      </div>
    </div>
    <div class="col-md-12">

      <a href="https://www.linkedin.com/in/paul-fournier-dev/" target="_blank" > <img src="img/linkedin.png" class="float-right mr-5 mb-5" alt=""></a>
      <a href="https://github.com/Paul1465" target="_blank" ><img src="img/github.png" class="float-right mr-3 mb-5" alt=""></a>
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

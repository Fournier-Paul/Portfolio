<template>
    <div class="container-fluid fixed-top-position">
    <h1 class="mb-5">Diplômes</h1>
   
        <div class="row">
            
            <div class="col-md-6 col-xs-12 mt-5">
                <div class="card hover-certif animate__animated animate__zoomIn ml-5">
                    <div class="card-body"> 
                    <h5 class="card-title">Développeur Front-End</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Talis-business-school 05/2019</h6>
                    <p class="card-text">Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité.</p>
                    </div>
                </div>
            </div>
           
            <div class="col-md-6 col-xs-12 mt-5">
                <div class="card hover-certif animate__animated animate__zoomIn mr-5">
                    <div class="card-body">
                    <h5 class="card-title">Développeur Back-End</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Talis-business-school 08/2019</h6>
                    <p class="card-text">Développer la partie back-end d’une application web ou web mobile en intégrant les recommandations de sécurité.</p>
                    </div>
                </div>
            </div>
               <div class="col-12 d-flex justify-content-center mt-5 mb-5">
                <div class="card hover-certif animate__animated animate__zoomIn">
                    <div class="card-body">
                    <h5 class="card-title">Développeur Front & Back-End</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Talis-business-school 08/2019</h6>
                    <p class="card-text">Titre professionnel Développeur web et web mobile.</p>
                    </div>
                </div>
            
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Diplomes',
    methods: {
    
    }
}
</script>


<style scoped lang="scss">
@import '../assets/diplomes.scss';
</style>
<template>
    <div class="container-fluid fixed-top-position"> 
    <h1 class="mb-5">Intérêts</h1>
        <div class="row">
            <div class="col-xl-4 col-md-12 mt-5 mb-5 animate__animated animate__zoomIn">
                <div class="content"> 
                    <a href="#">
                        <div class="content-overlay"></div> <img class="content-image" src="img/code.jpg">
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Développement</h3>
                            <p class="content-text"><img src="img/gear.png" alt=""></p>
                        </div>
                    </a> 
                </div>
            </div>
            <div class="col-xl-4 col-md-12 mt-5 mb-5 animate__animated animate__zoomIn">
                <div class="content"> <a href="#">
                        <div class="content-overlay"></div> <img class="content-image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557246502/test_zoom.jpg">
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Randonnée</h3>
                            <p class="content-text"><img src="img/adventurer.png" alt=""></p>
                        </div>
                    </a> 
                </div>
            </div>
            <div class="col-xl-4 col-md-12 mt-5 mb-5 animate__animated animate__zoomIn">
                <div class="content"> <a href="#">
                        <div class="content-overlay"></div> <img class="content-image" src="img/movie-918655_640.jpg" style="height:225px">
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Cinéma</h3>
                            <p class="content-text"><img src="img/clapperboard.png" alt=""></p>
                        </div>
                    </a> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Interets',
   
}
</script>

<style scoped lang="scss">
@import '../assets/interets.scss';
</style>
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
  name: 'InfraHome',
  components: {
    LightBox,
  },
  data() {
    return {
      media: [
        // Analyse & Conception
        { src: 'img/infra-local/Blank diagram (1).png', thumb: 'img/infra-local/Blank diagram (2).png', caption: 'Infrastructure locale' },
        { src: 'img/infra-local/Blank diagram (2).png', thumb: 'img/infra-local/Blank diagram (2).png', caption: 'Suite Infrastructure locale (containers)' },
        { src: 'img/infra-local/PXL_20250502_130429672~2(1).jpg', thumb: 'img/infra-local/PXL_20250502_130429672~2(1).jpg', caption: 'Début de l\'infrastructure locale' },
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

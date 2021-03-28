<template>
  <div class="container">
    <div class="row">
      <LightBox :media="media"></LightBox>
    </div>
  </div>
</template>

<script>
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
import LightBox from 'vue-image-lightbox'
  export default {
    name : 'Unbee',
        components: {
          LightBox,
  }, 
  data(){
  return { 
  media : [
  { // For image

    src: 'img/unbee/unbee-0.png',
    thumb: 'img/unbee/unbee-0.png',
  
  },
   { // For video
    thumb: 'img/unbee/unbee-1.png',
    sources: [
      {
        src: 'img/unbee/Unbee-gif.mp4',
        type: 'video/mp4'
      }
    ],
    type: "video",
    width: 800, // required
    height: 600, // required
    autoplay: true //Optional to autoplay video when lightbox opens
  },
  { // For image

    src: 'img/unbee/unbee-2.png',
    thumb: 'img/unbee/unbee-2.png',
  
  },
  { // For image

    src: 'img/unbee/unbee-3.png',
    thumb: 'img/unbee/unbee-3.png',
  
  },
  { // For image

    src: 'img/unbee/unbee-4.png',
    thumb: 'img/unbee/unbee-4.png',
  
  },
  { // For image

    src: 'img/unbee/unbee-5.png',
    thumb: 'img/unbee/unbee-5.png',
  
  },
  { // For image

    src: 'img/unbee/unbee-6.png',
    thumb: 'img/unbee/unbee-6.png',
  
  },
  { // For image

    src: 'img/unbee/unbee-7.png',
    thumb: 'img/unbee/unbee-7.png',
  
  },
  { // For image

    src: 'img/unbee/unbee-8.png',
    thumb: 'img/unbee/unbee-8.png',
  
  },
  { // For image

    src: 'img/unbee/unbee-9.png',
    thumb: 'img/unbee/unbee-9.png',
  
  },
  { // For image

    src: 'img/unbee/unbee-10.png',
    thumb: 'img/unbee/unbee-10.png',
  
  },
     { // For video
    thumb: 'img/unbee/unbee-5.png',
    sources: [
      {
        src: 'img/unbee/Unbee-diapo.mp4',
        type: 'video/mp4'
      }
    ],
    type: "video",
    width: 800, // required
    height: 600, // required
    autoplay: true //Optional to autoplay video when lightbox opens
  },
  
]
}
}
    
  }
</script>
<style>

</style>
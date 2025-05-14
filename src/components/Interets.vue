<template>
    <div class="container-fluid fixed-top-position pt-150 mb-4">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-md-6 mt-5 mb-5" v-for="(interet, index) in interets" :key="index">
          <div class="interet-card">
            <a href="#">
              <img class="interet-image" :src="interet.image" :alt="interet.title" />
              <div class="interet-overlay"></div>
              <div class="interet-details">
                <h3 class="interet-title">{{ interet.title }}</h3>
                <p class="interet-icon">
                  <img :src="interet.icon" :alt="'Icone ' + interet.title" />
                </p>
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
    data() {
      return {
        interets: [
          {
            title: 'Développement',
            image: 'img/interests/code.jpg',
            icon: 'img/picto/gear.png'
          },
          {
            title: 'Randonnée',
            image: 'img/interests/test_zoom.jpg',
            icon: 'img/picto/adventurer.png'
          },
          {
            title: 'Cinéma',
            image: 'img/interests/movie-918655_640.jpg',
            icon: 'img/picto/clapperboard.png'
          }
        ]
      };
    }
  };
  </script>
  
  <style lang="scss">
.interet-card {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 225px;
  margin: auto;
  overflow: hidden;
  border-radius: 8px;

  a {
    display: block;
    position: relative;
    height: 100%;
  }

  .interet-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 8px;
    transition: transform 0.4s ease;
    z-index: 0;
  }

  .interet-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 8px;
    z-index: 1;
  }

  .interet-details {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    z-index: 2;

    .interet-title {
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-weight: 500;
      margin-bottom: 0.5em;
    }

    .interet-icon img {
      width: 24px;
      height: 24px;
    }
  }

  &:hover .interet-overlay {
    opacity: 1;
  }

  &:hover .interet-details {
    opacity: 1;
    top: 50%;
  }

  &:hover .interet-image {
    transform: scale(1.05);
  }
}

/* ✅ Adaptation mobile */
@media (max-width: 768px) {
  .interet-card .interet-overlay {
    opacity: 1 !important;
    background: rgba(0, 0, 0, 0.5) !important;
  }

  .interet-card .interet-details {
    opacity: 1 !important;
    top: 50% !important;
  }

  .interet-card .interet-image {
    transform: none !important;
  }
}


  </style>
  
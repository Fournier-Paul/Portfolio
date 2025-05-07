<template>
    <div class="container fixed-top-position">
      <b-modal id="modal-tall15"  title="Generateur" class="text-center text-white" hide-footer>
      <h5 class="my-4 text-decoration-underline">Détails :</h5>
      <p class="font-italic">
        Generateur de signature mail "from-scratch"
      </p>
        <ul class="list-group">
          <li class="ml-4 mb-3 list-item">Selection de 5 templates HTML</li>
        </ul>
        <h5 class="my-4 text-decoration-underline">Technologies : </h5>
        <span class="badge bg-dark text-white mr-2 mb-3">PHP</span>
        <span class="badge bg-warning text-dark mr-2 mb-3">JavaScript</span>
        <span class="badge bg-primary text-white mr-2 mb-3">TailwindCSS</span>
        <hr>
        <p class="text-muted mt-4 small">
    *Certaines technologies sensibles ont été volontairement généralisées pour des raisons de sécurité.
  </p>
    </b-modal>
    </div>
  </template> 
  
  <script>
  
  
  export default {
    name: "ModaleSignatureMail",
    props: ["revelesignaturemail", "toggleModaleSignatureMail"], 
  
  }
  </script>
  
  <style lang="scss">
  @import '../../assets/modals.scss';
  </style>
  
  
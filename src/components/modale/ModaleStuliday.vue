<template>
  <div class="container fixed-top-position">
    <b-modal id="modal-tall1"  title="Stuliday" class="text-center text-white" hide-footer>
    <h5 class="my-4 text-decoration-underline">Détails :</h5>
    <p class="font-italic">
      Site Front-end de réservation de logement à la montagne<br>(premier site)
    </p>
      <ul class="list-group">
        <li class="ml-4 mb-3 list-item">Base de données</li>
      </ul>
      <h5 class="my-4 text-decoration-underline">Téchnologies : </h5>
      <span class="badge bg-warning text-dark mr-2 mb-3">JavaScript</span>
      <span class="badge bg-warning text-dark mr-2 mb-3">Jquery</span>
      <span class="badge bg-dark text-white mr-2 mb-3">PHP</span>
      <span class="badge bg-pink text-dark mr-2 mb-3">MySql</span>
      <span class="badge bg-primary text-white mr-2 mb-3">Bootstrap</span>
      <span class="badge bg-primary text-white mr-2 mb-3">CSS</span>
      <span class="badge bg-orange text-dark mr-2 mb-3">HTML</span>
  </b-modal>
  </div>
</template> 




<script>


export default {
  name: "ModaleStuliday",
  props: ["revelestuliday", "toggleModaleStuliday"], 
 data: function () {
    return {
      modalOk : false
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/modals.scss';
</style>

<template>
  <div class="container-fluid fixed-top-position">
    <form class="contact-form" @submit.prevent="sendEmail">
      <div class="row">
        <div class="col-12">
          <h1 class="mb-5">Contacts</h1>
          <div v-if="alertsuccess" class="alert alert-success">Votre message à bien été envoyer</div>
          </div>
            <div class="col-md-5 animate__animated animate__zoomIn mt-4">
              <h4 class="ml-5 text-left">Informations de contact</h4>
              <h4 class="h5 mt-5 ml-5 text-left">Adresse e-mail</h4>
              <p class="text-left ml-5">paul.fournier.3314@gmail.com</p>
              <h4 class="h5 mt-5 ml-5 text-left">Téléphone</h4>
              <p class="text-left ml-5">06 20 83 15 42</p>
            </div>
            <div class="col-md-3 animate__animated animate__zoomIn mt-3">
                <div class="form-group">
                  <input type="text" v-model="name" name="name" class="form-control" placeholder="Votre nom *" required="required" data-error="Votre nom est requis">
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <input type="email" v-model="email" name="email" class="form-control" placeholder="Votre e-mail *" required="required" data-error="Votre email est requis">
                <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <input type="text"  v-model="objet" name="objet" class="form-control" placeholder="L'objet du message *" required="required" data-error="L'objet du message est requis">
                  <div class="help-block with-errors"></div>
                </div>
                  <div class="form-group">
                  <textarea type="text" v-model="message" name="message" class="form-control" placeholder="Votre message *" rows="4" required="required" data-error="Le champ est vide"></textarea>
                  <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-11 mt-3 animate__animated animate__zoomIn">
                <input type="submit" class="btn btn-success btn-send btn-lg font-weight-bold rounded float-right p-3 mb-5" value="Envoyer">
              </div>
            </div>
          </form>
      </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contacts',
  data() {
    return {
      name: '',
      email: '',
      objet : '',
      message: '',
      alertsuccess : false
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_e4xtstt','template_jqxt1t3', e.target,
        'user_3NvPCz8AziOnemyhYC7Pc', {
          name: this.name,
          email: this.email,
          objet : this.objet ,
          message: this.message,
          alertsuccess: this.alertsuccess
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ' '
      this.email = ' '
      this.objet  = ' '
      this.message = ' '
      this.alertsuccess = true
   
      
    },
    
  }
}
</script>

<style scoped lang="scss">
@import '../assets/contacts.scss';
</style>
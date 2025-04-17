<template>
  <div class="container-fluid fixed-top-position pt-150">
    <form class="contact-form" @submit.prevent="sendEmail">
      <div class="row px-3">

        <div class="col-md-5 animate__animated animate__zoomIn mt-4">
          <h4 class="text-left">Informations de contact</h4>
          <h5 class="mt-5 text-left">Adresse e-mail</h5>
          <p class="text-left">contact@paul-fournier.dev</p>
          <h5 class="mt-5 text-left">Téléphone</h5>
          <p class="text-left">06 20 83 15 42</p>
        </div>

        <div class="col-md-6 offset-md-1 animate__animated animate__zoomIn mt-3">
          <div class="form-group">
            <input type="text" v-model="name" class="form-control" placeholder="Votre nom *" required>
          </div>
          <div class="form-group">
            <input type="email" v-model="email" class="form-control" placeholder="Votre e-mail *" required>
          </div>
          <div class="form-group">
            <input type="text" v-model="objet" class="form-control" placeholder="L'objet du message *" required>
          </div>
          <div class="form-group">
            <textarea v-model="message" class="form-control" placeholder="Votre message *" rows="4" required></textarea>
          </div>

          <div class="text-right">
            <input type="submit" class="btn btn-success btn-lg font-weight-bold rounded px-4 py-2 mb-5" value="Envoyer">
          </div>

          <div v-if="alertsuccess" class="alert alert-success mt-3">
            Votre message a bien été envoyé.
          </div>
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
      objet: '',
      message: '',
      alertsuccess: false
    };
  },
  mounted() {
    emailjs.init(process.env.VUE_APP_EMAILJS_PUBLIC_KEY);
  },
  methods: {
    sendEmail() {
      const params = {
        name: this.name,
        email: this.email,
        objet: this.objet,
        message: this.message
      };

      emailjs.send(
        process.env.VUE_APP_EMAILJS_SERVICE_ID,
        process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
        params
      )
      .then(() => {
        this.alertsuccess = true;
        this.name = '';
        this.email = '';
        this.objet = '';
        this.message = '';
      })
      .catch((error) => {
        console.error('Erreur EmailJS :', error);
      });
    }

  }
};

</script>

<style scoped lang="scss">
@import '../assets/contacts.scss';
</style>
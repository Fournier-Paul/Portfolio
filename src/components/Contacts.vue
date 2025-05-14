<template>
  <div class="container-fluid fixed-top-position pt-150">
    <form class="contact-form" @submit.prevent="verifyCaptchaAndSend">
      <div v-if="alertsuccess" class="alert alert-success mt-3 mr-3">
        Votre message a bien été envoyé.
      </div>
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
            <input type="text" v-model="name" class="form-control" placeholder="Votre nom *" maxlength="100" required />
          </div>
          <div class="form-group">
            <input type="email" v-model="email" class="form-control" placeholder="Votre e-mail *" maxlength="100" required />
          </div>
          <div class="form-group">
            <input type="text" v-model="objet" class="form-control" placeholder="L'objet du message *" maxlength="150" required />
          </div>
          <div class="form-group">
            <textarea v-model="message" class="form-control" placeholder="Votre message *" rows="4" maxlength="2000" required></textarea>
          </div>

          <vue-recaptcha
            ref="recaptcha"
            :sitekey="recaptchaSiteKey"
            @verify="onCaptchaVerified"
            @expired="onCaptchaExpired"
          ></vue-recaptcha>

          <div class="text-right">
            <input :disabled="sending" type="submit" class="btn btn-success btn-lg font-weight-bold rounded px-4 py-2 mb-5" value="Envoyer" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'Contacts',
  components: {
    VueRecaptcha
  },
  data() {
  return {
    name: '',
    email: '',
    objet: '',
    message: '',
    alertsuccess: false,
    sending: false,
    recaptchaToken: null,
    recaptchaSiteKey: process.env.VUE_APP_RECAPTCHA_SITE_KEY
  };
},
  mounted() {
    const savedData = JSON.parse(localStorage.getItem('contactForm'));
    if (savedData) {
      this.name = savedData.name || '';
      this.email = savedData.email || '';
      this.objet = savedData.objet || '';
      this.message = savedData.message || '';
    }
  },
  watch: {
    name() { this.saveForm(); },
    email() { this.saveForm(); },
    objet() { this.saveForm(); },
    message() { this.saveForm(); }
  },
  methods: {
    saveForm() {
      localStorage.setItem('contactForm', JSON.stringify({
        name: this.name,
        email: this.email,
        objet: this.objet,
        message: this.message
      }));
    },
    onCaptchaVerified(response) {
      this.recaptchaToken = response;
      this.sendEmail();
    },
    onCaptchaExpired() {
      this.recaptchaToken = null;
    },
    verifyCaptchaAndSend() {
      if (!this.recaptchaToken) {
        this.$refs.recaptcha.execute();
      } else {
        this.sendEmail();
      }
    },
    async sendEmail() {
      if (this.sending) return;
      this.sending = true;

      if (!this.name.trim() || !this.email.trim() || !this.objet.trim() || !this.message.trim()) {
        alert("Tous les champs doivent être remplis correctement.");
        this.sending = false;
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        alert("Adresse e-mail invalide.");
        this.sending = false;
        return;
      }

      if (!this.recaptchaToken) {
        alert("Veuillez valider le reCAPTCHA.");
        this.sending = false;
        return;
      }

      const formData = {
        name: this.name,
        email: this.email,
        objet: this.objet,
        message: this.message,
        recaptcha: this.recaptchaToken
      };

      try {
        const res = await fetch(`${process.env.VUE_APP_API_URL}/send-mail`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (!res.ok) throw new Error('Erreur lors de l’envoi');
        await res.json();

        this.alertsuccess = true;
        this.name = '';
        this.email = '';
        this.objet = '';
        this.message = '';
        this.recaptchaToken = null;
        this.$refs.recaptcha.reset();
        localStorage.removeItem('contactForm');
      } catch (err) {
        console.error('Erreur API:', err);
        alert("Une erreur est survenue lors de l’envoi. Veuillez réessayer.");
      } finally {
        this.sending = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/contacts.scss';
</style>

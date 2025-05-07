<template>
  <div class="container-fluid fixed-top-position pt-150">
    <form class="contact-form" @submit.prevent="sendEmail">
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
            <input type="text" v-model="name" class="form-control" placeholder="Votre nom *" maxlength="100" required>
          </div>
          <div class="form-group">
            <input type="email" v-model="email" class="form-control" placeholder="Votre e-mail *" maxlength="100" required>
          </div>
          <div class="form-group">
            <input type="text" v-model="objet" class="form-control" placeholder="L'objet du message *" maxlength="150" required>
          </div>
          <div class="form-group">
            <textarea v-model="message" class="form-control" placeholder="Votre message *" rows="4" maxlength="2000" required></textarea>
          </div>
          <div class="text-right">
            <input :disabled="sending" type="submit" class="btn btn-success btn-lg font-weight-bold rounded px-4 py-2 mb-5" value="Envoyer">
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      name: '',
      email: '',
      objet: '',
      message: '',
      alertsuccess: false,
      sending: false
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
  name() {
    this.saveForm();
  },
  email() {
    this.saveForm();
  },
  objet() {
    this.saveForm();
  },
  message() {
    this.saveForm();
  }
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
        async sendEmail() {
      if (this.sending) return;
      this.sending = true;

      // ✅ Validation simple
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

      const formData = {
        name: this.name,
        email: this.email,
        objet: this.objet,
        message: this.message
      };

      // ✅ Bloc try/catch pour gérer les erreurs de façon propre
      try {
        const res = await fetch(process.env.VUE_APP_EMAILJS_SERVICE_ID, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (!res.ok) throw new Error('Erreur lors de l’envoi');
        await res.json();

        // ✅ Réinitialiser le formulaire seulement si tout va bien
        this.alertsuccess = true;
        this.name = '';
        this.email = '';
        this.objet = '';
        this.message = '';
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

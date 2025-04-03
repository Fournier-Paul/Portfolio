<template>
  <footer class="footer">
    <div class="container">
      <p>© 2020 - Contenu mis à jour en 2025</p>
      <p class="icons mb-0">
        <a href="https://www.linkedin.com/in/paul-fournier" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/paulfournier" target="_blank" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <router-link to="/contacts"  aria-label="Email">
          <i class="fas fa-envelope"></i>
        </router-link>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #28415b;
  color: #fff;
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.icons a {
  margin: 0 10px;
  color: white;
  font-size: 18px;
  transition: color 0.3s ease;
}

.icons a:hover {
  color: #1da1f2;
}

</style>

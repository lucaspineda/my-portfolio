<template>
  <div class="container">
    <div class="home-section flex-col">
      <h1>Hi! I'm Lucas Pineda.
        <br>
        I'm a Front End Developer.
      </h1>
      <div class="home-section__body-content">
        <p>
          I’m a Front End Developer based in São Paulo and I earned a bachelor's degree in Computer Science.
          My skills are all related to the Front End Spectrum, such as Javascript and its frameworks (Vue and React), Css,
          Sass, Tailwind Css and many more, which I've listed them in <a href="#">my projects</a>. Besides that,
          knowing algorithms and a bit of data structures always helps me build better and cleaner code.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
/* .container {
  @apply min-h-screen flex justify-center items-center text-center;
  background-color: var(--primary-color);
} */

.home-section {
  margin-top: 2.5em;
  color: var(--secondary-color);
  font-size: 4rem;
  font-family: var(--titles-font-family);
}

.home-section__body-content {
  margin-top: 2.5em;
  font-size: 1.4rem;
  font-family: var(--body-font-family);
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  background-color: var(--primary-color);
  padding: 0 2em;
}
</style>

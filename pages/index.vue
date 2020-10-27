<template>
  <div class="container">
    <div class="home-section flex-col text-left">
      <h1>Hi! I'm Lucas Pineda.
        <br>
        I'm a Front End Developer.
      </h1>
      <div class="home-section__body-content">
        <p>
          I’m a Front End Developer, Computer Scientist and a problem solver based in São Paulo.
        </p>
        <p class="mt-8">
          My skills are all related to the Front End Spectrum, and you can check it on
          <a class="font-normal underline" href="#">my projects</a> section. Besides that,
          knowing algorithms and a bit of data structures always helps me build better and cleaner code.
        </p>
        <p class="mt-8">
          Teams with great communication skills, ambitious and positive people will always motivates me to give my best.
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
  margin-top: 10rem;
  color: var(--secondary-color);
  font-size: 4rem;
  font-family: var(--titles-font-family);
}

.home-section__body-content {
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: 300;
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
  padding: 0 2.2rem;
}
</style>

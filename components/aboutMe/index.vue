<template>
  <div class="home-section flex-col text-left">
    <div class="container flex flex-col mx-auto">
      <h1>
        Hi! I'm Lucas Pineda.
        <br>
        I'm a Front End Developer.
      </h1>
      <section class="home-section__body-content">
        <p>
          I’m a Front End Developer, Computer Scientist and a problem solver based in São Paulo.
        </p>
        <p class="mt-8">
          My skills are all related to the Front End Spectrum, and you can check it on
          <a class="font-normal underline" href="#">my projects</a> section.
          <!-- Besides that, knowing algorithms and a bit of data structures always helps
          me build better and cleaner code. -->
        </p>
        <p class="mt-8">
          Teams with great communication skills, ambitious and positive people will always motivates me to give my best.
        </p>
        <div class="checkout-my-work btn flex mx-auto">
          <span>
            My Work
          </span>
          <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class aboutMe extends Vue {

}
</script>

<style scoped>
.home-section {
  padding-top: 10rem !important;
  color: var(--secondary-color);
  font-size: 4rem;
  font-weight: 700;
  font-family: var(--titles-font-family);
  padding: 0 2.2rem;
  background-color: var(--primary-color);
}

.home-section__body-content {
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: 300;
  font-family: var(--body-font-family);
}

.checkout-my-work.btn {
  font-size: 1.6rem;
  font-weight: 700;
  font-family: var(--titles-font-family);
  margin: 3rem auto 4rem auto;
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.checkout-my-work.btn span {
  margin-right: 1rem;
}
</style>

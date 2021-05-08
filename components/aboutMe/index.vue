<template>
  <div id="about-me" class="home-section flex-col text-left">
    <div class="container flex flex-col mx-auto">
      <h1>
        Hi! I'm Lucas Pineda.
        <br>
        I'm a Front End Developer.
      </h1>
      <section class="home-section__body-content">
        <div class="flex flex-col lg:flex-row">
          <div class="about-me-text">
            <p>
              I’m a Front End Developer, Computer Scientist and a problem solver based in São Paulo.
            </p>
            <p class="mt-8">
              My skills are all related to the Front End Spectrum, and you can check it on
              <scrollactive class="inline">
                <a class="font-normal underline scrollactive-item" href="#my-projects">my projects</a> section.
              </scrollactive>
              <!-- Besides that, knowing algorithms and a bit of data structures always helps
              me build better and cleaner code. -->
            </p>
            <p class="mt-8">
              Teams with great communication skills, ambitious and positive people will always motivate me to give my best.
            </p>
          </div>
          <img class="my-work-img mx-auto mt-16 mb-4 lg:my-0" src="@/assets/img/my-work.svg" alt="">
        </div>
        <scrollactive>
          <a href="#my-projects" class="checkout-my-work btn flex mx-auto scrollactive-item">
            <span>
              My Work
            </span>
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </scrollactive>
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
@media (min-width: 640px) {
  .home-section {
    padding-top: 2.4rem !important;
  }
}

.home-section h1 {
  /* animation: moveInLeft 1s ease-in-out; */
  letter-spacing: 4px;
  font-size: 4.5rem;
}

.home-section__body-content {
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: 300;
  font-family: var(--body-font-family);
}

.about-me-text {
  /* animation: moveInRight 1s ease-in-out; */
}

.checkout-my-work.btn {
  font-size: 1.6rem;
  font-weight: 700;
  font-family: var(--titles-font-family);
  margin: 3rem auto 4rem auto;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  transition: all .2s;
  /* animation: moveInButton 1s ease-in-out; */
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}

.checkout-my-work.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
}

.checkout-my-work.btn span {
  margin-right: 1rem;
}

.checkout-my-work.btn:hover > svg {
  transform: rotate(90deg);
}

.checkout-my-work.btn > svg {
  transition: all .4s;
}

.my-work-img {
  width: 20rem;
  /* margin: 6rem auto; */
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
    }
  80% {
    opacity: 1;
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    opacity: 1;
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInButton {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>

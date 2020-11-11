<template>
  <aside class="desktop-menu fixed h-screen flex flex-col items-center text-center uppercase">
    <img class="profile-image" src="@/assets/img/me.jpeg" alt="My profile picture">
    <nav class="navigation-menu">
      <ul class="navigation-menu__options-list">
        <li>
          <scrollactive class="my-nav" @itemchanged="onItemChanged">
            <li>
              <nuxt-link :to="{ path: '#about-me' }" replace class="scrollactive-item">Home</nuxt-link>
            </li>
            <li>
              <a href="#my-projects" class="scrollactive-item">About Me</a>
            </li>
            <li>
              <a href="#contact-me" class="scrollactive-item">Contact</a>
            </li>
          </scrollactive>
        </li>
        <!-- <li>
          <nuxt-link to="#about-me">
            teste
          </nuxt-link>
        </li>
        <li>
          <div v-scroll-to="{el: '#about-me'}">
            Contact
          </div>
        </li>
        <li>
          <a href="#about-me">
            About me
          </a>
        </li>
        <li>
          <div v-scroll-to="{el: '#my-projects', onStart: teste, onDone: teste2}">
            My projects
          </div>
        </li>
        <li>
          <a href="#contact-me">
            Contact me
          </a>
        </li> -->
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VueScrollactive from 'vue-scrollactive'

Vue.use(VueScrollactive)

@Component
export default class aboutMe extends Vue {
  onItemChanged (...args) {
    // here you have access to everything you need regarding that event
    // console.log(currentItem.getAttribute('href'))
    const currentItemHref = args[1].getAttribute('href')
    // console.log(args[1].getAttribute('href'))
    history.pushState(null, '', currentItemHref)
  }
}
</script>

<style scoped>
.desktop-menu {
  background-color: var(--secondary-color);
  width: 20rem;
  color: var(--tertiary-color);
}

.profile-image {
  height: 10rem;
  width: 10rem;
  border-radius: 100%;
  margin: 6rem 0 8rem 0;
}

.navigation-menu__options-list {
  font-size: 1.4rem;
}

.navigation-menu__options-list li{
  margin: 0 0 .8rem 0;
}

.navigation-menu__options-list li a:hover{
  color: var(--senary-color);
}

.is-active {
  color: var(--primary-color);
}
</style>

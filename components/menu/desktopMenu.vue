<template>
  <aside class="desktop-menu hidden fixed h-screen sm:flex flex-col items-center text-center uppercase">
    <img class="profile-image" src="@/assets/img/me.jpeg" alt="My profile picture">
    <nav class="navigation-menu">
      <ul class="navigation-menu__options-list">
        <scrollactive class="my-nav" @itemchanged="onItemChanged">
          <li>
            <!-- <nuxt-link :to="{ path: '#about-me' }" class="scrollactive-item">About Me</nuxt-link> -->
            <a href="#about-me" class="scrollactive-item">About Me</a>
          </li>
          <li>
            <!-- <nuxt-link :to="{ path: '#my-projects' }" class="scrollactive-item">My Projects</nuxt-link> -->
            <a href="#my-projects" class="scrollactive-item">My Projects</a>
          </li>
          <li>
            <!-- <nuxt-link :to="{ path: '#contact-me' }" class="scrollactive-item">Contact</nuxt-link> -->
            <a href="#contact-me" class="scrollactive-item">Contact</a>
          </li>
        </scrollactive>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VueScrollactive from 'vue-scrollactive'

Vue.use(VueScrollactive)

@Component
export default class DesktopMenu extends Vue {
  onItemChanged (...args) {
    const currentItemHref = args[1].getAttribute('href')
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

.is-active, .nuxt-link-exact-active {
  color: var(--primary-color);
}
</style>

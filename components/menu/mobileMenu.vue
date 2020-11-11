<template>
  <nav class="mobile-menu flex items-center fixed w-full sm:hidden">
    <div class="flex items-center justify-center rounded-full text-white name-avatar">
      LP
    </div>
    <div class="nav-icons flex items-center">
      <scrollactive class="flex items-center" @itemchanged="onItemChanged">
        <a href="#about-me" class="scrollactive-item">
          <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </a>
        <a href="#my-projects" class="scrollactive-item">
          <svg width="34px" height="34px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </a>
        <a href="#contact-me" class="scrollactive-item">
          <svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </scrollactive>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VueScrollactive from 'vue-scrollactive'

Vue.use(VueScrollactive)

@Component
export default class MobileMenu extends Vue {
  onItemChanged (...args) {
    const currentItemHref = args[1].getAttribute('href')
    history.pushState(null, '', currentItemHref)
  }
}
</script>

<style scoped>
nav {
  background-color: var(--secondary-color);
  padding: 1rem;
}

.name-avatar {
  font-size: 1.6rem;
  font-family: var(--body-font-family);
  width: 4rem;
  height: 4rem;
  background-color: var(--primary-color);
}

.nav-icons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.nav-icons a {
  max-height: 100%;
  max-width: 100%;
  margin-left: 1rem;
  color: var(--primary-color);
}
</style>

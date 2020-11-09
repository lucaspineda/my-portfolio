<template>
  <aside class="desktop-menu fixed h-screen flex flex-col items-center text-center uppercase">
    <img class="profile-image" src="@/assets/img/me.jpeg" alt="My profile picture">
    <nav class="navigation-menu">
      <ul class="navigation-menu__options-list">
        <li>
          About me
        </li>
        <li>
          My projects
        </li>
        <li>
          Contact me
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class aboutMe extends Vue {

}
</script>

<style scoped>
.desktop-menu {
  background-color: var(--secondary-color);
  width: 20rem;
  color: var(--primary-color);
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
</style>

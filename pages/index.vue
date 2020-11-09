<template>
  <div class="container">
    <HomeSection />
    <MyProjects />
    <ContactMe />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    HomeSection: () => import('@/components/aboutMe/index.vue'),
    MyProjects: () => import('@/components/myProjects/index.vue'),
    ContactMe: () => import('@/components/ContactMe/index.vue')
  }
})

export default class mainPage extends Vue {

}
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: var(--primary-color);
}
</style>

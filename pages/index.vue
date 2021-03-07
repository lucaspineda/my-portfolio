<template>
  <div class="my-container flex">
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
  },
  head () {
    return {
      title: this.$store.getters['browseJobs/HTMLPageTitle'] || 'Browse Jobs',
      meta: [
        {
          hid: 'Lucas Pineda | Front End Developer',
          name: 'description',
          content: 'Remote Front End Developer For Hire Based in Sao Paulo.'
        }
      ]
    }
  }
})

export default class mainPage extends Vue {

}
</script>

<style>

.my-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  /* background-color: var(--primary-color); */
}

@media (min-width: 640px) {
  .my-container {
    padding-left: 20rem;
  }
}

</style>

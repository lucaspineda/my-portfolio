<template>
  <div class="my-container flex">
    <HomeSection />
    <MyProjects />
    <ContactMe />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import ogImage from '../assets/img/stock-market.png'

@Component<mainPage>({ // eslint-disable-line
  components: {
    HomeSection: () => import('@/components/aboutMe/index.vue'),
    MyProjects: () => import('@/components/myProjects/index.vue'),
    ContactMe: () => import('@/components/ContactMe/index.vue')
  },
  head () {
    return {
      title: 'Lucass Pineda | Front End Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Remote Front End Developer For Hire Based in Sao Paulo.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Lucas Pineda | Front End Developer'
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Lucas Pineda | Front End Developer'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Remote Front End Developer For Hire Based in Sao Paulo.'
        },
        {
          property: 'og:image',
          // content: 'https://avatars.githubusercontent.com/u/4312154?s=88&u=416b7282119cad346d3742c06844ff6fd31b62f4&v=4'
          content: this.ogImage
          // content: '/developer-logo.png'
        }
      ]
    }
  }
})

export default class mainPage extends Vue {
  ogImage = require('@/assets/img/developer-logo.png');
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

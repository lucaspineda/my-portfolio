<template>
  <div class="container">
    <HomeSection />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    HomeSection: () => import('@/components/aboutMe/index.vue'),
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
  background-color: var(--primary-color);
}
</style>

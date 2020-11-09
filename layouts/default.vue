<template>
  <div>
    <DesktopMenu />
    <MobileMenu />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    DesktopMenu: () => import('@/components/menu/desktopMenu.vue'),
    MobileMenu: () => import('@/components/menu/mobileMenu.vue')
  }
})

export default class defaultLayout extends Vue {

}
</script>
<style scoped>

.teste {
  /* background-color: var(--primary-color); */
}
</style>

<template>
  <div class="container">
    <div class="home-section">
      <h1>Hi! I'm Lucas Pineda</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply min-h-screen flex justify-center items-center text-center;
  background-color: var(--primary-color);
}

.home-section {
  color: var(--secondary-color);
  font-size: 4rem;
  font-family: var(--titles-font-family);
}

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>

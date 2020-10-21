<template>
  <div class="bg-blue-900">
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center justify-center rounded-full bg-blue-900 text-white name-avatar">LP</div>
    </nav>
    <Nuxt />
  </div>
</template>
<style scoped>

div {
  /* background-color: rgb(34, 34, 158); */
}

nav {
  background-color: rgb(242,234,230);
}

.name-avatar {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
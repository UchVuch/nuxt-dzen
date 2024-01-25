<script setup>
const links = [
  {
    to: '/',
    name: 'Главная'
  },
  {
    to: '/about',
    name: 'О нас'
  }
]
</script>

<template>
  <div>
    <header class="header">
      <div class="menu-links">
        <ULink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{ link.name }}
        </ULink>
      </div>
      <div class="user-controls">
        <UButton
          icon="i-heroicons-sun"
          size="sm"
          color="primary"
          square
          variant="solid"
        />
        <UButton
          icon="i-heroicons-user"
          size="sm"
          color="primary"
          square
          variant="solid"
        />
      </div>
    </header>
    <slot />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding-block: 15px;
}
.menu-links {
  display: flex;
  gap: 15px;
  align-items: center;
}
.user-controls {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
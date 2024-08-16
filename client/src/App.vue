<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/list">List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

  nav>a {
    font-size: large;
    margin: 1rem;
    padding: 1rem 2rem;
    border-radius: 20%;
  }

  .router-link-active {
    color: var(--color-heading);
  }

  .wrapper {
    display: flex;
    justify-content: center;
  }

  nav {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }


</style>

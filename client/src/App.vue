<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/list">List</RouterLink>
          <RouterLink to="/form">Add Review</RouterLink>
          <RouterLink to="/reviews">Manage Review</RouterLink>
      </nav>
    </div>
  </header>

  <transition name="fade" mode="out-in">
    <RouterView />
  </transition>
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
    width: 70%;
    display: flex;
    justify-content: space-around;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 500ms;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

</style>

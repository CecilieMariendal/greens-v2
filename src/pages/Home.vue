<template>
  <nav>
    <h1>Home</h1>
  </nav>

  <create-form></create-form>

  <router-link to="/recipe/test">Recipe Test</router-link>
  <router-link to="/account">My Account</router-link>
  <!-- 
    Todo:
      Create recipe
      All my recipes
      Search funtionality
   -->
</template>

<script>
import CreateForm from '../components/CreateForm.vue'

export default {
  components: {
    CreateForm,
  }
}
</script>

<style scoped>
</style>

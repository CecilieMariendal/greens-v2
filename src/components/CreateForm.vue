<template>
    <form @submit.prevent="onsubmit()">
        <h2>Import external recipe</h2>
        <input v-model="url" placeholder="Import recipe" type="text" name="url">
        <button type="submit">Import</button>
    </form>
    <p>Or</p>
    <form>
        <h2>Create new recipe</h2>
        <fieldset>
            <legend>Base information</legend>
            <input type="text" name="Title" placeholder="Name of the recipe...">
            <textarea name="description" cols="30" rows="10" placeholder="Write a description"></textarea>
            <input type="file" name="image" accept="image/png, image/gif, image/jpeg">
        </fieldset>
        <fieldset>
            <legend>Ingredients</legend>
            <input type="text" name="Ingredient">
        </fieldset>
        <fieldset>
            <legend>Steps</legend>
            <input type="text" name="step">
        </fieldset>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
    export default {
        name: 'CreateForm',
        data() {
          return {
              url: '',
          }
        },
        methods: {
            onsubmit() {
                // TODO: Import recipe
            },
        },
    }
</script>

<style scoped>

</style>

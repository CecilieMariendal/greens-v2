<template>
    <form @submit.prevent="onsubmit()">
        <h2>Import external recipe</h2>
        <input v-model="url" placeholder="Import recipe" type="text" name="url">
        <button type="submit">Import</button>
    </form>
    <p>Or</p>
    <form>
        <h2>Create new recipe</h2>
        <div class="basic">
            <label for="image">
                <img src="recipe-placeholder.jpg" alt="banner image">
                <input type="file" id="image" name="image" accept="image/png, image/gif, image/jpeg">
            </label>
            <div>
                <input v-model="headline" type="text" name="title" placeholder="Name of the recipe...">
                <textarea v-model="content" name="description" cols="30" rows="10" placeholder="Write a description"></textarea>
            </div>
        </div>
        <div class="fieldset">
            <h3>Ingredients</h3>
            <input type="text" name="Ingredient">
        </div>
        <div class="fieldset">
            <h3>Steps</h3>
            <input type="text" name="step">
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
    export default {
        name: 'CreateForm',
        data() {
          return {
              url: '',
              portrait: '',
              headline: '',
              content: '',
              ingredients: [],
              steps: [],
          }
        },
        methods: {
            onsubmit() {
                
                // TODO: Import recipe
            },
        },
    }
</script>

<style scoped lang="scss">
    form {
        div {
            &.basic {
                @media only screen and (min-width: 700px) {
                    display: grid;
                    grid-template-columns: 500px 1fr;
                    grid-gap: 1vw;
                }

                label {
                    display: block;
                    width: 100%;
                    height: 300px;
                    overflow: hidden;
                    
                    input { display: none; }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                > div {
                    display: flex;
                    flex-direction: column;

                    input[name="title"] {
                        font-size: 1.5em;
                        margin-bottom: 1em;
                    }

                    textarea {
                        height: 100%;
                        border: none;
                    }
                }
            }

            input {
                width: 100%;
                box-sizing: border-box;
                border-radius: 0;
                border: none;
                border-bottom: 2px solid silver;

                &:focus {
                    outline: none;
                    border-bottom-color: black;
                }
            }
        }
    }
</style>

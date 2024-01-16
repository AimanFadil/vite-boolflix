<script>
import { store } from '../store.js';
export default {
    name: 'Header',
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <header>
       <div class="container">
        <div class="row d-flex justify-content-between">
            <div class="col-4 red">
                <h1 class=" m-4">BOOLFLIX</h1>
            </div>
            <div class="col-4">
                <ul class="d-flex flex-row justify-content-between">
                    <li><h4>Home</h4></li>
                    <li><h4>SerieTv</h4></li>
                    <li><h4>Film</h4></li>
                    <li><h4>Novità</h4></li>
                </ul>
            </div>
            <div class="col-4">
                <div class="d-flex m-4">
                    <input class="form-control" type="text" placeholder="Inserisci Titolo del film o serie tv" id="film" v-model="store.film" >
                    <button  class="btn red" @click="$emit('cerca')">CERCA</button>
                </div>
            </div>
        </div>
       </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';

header {
    background-color: black;
    height: 100px;

    .red {
        color: red;
        width: 150px;
    }

    .pulsante {
        width: fit-content;
        height: fit-content;
    }

    .button {
        background-color: red;
    }

    ul {
        padding: 20px;

        li {
            list-style: none;
            color: white;
            padding: 15px;

            &:hover {
                color: red;

                border-bottom: red 2px solid;
            }

        }
    }




}
</style>
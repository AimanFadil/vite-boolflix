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
        <div class="row">
            <div class="col-6">
                <h1 class="red m-4">BOOLFLIX</h1>
            </div>
            <div class="col-6">
                <form class="d-flex m-4">
                    <input class="form-control" type="text" placeholder="Inserisci Titolo" id="film" v-model="store.film" >
                    <button  class="btn btn-danger" @click="$emit('cerca')">CERCA</button>
                </form>
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
    }

    .pulsante {
        width: fit-content;
        height: fit-content;
    }
}
</style>
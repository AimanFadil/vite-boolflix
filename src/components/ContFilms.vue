<script>
import { store } from '../store.js';
export default {
    name: 'ContFilms',
    data() {
        return {
            store

        }
    }
}
</script>
<template lang="">
  <div class="bg">
    <div class="container">
        <div class="row">
            <div class="col-2">
                <div class="content">
                    <div class="schedafilm" v-for="film, index in store.films" :key="index">
                        {{ store.id}}
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';



.content {
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;
    display: flex;
}

.schedafilm {
    padding: 10px;
}
</style>
<script>
import { store } from './store.js';
import Header from './components/Header.vue'
import ContFilms from './components/ContFilms.vue';
import axios from 'axios';
export default {
  components: {
    Header,
    ContFilms
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilms() {

      let filmUrl = store.endpoint

      if (store.film != '') {
        filmUrl += `${store.film}`
        console.log(filmUrl)
      }

      axios.get(this.store.endpoint).then((response) => {
        this.store.films = response.data.results
      })
    },

  },
  created() {
    this.getFilms()
  },
}
</script>
<template lang="">
  <div>
    <Header @cerca="getFilms"/>
    <ContFilms />
  </div>
</template>

<style lang="scss" >
@use './styles/generals.scss';
</style>
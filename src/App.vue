<script>
import { store } from './store.js';
import Header from './components/Header.vue'
export default {
  components: {
    Header,
  },
  data() {
    return {
      store,
    }
  },
}
</script>
<template lang="">
  <div>
    <Header/>
  </div>
</template>

<style lang="scss" >
@use './styles/generals.scss';
</style>
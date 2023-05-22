<template>
  <div>    
    <app-header></app-header>  
  </div>  
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: function() {
    return {
      str: 'Heaer'
    }
  },
  components: {
    'app-header': AppHeader,
  }
}
</script>

<style>

</style>
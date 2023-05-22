<template>
  <div>
    {{ str }}
  </div>  
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: function() {
    return {
      str: 'hi'
    }
  },
  components: function() {
    return {
      AppHeader
    }
  }
}
</script>

<style>

</style>
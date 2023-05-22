<template>
  <div>    
    <app-header 
    v-bind:renew="renewStr"
    v-bind:propsdata="str"></app-header>  
  </div>  
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader,
  },
  methods: {
    renewStr: function(){
      this.str = 'hi'
    }
  }
}
</script>

<style>

</style>
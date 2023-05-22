<template>
  <form action="" method="get">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button>login</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      username: '',
      password: '',
    }
  }
}
</script>

<style>

</style>
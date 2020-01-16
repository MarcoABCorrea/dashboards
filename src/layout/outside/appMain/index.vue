<template>
  <div id="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view style="padding: 1rem;" />
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'appMain'
  }
</script>

<style lang="scss" scoped>
  #app-main {
    flex: 1;
    overflow-y: scroll;
    overflow-x: auto;
  }
</style>

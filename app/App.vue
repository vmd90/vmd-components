<template>
  <div id="app">
    <vmd-container>
      <vmd-text class="is-size-1 has-text-green has-text-weight-bold">{ Components }</vmd-text>
      <hr>
    </vmd-container>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import VmdContainer from './components/vmd-components/Container.vue';
import VmdText from './components/vmd-components/Text.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    VmdContainer
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/theme.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

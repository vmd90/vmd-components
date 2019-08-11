<template>
  <button :class="`button ${type} is-${size} ${isLoading ? 'is-loading' : ''}`" v-on="$listeners" :disabled="isLoading">
    <slot/>
    <!-- <spinner :isLoading="isLoading" :size="10" color="black" /> -->
  </button>
</template>

<script>
// import Spinner from './Spinner.vue';

export default {
  // components: {
  //   Spinner
  // },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

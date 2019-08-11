<template>
  <div>
    <slot v-if="!isLoading" />
    <spinner :isLoading="isLoading" :size="10" color="black" />
  </div>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  components: {
    Spinner
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

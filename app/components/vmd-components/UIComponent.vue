<template>
  <div>
    <slot/>
    <spinner :isOverlay="loading.overlay" :isLoading="loading.active" :size="loading.size" :color="loading.color" />
  </div>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  components: {
    Spinner
  },
  props: {
    loading: {
      type: Object,
      default: () => ({
        overlay: false,
        active: false,
        size: 10,
        color: 'black'
      })
    }
  }
}
</script>

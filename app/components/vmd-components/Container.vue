<template>
  <ui-component :class="[fluid ? 'container-fluid' : 'container', 'is-mt-1', 'is-mb-1']" :loading="{
    active: isLoading,
    size: 20,
    overlay: true
  }">
    <slot/>
  </ui-component>
</template>

<script>
import UiComponent from './UIComponent.vue';

export default {
  components: {
    UiComponent
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    }
  }
}
</script>

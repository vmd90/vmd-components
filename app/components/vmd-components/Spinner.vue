<template>
<div>
  <b-loading v-if="isOverlay" :is-full-page="false" :active.sync="isLoading" :can-cancel="false">
    <span class="spinner">
      <span class="spinner__item1" :style="{ width: size+'px', height: size+'px', background: color }"></span>
      <span class="spinner__item2" :style="{ width: size+'px', height: size+'px', background: color }"></span>
      <span class="spinner__item3" :style="{ width: size+'px', height: size+'px', background: color }"></span>
      <span class="spinner__item4" :style="{ width: size+'px', height: size+'px', background: color }"></span>
    </span>
  </b-loading>
  <div v-else>
    <span v-if="isLoading" class="spinner">
      <span class="spinner__item1" :style="{ width: size+'px', height: size+'px', background: color }"></span>
      <span class="spinner__item2" :style="{ width: size+'px', height: size+'px', background: color }"></span>
      <span class="spinner__item3" :style="{ width: size+'px', height: size+'px', background: color }"></span>
      <span class="spinner__item4" :style="{ width: size+'px', height: size+'px', background: color }"></span>
    </span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    isOverlay: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 30
    },
    color: {
      type: String,
      default: '#808080'
    }
  }
}
</script>

<style scoped>
.spinner {
  margin: 0px auto;
  width: 100%;
  text-align: center;
}

.spinner > span {
  width: 30px;
  height: 30px;
  max-width: 40px;
  max-height: 40px;
  background-color: #797979;
  border-radius: 100%;
  display: inline-block;
  animation: sk-bouncedelay 1.7s infinite ease-in-out both;
  margin-right: 5px;
}

.spinner .spinner__item1 {
  animation-delay: -0.60s;
}

.spinner .spinner__item2 {
  animation-delay: -0.40s;
}

.spinner .spinner__item3 {
  animation-delay: -0.20s;
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    transform: scale(0);
    opacity: 0;
  } 40% { 
    transform: scale(1.0);
    opacity: 1;
  }
}
</style>


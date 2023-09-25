<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
button,
a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  color: white;
  font: inherit;
  border: 1px solid white;
  background-color: #01a828d1;
  text-decoration: none;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.3rem;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #007f1ed1;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #01a828d1;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
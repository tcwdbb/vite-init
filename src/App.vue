<script setup lang="ts">
// import AboutView from './views/AboutView.vue';
console.log(import.meta.env);

console.log(import.meta.env.VITE_BASE_API);
const a = ref(1);
watch(a, (val) => {
  console.log(val);
});
</script>

<template>
  <button @click="a++">
    添加
  </button>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <CTest />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

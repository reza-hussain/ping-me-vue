<script setup>
const props = defineProps({
  message: String,
});
</script>

<template>
  <div class="receive">
    <span>{{ props.message }}</span>
  </div>
</template>

<style scoped lang="scss">
.receive {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  span {
    padding: 0.25rem 0.25rem;
    background-color: burlywood;
    color: black;
  }
}
</style>

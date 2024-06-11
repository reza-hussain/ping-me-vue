<script setup>
const props = defineProps({
  message: String,
});
</script>

<template>
  <div class="send">
    <span>{{ props.message }}</span>
  </div>
</template>

<style scoped lang="scss">
.send {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 0;
  span {
    padding: 0.25rem 0.25rem;
    background-color: brown;
    color: white;
  }
}
</style>

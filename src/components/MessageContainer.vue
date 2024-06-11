<script setup>
import Send from "@/components/Bubble/Send.vue";
import Receive from "@/components/Bubble/Receive.vue";
</script>

<template>
  <div class="messageContainer">
    <Send message="helo" />
    <Receive message="less gooo" />
  </div>
</template>

<style scoped>
.messageContainer {
  height: calc(100vh - 144px);
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
</style>

<script setup>
import { useRouter } from "vue-router";

import Sidebar from "./components/Sidebar.vue";
import ChatBox from "./components/ChatBox.vue";
</script>

<template>
  <div class="main">
    <Sidebar />
    <ChatBox />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

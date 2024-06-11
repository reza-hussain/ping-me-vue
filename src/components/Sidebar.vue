<script setup>
import { ref } from "vue";
import ChatItem from "@/components/ChatItem.vue";

const search = ref("");
</script>

<template>
  <div class="sidebar">
    <input
      class="searchbar"
      type="text"
      placeholder="Search User"
      v-model="search"
    />

    <div class="chatItemList">
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 100%;
  max-width: 360px;
  height: 100vh;
  background-color: #e4e4e4;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.searchbar {
  width: 100%;
  padding: 10px;
  border: none;

  border-radius: 20px;
}

.chatItemList {
  padding: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}
</style>

<script setup></script>

<template>
  <div class="chatItem">
    <div class="chatItemImage">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
    <span class="chatItemDetails">
      <h3>User</h3>
      <p>New message</p>
    </span>
  </div>
</template>

<style scoped lang="scss">
.chatItem {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;

  &Image {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    overflow: hidden;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    background-color: white;
  }
}
</style>

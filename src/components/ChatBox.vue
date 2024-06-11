<script setup>
import MessageContainer from "@/components/MessageContainer.vue";
</script>

<template>
  <div class="chatBox">
    <div class="chatBoxHeader">
      <div class="chatBoxHeaderImg">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="chatItemImage"
        />
      </div>
    </div>

    <MessageContainer />

    <div class="chatBoxInput">
      <input type="text" placeholder="Hello" />

      <button class="chatBoxInputSend">Send</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chatBox {
  max-width: calc(100vw - 360px);
  width: 100%;
  background-color: white;
  height: 100vh;

  &Header {
    width: 100%;
    background-color: #ececec;
    height: 72px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    box-shadow: 0px 5px 10px -1px #10101030;

    &Img {
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
  }

  &Main {
    height: calc(100% - 144px);
  }

  &Input {
    height: 72px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem;
    background-color: #10101030;
    input {
      width: 100%;
      height: 100%;
      border: none;
      font-size: 1.2rem;
      border-radius: 6px;

      padding: 1rem;
      outline: none;
    }

    &Send {
      height: 100%;
      width: 72px;
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
}
</style>

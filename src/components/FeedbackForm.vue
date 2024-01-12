<script setup lang="ts">
import { ref } from "vue";

const responseMessage = ref<string>();

async function submit(e: Event) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget as HTMLFormElement);
  const response = await fetch("/api/feedback", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  responseMessage.value = data.message;
}
</script>

<template>
  <form @submit="submit">
    <label>
      Name
      <input type="text" id="name" name="name" required />
    </label>
    <label>
      Email
      <input type="email" id="email" name="email" required />
    </label>
    <label>
      Message
      <textarea id="message" name="message" required />
    </label>
    <button>Send</button>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </form>
</template>
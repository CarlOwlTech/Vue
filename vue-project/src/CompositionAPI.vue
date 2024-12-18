<script setup>
import { ref, onMounted } from "vue";

const name = ref("John Carlo");
const status = ref("Active");
const credentials = ref([
  "Student Num: 23 - 1892",
  "IT Student",
  "Second Year",
]);
const facebook = "https://web.facebook.com/";
const newCredentials = ref("");

const addCredentials = () => {
  if (newCredentials.value.trim() !== "") {
    credentials.value.push(newCredentials.value);
    newCredentials.value = "";
  }
};

const deleteCredentials = (index) => {
  credentials.value.splice(index, 1);
};

const deleteAll = (index) => {
  credentials.value = [];
};

onMounted(async () => {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await reponse.json();
    credentials.value = data.map((item) => item.title);
  } catch (error) {
    console.log("Error Fetching", error);
  }
});

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const changeUser = () => {
  if (name.value === "John Carlo") {
    name.value = "Jessica";
    credentials.value = ["Student Num: 20-1929", "Engineering", "Third Year"];
  } else {
    name.value = "John Carlo";
    credentials.value = ["Student Num: 23-1892", "IT Student", "Second Year"];
  }
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">You are active</p>
  <p v-else-if="status === 'pending'">User is currently Pending</p>
  <p v-else>Inactive User</p>

  <h3>Credentials</h3>
  <ul>
    <li v-for="(info, index) in credentials" :key="info">
      <span>{{ info }}</span>
      <button @click="deleteCredentials(index)">x</button>
      <button @click="deleteAll(index)">delete all</button>
    </li>
  </ul>

  <a :href="facebook">Facebook Link</a>
  <br />
  <button @click="toggleStatus">Change Status</button>
  <button @click="changeUser">Change User</button>

  <br />

  <form @submit.prevent="addCredentials">
    <label for="newCredentials"></label>
    <input type="text" id="newCredentials" v-model="newCredentials" />
    <button type="submit" onclick="addCredentials">Submit</button>
  </form>
</template>

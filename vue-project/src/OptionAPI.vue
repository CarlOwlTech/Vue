<script>
export default {
  data() {
    return {
      name: "John Carlo",
      status: "pending",
      credentials: ["23-1892", "IT STUDENT", "Second Year"],
      facebook: "https://web.facebook.com/",
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">You are active</p>
  <p v-else-if="status === 'pending'">User is currently Pending</p>
  <p v-else>Inactive User</p>

  <h3>Credentials</h3>
  <ul>
    <li v-for="info in credentials" :key="info">{{ info }}</li>
  </ul>

  <a :href="facebook">Facebook Link</a>
  <br />
  <button @click="toggleStatus">Change Status</button>
</template>

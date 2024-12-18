<script setup>
import { defineProps, ref, computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  jobs: Object,
});

const showFullDesc = ref(false);

const TruncatedDesc = computed(() => {
  let description = props.jobs.description;
  if (!showFullDesc.value) {
    description = description.substring(0, 90) + "...";
  }
  return description;
});

const toggleFullDesc = () => {
  showFullDesc.value = !showFullDesc.value;
};
</script>
<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ jobs.type }}</div>
        <h3 class="text-xl font-bold">{{ jobs.title }}</h3>
      </div>

      <div class="mb-5">
        <div>
          {{ TruncatedDesc }}
        </div>
        <button
          @click="toggleFullDesc"
          class="text-green-500 hover:text-green-600 text-lg">
          {{ showFullDesc ? "Less" : "More" }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ jobs.salary }} / Per Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-lg text-orange-500"></i>
          {{ jobs.location }}
        </div>
        <RouterLink
          :to="'jobs/' + jobs.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

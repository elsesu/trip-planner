


<template>
<div class="form-div">
    <h2 class="choose">These Are your favourite Destinations</h2>
    <div v-if="destinations.length">
      <VueDraggableNext v-model="destinations" @end="updateLocalStorage" class="dragArea list-group w-full">
        <li v-for="destination in destinations" :key="destination" class="voolad">
          {{ destination }}
        </li>
      </VueDraggableNext>
    </div>
    <div v-else class="form-div">
      <h1 class="choose">Oops, you haven't added a destination yet</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
 import { useStore } from 'vuex'
  import { VueDraggableNext } from 'vue-draggable-next'
import { computed } from 'vue'


// Define a ref to hold the destinations
const destinations = ref([])

// Function to fetch destinations from localStorage
const fetchDestinations = () => {
  const storedDestinations = localStorage.getItem('countries')
  if (storedDestinations) {
    destinations.value = JSON.parse(storedDestinations)
  } else {
    destinations.value = []
  }
}

// Function to update localStorage when destinations change
const updateLocalStorage = () => {
  localStorage.setItem('countries', JSON.stringify(destinations.value))
}

// Use watchEffect to reactively fetch destinations when localStorage changes
watchEffect(() => {
  fetchDestinations()
})
</script>

<style>

</style>
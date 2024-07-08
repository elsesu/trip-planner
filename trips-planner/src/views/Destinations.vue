


<template>
<div class="form-div">
    <h2 class="choose">These Are your favourite Countries 🌍</h2>
    <div v-if="destinations.length">
      <VueDraggableNext v-model="destinations" @end="updateLocalStorage" class="dragArea list-group w-full">
        <li v-for="destination in destinations" :key="destination" class="voolad">
          {{ destination }}
        </li>
      </VueDraggableNext>
    </div>
    <div v-else class="form-div">
      <h1 class="choose">Oops, you haven't added a Country yet 😬</h1>
    </div>


    <div class="form-div">
      <h2 class="choose">These Are your favourite Destinations 🚘</h2></div>
 <div v-if="locations.length">
      <VueDraggableNext v-model="locations" @end="updateLocalStorage" class="dragArea list-group w-full">
             <li v-for="(location, index) in formattedLocations" :key="index" class="voolad">
          {{ location }}
        </li>
      </VueDraggableNext>
    </div>
    <div v-else class="form-div">
      <h1 class="choose">Oops, you haven't added a destination yet 😬</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
 import { useStore } from 'vuex'
  import { VueDraggableNext } from 'vue-draggable-next'
import { computed } from 'vue'


const destinations = ref([])
const locations = ref([])


const fetchDestinations = () => {
  const storedDestinations = localStorage.getItem('countries')
  if (storedDestinations) {
    destinations.value = JSON.parse(storedDestinations)
  } else {
    destinations.value = []
  }
}

const fetchLocations =()=>{
  const storedLocations = localStorage.getItem('locations')
  if(storedLocations){
    locations.value = JSON.parse(storedLocations)
  } else{
    locations.value = []
  }
}
const formattedLocations = computed(() => {
  return locations.value.map(location => {
       return `${location.Title}: Latitude: ${location.Latitude}, Longitude: ${location.Longitude}`;
  });
});


const updateLocalStorage = () => {
  localStorage.setItem('countries', JSON.stringify(destinations.value))
    localStorage.setItem('locations', JSON.stringify(locations.value))
}


watchEffect(() => {
  fetchDestinations()
  fetchLocations()
})
</script>

<style>

</style>
<template>
<div class="map-margin"><div class="mapContainer">
    <l-map ref="map" :zoom="zoom" :center="center" @click="addMarker" :useGlobalLeaflet="false">
      <l-tile-layer :url="getWsUrl()" layer-type="base" name="OpenStreetMap"
        attribution="© sesugh Asa contributors"></l-tile-layer>
      <l-feature-group ref="fg">
        <l-marker v-for="loc in locations" :lat-lng="getLatLon(loc)" :key="loc.Title">
          <l-tooltip>
            {{ loc.Title }}
          </l-tooltip>
        </l-marker>
      </l-feature-group>
      <l-polygon :lat-lngs="getPolygonArea()" color="red" :fill="true" :fill-opacity="0.2" fill-color="red" />
    </l-map>
 
    <div class="frame">
      <div class="data">
   <div>Total Distance: {{ totalDistance.toFixed(2) }} km</div>
      <div>Total Time: {{ totalTime.toFixed(2) }} minutes</div>
      </div>
 
<div v-if="distances.length" class="data">
      <div v-for="(distance, index) in distances" :key="index" class="">
        <ul class="dist">
          <li> Distance from Position ({{ index + 1 }}) {{ distance.toFixed(2) }}  km <br> And Time Required:</li>
        </ul>
       
     
      </div>

    </div>
    <div v-else></div>
    <div class="data">
  <div v-for="location in locations" :key="location.Title">
    <p>{{ location.Title }}</p>
    <span>Latitude: {{ location.Latitude }}</span> <span>Longitude: {{ location.Longitude }}</span>

  </div>
</div>
    </div>
        
  </div> </div>
  
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LPolygon, LTooltip, LFeatureGroup } from '@vue-leaflet/vue-leaflet'
import { onMounted, ref, nextTick, computed, watchEffect } from 'vue'
import { LocationInfo } from '../models/LocationInfo'
import { PointTuple } from 'leaflet'
import { useStore } from 'vuex'
import {LatLon} from '../models/LatLon'
import { DistanceBetween } from '../middleware/Distancebetween'


const store = useStore()

const getWsUrl = (): string => {
  return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const getLatLon = (item: LatLon): [number, number] => {
  return [item.Latitude, item.Longitude]
}

const getPolygonArea = (): [number, number][] => {
  return store.getters.getPolygon.map((coordinate: LatLon) => [coordinate.Latitude, coordinate.Longitude])
}

onMounted(() => {
  nextTick(() => {
    // Custom logic after mount
  })
})

const zoom = ref(15)
const center = ref<[number, number]>([52.09895303362214, 4.2637035702751405])
const map = ref<typeof LMap>()
const fg = ref<typeof LFeatureGroup | null>(null)

const locations = computed(() => store.getters.getLocations)

const addMarker = (e: { latlng: { lat: number; lng: number } }) => {
  const newLocation = {
    Latitude: e.latlng.lat,
    Longitude: e.latlng.lng,
    Title: `Point ${store.getters.getLocations.length + 1}`
  }
  store.dispatch('addNewLocation', newLocation)
}

const totalDistanceAndTime = computed(() => store.getters.getTotalDistanceAndTime)
const totalDistance = computed(() => totalDistanceAndTime.value.totalDistance)
const totalTime = computed(() => totalDistanceAndTime.value.totalTime)

const distances = computed(() => {
  const dists = []
  for (let i = 1; i < store.state.locations.length; i++) {
    const { distance } = DistanceBetween(
      { lat: store.state.locations[i - 1].Latitude, lng: store.state.locations[i - 1].Longitude },
      { lat: store.state.locations[i].Latitude, lng: store.state.locations[i].Longitude }
    )
    dists.push(distance)
  }
  return dists
})

console.log('Total Distance:', totalDistance.value, 'Total Time:', totalTime.value)
console.log('Distances:', distances.value)

</script>

<style scoped>
.mapContainer {
  width: 100%;
  height: 600px;
}

.data {
  margin-top: 20px;
  padding: 6px;
  color: white;
  background: rgb(81, 81, 219);
  border-radius: 6px;
    width: 40%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


.leaflet-div-icon {
  background: steelblue;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 80%;
  font-weight: bold;
  font-size: large;
  text-align: center;
  line-height: 21px;
}



.map-margin{
  margin: 10px;
}

.frame{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
    background: rgb(44, 168, 35);
 
}
</style>

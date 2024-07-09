// src/store/index.js
import { createStore } from 'vuex'
import { DistanceBetween } from './middleware/Distancebetween'

const saveToLocalStorage = (countries) => {
  localStorage.setItem('countries', JSON.stringify(countries));
}

const loadFromLocalStorage = () => {
  const countries = localStorage.getItem('countries');
  return countries ? JSON.parse(countries) : [];
}

const saveLocationsToLocalStorage = (locations) => {
  localStorage.setItem('locations', JSON.stringify(locations));
}

const loadLocationsFromLocalStorage = () => {
  const locations = localStorage.getItem('locations');
  return locations ? JSON.parse(locations) : [];
}

export const store = createStore({
  state: {
    list: [
      { name: 'John', id: 1 },
      { name: 'Joao', id: 2 },
      { name: 'Jean', id: 3 },
      { name: 'Gerard', id: 4 },
    ],
    currentCountry: '',
    countries: loadFromLocalStorage(),
    locations: [], // Start with an empty array
   
    polygon: [
      {
        Latitude: 52.099738624938254,
        Longitude: 4.253472755089291
      }
    ],
    distances: []
  },
  mutations: {
    setList(state, newList) {
      state.list = newList;
    },
    setCurrentCountry(state, country) {
      state.currentCountry = country
    },
    addCountry(state) {
      const countryName = state.currentCountry.trim()
      if (countryName && !state.countries.includes(countryName)) {
        state.countries.push(countryName)
        saveToLocalStorage(state.countries); // Save to localStorage
      }
      state.currentCountry = ''
    },
    removeCountry(state, country) {
      state.countries = state.countries.filter(c => c !== country)
    },
    setLocations(state, locations) {
      state.locations = locations
    },
    setPolygon(state, polygon) {
      state.polygon = polygon
    },
    addLocation(state, location) {
      state.locations.push(location)
      saveLocationsToLocalStorage(state.locations);
      if (state.locations.length > 1) {
        const lastLocation = state.locations[state.locations.length - 2]
        const { distance, timeInMinutes } = DistanceBetween(
          { lat: lastLocation.Latitude, lng: lastLocation.Longitude },
          { lat: location.Latitude, lng: location.Longitude }
        )
        state.distances.push({ distance, timeInMinutes }) 
      
      }
    }
  },
  actions: {
    updateList({ commit }, newList) {
      commit('setList', newList);
    },
    updateLocations({ commit }, locations) {
      commit('setLocations', locations)
    },
    updatePolygon({ commit }, polygon) {
      commit('setPolygon', polygon)
    },
    addNewLocation({ commit }, location) {
      commit('addLocation', location)
    }
  },
  getters: {
    getList(state) {
      return state.list;
    },
    getCountries(state) {
      return state.countries
    },
    getCurrentCountry(state) {
      return state.currentCountry
    },
    getLocations(state) {
      return state.locations
    },
    getPolygon(state) {
      return state.polygon
    },
    getTotalDistanceAndTime(state) {
      let totalDistance = 0;
      let totalTime = 0;
      for (let i = 1; i < state.locations.length; i++) {
        const { distance, timeInMinutes } = DistanceBetween(
          { lat: state.locations[i - 1].Latitude, lng: state.locations[i - 1].Longitude },
          { lat: state.locations[i].Latitude, lng: state.locations[i].Longitude }
        );
        totalDistance += distance;
        totalTime += timeInMinutes;
      }
      return { totalDistance, totalTime };
    }
  }
})
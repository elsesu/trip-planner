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

export const store = createStore({
  state: {
    currentCountry: '',
    countries: loadFromLocalStorage(),
    locations: [
      {
        Latitude: 52.103839,
        Longitude: 4.252742,
        Title: 'Point 1'
      },
    ],
    polygon: [
      
      {
        Latitude: 52.099738624938254,
        Longitude: 4.253472755089291
      }
    ],
    distances: []
  },
  mutations: {
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
      if (state.locations.length > 1) {
        const lastLocation = state.locations[state.locations.length - 2]
        const distance = DistanceBetween(
          { lat: lastLocation.Latitude, lng: lastLocation.Longitude },
          { lat: location.Latitude, lng: location.Longitude }
        )
        state.distances.push(distance)
      }
    }
  },
  actions: {
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
    getDistances(state) {
      return state.distances
    }, getTotalDistance(state) {
      let totalDistance = 0;
      for (let i = 1; i < state.locations.length; i++) {
        totalDistance += DistanceBetween(state.locations[i - 1], state.locations[i]);
      }
      return totalDistance;
    }
  }
})

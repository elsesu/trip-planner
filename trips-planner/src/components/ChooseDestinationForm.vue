<template>
  <div class="form-div">
    <h1 class="choose">Choose your destination</h1>
    <form action="" class="form">
      <div class="input-div"> <label for="currentCountry" >Enter Travel Destination Below:</label> <br>
         <input type="text"  v-model="currentCountry" @keyup="handleKeyUp" class="inputs" placeholder="Type in Country Name"></div>

      <VueDraggableNext  v-model="countries" @end="updateLocalStorage" class="dragArea list-group w-full"> 
         <div v-for="country in countries" :key="country">
            <div class="voolad">
          {{ country}}
          <div @click="removeCountry(country)" class="x-com">X</div>
            </div>
        </div>
        
         </VueDraggableNext>
     
        
       

<br>  <div class="form-div">
  <button @click.prevent="addCountry" class="btn">Add</button>
</div>
      
    </form>
  

  </div>
</template>

<script setup>
import {ref} from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

const store = useStore()

const currentCountry = computed({
  get: () => store.state.currentCountry,
  set: (value) => store.commit('setCurrentCountry', value)
})


const countries = computed(() => store.getters.getCountries);

const addCountry = () => {
  store.commit('addCountry');
};


const removeCountry = (country) => {
  store.commit('removeCountry', country);
};


</script>

<style>


.form-div{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background: rgb(44, 168, 35);
  margin: 10px;
}
.input-div{
   display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: rgb(44, 168, 35);
}

.choose{
  background: white;
  border-radius: 6px;
  padding: 8px;
  margin-top: 10px;
  font: bold;
  width: 50%;
 text-align: center;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

label{
color: white;
font: bold;
font-size: 34px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.voolad{
    padding: 10px;
    background: rgb(81, 81, 219);
   color: white;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.inputs{
    border-radius: 7px;
    background: gray;
    color: white;
    padding: 10px;
    border: none;
    width: 300px;

    border: 1px solid white;
 
}
.btn{
  padding: 4px;
   background: rgb(81, 81, 219);
   color: white;
    border-radius: 10px;
    width: 40%;
    margin-bottom: 7px;
}
.x-com{
  cursor: pointer;
}
</style>

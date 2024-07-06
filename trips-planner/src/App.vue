<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import HomeView from './views/HomeView.vue'
import './index.css'


const store = useStore()
const state = computed(() => store.state)

const increment = () => {
  store.commit('increment')
  console.log(store.state.count)
}

const decrement = () => {
  store.commit('decrement')
}


</script>

<template>
<div class="mains" >

 
 <header>
   
      <nav>
        <RouterLink to="/" class="navs">Home</RouterLink>
        <RouterLink to="/about" class="navs">About</RouterLink>
        <RouterLink to="/destinations" class="navs">Destinations</RouterLink>
      </nav>
  
  </header>
 

  <RouterView />
</div>
 
</template>

<style scoped>
header{
width: 100%;


}

.mains{
 
}



nav{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  height: 50px;
}
.navs{
  background: rgb(74, 161, 83);
  padding: 6px;
  border-radius: 6px;
  margin: 5px;
}
.navs:hover{
  background: rgb(50, 7, 240);
}

nav:first-child{
  background: rgb(83, 77, 147);
  font: bold;
  color: white;
}

</style>

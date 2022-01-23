<template>
  <Multiple />
  <Divide />
  <Subtract />
</template>

<script>
import Multiple from './components/Multiple.vue';
import Divide from './components/Divide.vue';
import Subtract from './components/Subtract.vue';

export default {
  name: 'App',
  components: {
    Multiple,
    Divide,
    Subtract,
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>

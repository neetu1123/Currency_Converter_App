<script setup>

import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
</script>

<template>
  <div class="current">
    <span>{{ store.inputTwoStore }}</span>
    <small>Currency converter app</small>
  </div>
  <!-- first selected option  -->
  <div class="select">
    <select v-model="store.selectedOneStore">
      <option v-for="(currency, index) in store.currency" :key="index">
        {{ index }}
      </option>
    </select>
  </div>

  <!-- second selected option -->
  <div class="select">
    <select v-model="store.selectedTwoStore">
      <option v-for="(currency, index) in store.currency" :key="index">
        {{ index }}
      </option>
    </select>
  </div>

  <!-- first input field  -->
  <div class="inputOne">
    <input type="number" v-model="store.inputOneStore" />
    <input type="number" v-model="store.inputTwoStore" />
  </div>

  <!-- button with click event for setter -->
  <button @click="store.convert">converter</button>
</template>

<style scoped>
.select {
  display: inline-block;
  align-content: center;
}
.inputOne
 {
  display: inline-block;
  margin: 10px;
}
#app {
  align-content: center;
}
.current {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  text-align: center;
  background-color: white;
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 5px solid hwb(330 41% 0%);
  margin: 0 auto 2rem;
}
.current span {
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.current small {
  color: rgb(53, 49, 49);
  font-style: italic;
  font-weight: bold;
  padding: 10px;
}
</style>

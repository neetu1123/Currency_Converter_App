<script setup>

import { useConverterStore } from "@/stores/converter";
import { storeToRefs } from "pinia";

const converterStore = useConverterStore();
// destructuring store
const { from, to, fromAmount, toAmount, data, fromCountryList, toCountryList } = storeToRefs(converterStore);</script>

<template>
  <div class="current">
    <span>{{ inputTwoStore }}</span>
    <small>Currency converter app</small>
  </div>
   <!-- from country selector -->
   <div id="container">
        <div>
            <select id="from" v-model="from">
                <option value="" disabled selected>Select From Country</option>
                <option v-for="country in fromCountryList" :key="country.id" :value="country" placeholder="Enter">
                    {{ country.country }}
                </option>
            </select>
            <!-- from input -->
            <input type="number" v-model="fromAmount" />
        </div>
    
        <!-- to country selector -->
        <div>
            <select id="to" v-model="to">
                <option value="" disabled selected>Select To Country</option>
                <option v-for="country in toCountryList" :key="country.id" :value="country">
                    {{ country.country }}
                </option>
            </select>
            <!-- to input -->
            <input type="number" v-model="toAmount" :disabled="true" />
        </div>
    </div>

    <div id="container">
        <!-- button to calculate currency -->
        <button @click="converterStore.currencyConverter">Convert</button>
    </div></template>

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

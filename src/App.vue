<script setup>

import { useConverterStore } from "@/stores/converter";
import { storeToRefs } from "pinia";

const converterStore = useConverterStore();
// destructuring store properties
const { selectedOne, selectedTwo , fromAmount, toAmount, data, fromCountrySelected, toCountryselected } = storeToRefs(converterStore);

</script>

<template>
  <div class="current">
    <span>{{ toAmount }}</span>
    <small>Currency converter app</small>
  </div>
   <!-- from country selector option-->
   <div id="container">
        <div>
            <select  v-model="selectedOne">
                <option value="" disabled selected>Select From Country</option>
                <option v-for="(country,index) in fromCountrySelected" :key="index" :value="country" placeholder="Enter">
                    {{ country.country }}
                </option>
            </select>
            <!-- from input attribute  -->
            <input type="number" v-model="fromAmount" />
        </div>
    
        <!-- to country selector option -->
        <div>
            <select  v-model="selectedTwo ">
                <option value="" disabled selected>Select To Country</option>
                <option v-for="(country,index) in toCountryselected" :key="index" :value="country">
                    {{ country.country }}
                </option>
            </select>
            <!--  to input attribute for show the amount  -->
            <input type="number" v-model="toAmount" />
        </div>
    </div>

    <div id="container">
        <!-- button to convert the currency  -->
        <button @click="converterStore.currencyConverter">Currency converter</button>
    </div>
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
  width: 450px;
  height: 300px;
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

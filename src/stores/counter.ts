import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  //state for currency KD = "kuwaiti dinar", BD = "Bahraini Dinar" ,OMRL="Omani Rial", BPS ="British pound sterling" , EER="european euro", USD= " US Dollor", BDR ="Brunei Dollor", NZD="new zealand", AF="Arban florin"
  interface curencyObject {
    'KD': number,
    'BD': number,
    'OMRL': number,
    'BPS': number,
    'EER': number,
    'USD': number,
    'BDR': number,
    'NZD': number,
    'AF': number,
    'INR': number
  }
  interface curencyKey {
    'KD': curencyObject,
    'BD': curencyObject,
    'OMRL': curencyObject,
    'BPS': curencyObject,
    'EER': curencyObject,
    'USD': curencyObject,
    'BDR': curencyObject,
    'NZD': curencyObject,
    'AF': curencyObject,
    'INR': curencyObject
  }
  //object of currency with key value pair
  const currency: curencyKey = {
    'KD': { 'KD': 1, 'BD': 1.23, 'OMRL': 1.26, 'BPS': 2.71, 'EER': 3.08, 'USD': 3.26, 'BDR': 4.41, 'NZD': 5.20, 'AF': 5.88, 'INR': 270.27 },
    'BD': { 'KD': 0.81, 'BD': 1, 'OMRL': 1.02, 'BPS': 2.20, 'EER': 2.50, 'USD': 2.65, 'BDR': 3.59, 'NZD': 4.23, 'AF': 4.78, 'INR': 219.71 },
    'OMRL': { 'KD': 0.80, 'BD': 0.98, 'OMRL': 1, 'BPS': 2.16, 'EER': 2.45, 'USD': 2.60, 'BDR': 3.51, 'NZD': 4.14, 'AF': 4.68, 'INR': 215.15 },
    'BPS': { 'KD': 0.37, 'BD': 0.45, 'OMRL': 0.46, 'BPS': 1, 'EER': 1.14, 'USD': 1.21, 'BDR': 1.63, 'NZD': 1.92, 'AF': 2.17, 'INR': 99.81 },
    'EER': { 'KD': 0.33, 'BD': 0.40, 'OMRL': 0.41, 'BPS': 0.88, 'EER': 1, 'USD': 1.06, 'BDR': 1.43, 'NZD': 1.69, 'AF': 1.91, 'INR': 87.87 },
    'USD': { 'KD': 0.31, 'BD': 0.38, 'OMRL': 0.39, 'BPS': 0.83, 'EER': 0.94, 'USD': 1, 'BDR': 1.35, 'NZD': 1.59, 'AF': 1.80, 'INR': 82.86 },
    'BDR': { 'KD': 0.23, 'BD': 0.28, 'OMRL': 0.28, 'BPS': 0.61, 'EER': 0.70, 'USD': 0.74, 'BDR': 1, 'NZD': 1.18, 'AF': 1.33, 'INR': 61.30 },
    'NZD': { 'KD': 0.19, 'BD': 0.24, 'OMRL': 0.24, 'BPS': 0.52, 'EER': 0.59, 'USD': 0.63, 'BDR': 0.85, 'NZD': 1, 'AF': 1.13, 'INR': 52.00 },
    'AF': { 'KD': 0.17, 'BD': 0.21, 'OMRL': 0.21, 'BPS': 0.46, 'EER': 0.52, 'USD': 0.56, 'BDR': 0.75, 'NZD': 0.88, 'AF': 1, 'INR': 46.01 },
    'INR': { 'KD': 0.037, 'BD': 0.0045, 'OMRL': 0.0046, 'BPS': 0.010, 'EER': 0.011, 'USD': 0.012, 'BDR': 0.016, 'NZD': 0.019, 'AF': 0.022, 'INR': 1 }
  }
  const selectedOneStore = ref<string>('')
  const selectedTwoStore = ref<string>('')
  const inputOneStore = ref<number>(0)
  let inputTwoStore = ref<number>(0)
  let amount = ref<number>(1)

  //for getter 
  function convert() {
    console.log(selectedOneStore.value, selectedTwoStore.value, inputOneStore.value, inputTwoStore.value)
    if (selectedOneStore.value in currency && selectedTwoStore.value in currency) {
      console.log(selectedOneStore.value, 'selected value')
      amount.value = currency[selectedOneStore.value][selectedTwoStore.value]
      console.log(amount)
      inputTwoStore.value = inputOneStore.value * amount.value
      console.log(inputTwoStore.value)

    }
  }
//return  data 
  return { currency, selectedOneStore, selectedTwoStore, inputOneStore, inputTwoStore, convert }
})

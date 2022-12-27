import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useConverterStore = defineStore('store', () => {

  interface country {
    country: string,
    rate: number
  }

  // currency data with country name  (country,  rate in USD) 
  const data: country[] = [
    { country: 'Kuwaiti Dinar', rate: 3.2520236 },
    { country: 'Bahraini Dinar', rate: 2.6595745 },
    { country: 'Omani Rial', rate: 2.5970819 },
    { country: 'British Pound Sterling', rate: 1.2259239 },
    { country: 'European Euro', rate: 1.0505704 },
    { country: 'US Dollar', rate: 1 },
    { country: 'Brunei Dollar', rate: 0.73752418 },
    { country: 'New Zealand Dollar', rate: 0.64110185 },
    { country: 'Aruban Florin', rate: 0.55865922 },
    { country: 'Indian Rupee', rate: 0.012124894 }
  ]

  let selectedOne = ref<country | string | number>('')
  let selectedTwo = ref<country | string>('')
  let fromAmount = ref<number>(0)
  let toAmount = ref<number>(0)

  let USDRate: number;

  
  // getters
  const fromCountrySelected = computed(() => data.filter((d) => d.country !== selectedTwo .value.country))
  const toCountryselected = computed(() => data.filter((d) => d.country !== selectedOne.value.country))

  // actions/setters
  // function to calculates the currency conversion
  function currencyConverter() {
    USDRate = selectedOne.value.rate >= 1 ? fromAmount.value / selectedOne.value.rate : fromAmount.value * selectedOne.value.rate;
    toAmount.value = selectedTwo .value.rate >= 1 ?USDRate* selectedTwo .value.rate : USDRate / selectedTwo .value.rate;
  }

  //return store properties 
  return {selectedOne,selectedTwo , fromAmount, toAmount, data, currencyConverter, fromCountrySelected, toCountryselected }
})
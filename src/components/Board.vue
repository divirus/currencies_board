<template>
    <div class="main">
        <div class="currencies-list selected">
            <CurrencyBox v-for="currency in selectedCurrencies" v-on:toggleCurrencyBox="toggleCurrencyBox" :id="currency.id" :key="currency.id" :currency="currency" :selected="true" />
        </div>
        <div class="currencies-list available">
            <CurrencyBox v-for="currency in currenciesCatalog" v-on:toggleCurrencyBox="toggleCurrencyBox" :id="currency.id" :key="currency.id" :currency="currency" :selected="false" />
        </div>
    </div>
</template>

<script>
import CurrencyBox from './CurrencyBox';

export default {
    name: 'Board',
    components: {
        CurrencyBox
    },
    data() {
        return {
            currencies: ['EUR', 'PLN', 'GEL', 'DKK', 'CZK', 'GBP', 'SEK', 'USD', 'RUB'],
            currenciesCatalog: []
        }
    },
    computed: {
        selectedCurrencies() {
            return this.currenciesCatalog.filter(currency => currency.selected)
        }
    },
    methods: {
        toggleCurrencyBox(event) {
            const target = event.target;
            const boxId = target.getAttribute('id') ? target.getAttribute('id') : target.parentElement.getAttribute('id');
            const state = this.currenciesCatalog.find(currency => currency.id == boxId).selected;

            this.currenciesCatalog.find(currency => currency.id == boxId).selected = !state;
        }
    },
    mounted() {
        this.currencies.forEach((currency, index) => {
            this.currenciesCatalog.push({
                id: index,
                name: currency,
                selected: false
            });
        })
    }
}
</script>

<style>
    .currencies-list {
        display: flex;
        flex-wrap: wrap;
        flex: 0 0 33%;
        margin: 5px 0;
    }
</style>
<template>
    <div class="currency-box" @click="toggleCurrencyBox" :class="[currency.selected && selected ? 'selected' : '', currency.selected && !selected ? 'checked' : '']">
        <input type="checkbox" class="currency-checkbox">
        <span class="currency-name">{{ currency.name }}</span>
        <button @click="toggleCurrencyBox" v-if="currency.selected && selected" class="uncheck-currency">X</button>
    </div>
</template>

<script>
export default {
    name: 'CurrencyBox',
    props: {
        currency: Object,
        selected: Boolean
    },
    methods: {
    toggleCurrencyBox(event) {
        if (event.currentTarget.className.includes('selected') && event.target.tagName === 'SPAN') return;
        this.$emit('toggleCurrencyBox', event);
    }
},
}
</script>

<style>
    .currency-box {
        display: inline-flex;
        height: 30px;
        width: 85px;
        border: 1px solid #a3a3a3;
        background: #ececec;
        margin: 10px auto;
        cursor: pointer;
    }

    .currency-box:hover {
        background: #dcdcdc;
    }

    .currency-box.checked {
        background: #fff;
    }

    .currency-box input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
    }

    .currency-box:not(.selected) span:before {
        content: '';
        margin: auto 6px auto 3px;
        vertical-align: text-bottom;
        display: inline-flex;
        width: 16px;
        height: 16px;
        border: 1px solid #a3a3a3;
        border-radius: 4px;
    }

    .currency-box.checked:not(.selected) span:after {
        content: 'X';
        position: relative;
        color: #ff0000;
        left: -74%;
    }

    .currency-box.selected {
        display: block;
        border: none;
        border-radius: 2px;
        margin: 9px;
    }

    .currency-box.selected .currency-name {
        display: block;
        font-weight: normal;
        color: #000;
        text-align: center;
    }

    span.currency-name {
        font-weight: 600;
        color: #1771c0;
    }

    button.uncheck-currency {
        position: relative;
        font-size: 10px;
        border-radius: 30px;
        border: 2px solid #fff;
        background: #000;
        color: #fff;
        height: 18px;
        width: 18px;
        top: -40px;
        left: 76px;
        cursor: pointer;
    }

    button.uncheck-currency:hover {
        border: 2px solid #000;
        background: #fff;
        color: #000;
    }
</style>
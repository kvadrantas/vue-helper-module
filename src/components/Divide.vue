<template>
    <div class="divide-container">
        <div>
            <h1>Divide</h1>
            <div> {{ dRez }}</div>
        </div>
        <div>
            <div>
                <label class="divide-container__label" for="">Number 1</label>
                <input v-model="sk1" type="number" name="" id="">
            </div>
            <div>
                <label class="divide-container__label" for="">Number 2</label>
                <input v-model="sk2" type="number" name="" id="">
            </div>
        </div>
        <div class="divide-container__button">
            <button @click="divide({sk1, sk2})">divide</button>
        </div>
        <div>
            <h2>Divide History</h2>
            <div class="multiple-container__history">
                <History v-for="el in dHistory" :key="el" :el="el" />
            </div>        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import History from './History.vue';

export default {
    data() {
        return {
            sk1: null,
            sk2: null,
        }
    },
    components: {
        History,
    },
    computed: {
        ...mapGetters(['dRez', 'dHistory']),
    },
    methods: {
        ...mapActions(['divide']),
    }
}
</script>

<style>
    .divide-container {
        display: flex;
        flex-direction: column;
        row-gap: 100px;
        border-right: 1px solid grey;
        width: 100%;
        height: 100%;
    }

    .divide-container__label {
        margin-right: 20px;
    }

    .divide-container__button {
        flex-basis: 0,5;
    }

    .multiple-container__history {
        display: flex;
        flex-direction: row;
        column-gap: 15px;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>
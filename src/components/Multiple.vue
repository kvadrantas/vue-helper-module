<template>
    <div class="multiple-container">
        <div>
            <h1>Multiple</h1>
            <div> {{ mRez }}</div>
        </div>
        <div>
            <div>
                <label class="multiple-container__label" for="">Number 1</label>
                <input v-model="sk1" type="number" name="" id="">
            </div>
            <div>
                <label class="multiple-container__label" for="">Number 2</label>
                <input v-model="sk2" type="number" name="" id="">
            </div>
        </div>
        <div class="multiple-container__button">
            <button @click="multiple({sk1, sk2})">Multiple</button>
        </div>
        <div>
            <h2>Multiplication History</h2>
            <div class="multiple-container__history">
                <History v-for="el in mHistory" :key="el" :el="el" />
            </div>
        </div>
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
        ...mapGetters(['mRez', 'mHistory']),
    },
    methods: {
        ...mapActions(['multiple']),
    }
}
</script>

<style>
    .multiple-container {
        display: flex;
        flex-direction: column;
        row-gap: 100px;
        border-right: 1px solid grey;
        width: 100%;
        height: 100%;
    }

    .multiple-container__label {
        margin-right: 20px;
    }

    .multiple-container__button {
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
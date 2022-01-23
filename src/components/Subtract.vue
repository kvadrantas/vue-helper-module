<template>
    <div class="subtract-container">
        <div>
            <h1>Subtract</h1>
            <div> {{ sRez }}</div>
        </div>
        <div>
            <div>
                <label class="subtract-container__label" for="">Number 1</label>
                <input v-model="sk1" type="number" name="" id="">
            </div>
            <div>
                <label class="subtract-container__label" for="">Number 2</label>
                <input v-model="sk2" type="number" name="" id="">
            </div>
        </div>
        <div class="subtract-container__button">
            <button @click="subtract({sk1, sk2})">subtract</button>
        </div>
        <div>
            <h2>Subtract History</h2>
            <div class="multiple-container__history">
                <History v-for="el in sHistory" :key="el" :el="el" />
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
        ...mapGetters(['sRez', 'sHistory']),
    },
    methods: {
        ...mapActions(['subtract']),
    }
}
</script>

<style>
    .subtract-container {
        display: flex;
        flex-direction: column;
        row-gap: 100px;
        border-right: 1px solid grey;
        width: 100%;
        height: 100%;
    }

    .subtract-container__label {
        margin-right: 20px;
    }

    .subtract-container__button {
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
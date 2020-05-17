<template>
    <section class="board">
        <div id="container">
            <div class="square"
                 v-for="(option,index) in options"
                 :id="index"
                 :key="index"
                 :style="setStyle(option)"
                 @click="checkOption(index)"
            >
                <div style="display: none;">{{counter}}</div>
            </div>
        </div>
    </section>
</template>

<script lang="js">
    export default {
        name: 'board',
        components: {},
        props: {
            options: Array,
            find: Array,
            isWinner: Function
        },
        mounted() {
        },
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            checkOption(index) {
                let result = JSON.stringify(this.options[index]) === JSON.stringify(this.find)

                if (result) {
                    this.$emit('isWinner', true);
                    let i = 0;
                    while (i < this.options.length){
                        this.options[i] = this.find;
                        i++;
                    }
                } else {
                    this.options[index] = [35, 35, 35];
                }
                this.$emit('isStarted', true);
                this.counter++
            },
            setStyle(option) {
                return {backgroundColor: `rgb(${option[0]},${option[1]},${option[2]})`}
            },

        },
        computed: {}
    }


</script>

<style scoped>
    #container {
        margin: 20px auto;
        max-width: 600px;
    }

    .square {
        width: 30%;
        background: grey;
        padding-bottom: 30%;
        float: left;
        margin: 1.66%;
        border-radius: 10%;
        transition: background 0.8s;
        -webkit-transition: background 0.8s;
        -moz-transition: background 0.8s;
    }
</style>

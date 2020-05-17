<template>
    <section class="navbar">
        <div id="header"
             :style=" isWon ?
        {backgroundColor: 'rgb' + setOptionToFind()}
        :{backgroundColor: 'steelblue'}"
        >
            <h1>
                The Great
                <br/>
                <span id="colorDisplay">RGB{{newColor}}</span>
                <br/>Guessing Game
            </h1>
        </div>
        <div id="navigator">
            <button id="reset" @click="reset">
                {{isWon ? 'Play Again!': 'New colors!'}}
            </button>


            <span class="message" :class="isStarted ? 'show' : ''">
                {{isWon ? 'You Picked Right!': 'Try Again!'}}
            </span>

            <button id="easy" class="selected" @click="easy">easy</button>
            <button id="hard" class="" @click="hard">hard</button>
        </div>
    </section>
</template>

<script lang="js">

    export default {
        name: 'navbar',
        props: {
            find: Array,
            easy: Function,
            hard: Function,
            reset: Function,
            isWon: Boolean,
            isStarted: Boolean
        },
        mounted() {
            this.setOptionToFind();
        },
        data() {
            return {
                newColor: ''
            }
        },
        methods: {
            setOptionToFind() {
                return this.newColor = "(" + this.find[0] + ", " + this.find[1] + ", " + this.find[2] + ")";
            }
        },
        computed: {}
    }


</script>

<style scoped>
    h1 {
        font-weight: normal;
        line-height: 1.1;
        padding: 20px 0;
    }

    #navigator {
        background: #ffffff;
        height: 30px;
        text-align: center;
        margin: 0;
        margin-top: -30px;
    }

    #header {
        transition: all 0.3s;
        background: steelblue;
        text-transform: uppercase;
        text-align: center;
        margin: 0;
        color: white;
    }

    #colorDisplay {
        font-size: 200%;
    }

    .selected {
        background-color: steelblue;
        color: white;
    }

    button {
        border: none;
        background-color: white;
        font-family: "Montserrat", "Avenir";
        text-transform: uppercase;
        height: 100%;
        font-weight: 700;
        letter-spacing: 1px;
        color: steelblue;
        transition: all 0.3s;
        outline: none;
    }

    button:hover {
        color: white;
        background-color: steelblue;
    }

    .message {
        color: white;
        display: inline-block;
        width: 20%;
    }
    .show{
        color: black;
    }
</style>

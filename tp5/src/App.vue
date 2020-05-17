<template>
  <div id="app">
    <Navbar :find="toFind"
            :difficulty="difficulty"
            :easy="setEasy"
            :hard="setHard"
            :reset="restart"
            :isWon="won"
            :isStarted="started"
    ></Navbar>
    <Board
            :options="optionsAvailable"
            :find="toFind"
            @isWinner="checkWin($event)"
            @isStarted="checkStarted($event)"
    ></Board>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Board from './components/board.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Board
  },
  beforeMount() {
    this.setEasy();
    this.generateOptions();
    this.setFind();

  },
  data(){
    return {
      optionsAvailable: [],
      toFind:[],
      easy: 3,
      hard: 6,
      difficulty: 3,
      won: false,
      started: false
    }
  },
  methods:{
    generateOptions(){
      this.optionsAvailable = [];
      for (let i = 0; i < this.difficulty; i++){
        this.optionsAvailable.push([this.randomInt(256),this.randomInt(256),this.randomInt(256)])
      }
    },
    setFind(){
      this.toFind =[];
      this.toFind.push(...this.optionsAvailable[this.randomInt(this.difficulty)]);
    },
    randomInt(limit) {
      return Math.floor(Math.random() * limit);
    },
    restart(){
      this.optionsAvailable = [];
      this.toFind = [];
      this.won = false;
      this.started = false
      this.generateOptions();
      this.setFind();
    },
    setHard(){
      this.difficulty = this.hard;
      this.difficulty = this.hard;
      this.restart()
    },
    setEasy(){
      this.difficulty = this.easy;
      this.restart()
    },
    checkWin($event){
      this.won = $event;
    },
    checkStarted($event){
      this.started = $event;
    }
  }
}
</script>

<style>
body {
	background: rgb(35,35,35);
	margin: 0;
	font-family: "Montserrat", "Avenir";
}
</style>

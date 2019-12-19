<template>
  <div id="app">
    <Board />
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    Board
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background: #fff;
    color: #333;
}

.main {
    max-width: 350px;
    margin: 15% auto;
    overflow: hidden;
    padding: 0 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 1px 1px 1px 1px #ccc
}
</style>

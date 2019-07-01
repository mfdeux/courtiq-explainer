<template>
  <div class="calculator">
    <label>Points</label>
    <input
      class="search-box"
      v-model="points"
      autocomplete="off"
      spellcheck="false"
    >
    <label>Field Goals Attempted</label>
    <input v-model="fieldGoalsAttempted">

    <label>Free Throws Attempted</label>
    <input v-model="freeThrowsAttempted">
    {{ points / (2 * fieldGoalsAttempted + 0.44 * freeThrowsAttempted)}}
  </div>
</template>

<script>
  export default {
    data: () => ({
      points: 25,
      fieldGoalsAttempted: 4,
      freeThrowsAttempted: 5
    })
  };
</script>

<style>
  .calculator {
    padding-top: 25px;
    padding-bottom: 25px;
  }
</style>

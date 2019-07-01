<template>
  <div>
    <input v-model="points">
    <input v-model="fieldGoalsAttempted">
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

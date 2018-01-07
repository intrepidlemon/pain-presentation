<template>
  <div class="implementation">
    <img src="./spyfall.jpg" alt="the board game spyfall" />
    <span>+</span>
    <img src="./react.svg" alt="react" />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .implementation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 5rem;
    min-width: 100vw;
    box-sizing: border-box;
    padding: 3rem;
  }

  .implementation > img {
    max-width: 25rem;
    flex-shrink: 1;
    flex-grow: 1;
  }

  .implementation > * + * {
    margin-left: 2rem;
  }
</style>

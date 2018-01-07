<template>
  <div class="demo">
    <div class="iphone">
      <iframe src="https://study.iantoxi.com/pain1"/>
    </div>
    <div class="iphone">
      <iframe src="https://study.iantoxi.com/pain1"/>
    </div>
    <div class="iphone">
      <iframe src="https://study.iantoxi.com/pain1"/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .demo {
    display: flex;
    flex-direction: row;
  }

  .demo > * + * {
    margin-left: 2rem;
  }

  .iphone {
    width: 30vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: dimgray;
    border-radius: 2rem;
  }

  iframe {
    width: 92%;
    height: 85%;
    border: none;
    box-shadow: 0 0 1rem rgba(255, 255, 255, 0.2);
  }
</style>

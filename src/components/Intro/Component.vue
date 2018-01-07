<template>
  <div>
    <div class="pill">
      <pill/>
    </div>
    <h1>"Addiction rare in patients treated with narcotics"</h1>
    <p>By Ianto Xi</p>
  </div>
</template>

<script>
import Pill from '@/components/Pill'
export default {
  name: 'Intro',
  components: {
    pill: Pill
  }
}
</script>

<style scoped>
  .pill {
    width: 5rem;
    margin: 0 auto;
  }
  h1 {
    font-weight: 900;
  }
  p {
    font-size: 1.5rem;
  }
</style>

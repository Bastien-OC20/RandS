<template>
  <button @click="playSound">
    Play me!
  </button>
</template>

<script>
export default {
  data () {
    return {
      audio: null
    }
  },
  computed: {
    isSoundEnabled () {
      return this.$store.state.isSoundEnabled
    }
  },
  mounted () {
    this.$store.commit('initializeSound')
  },
  methods: {
    playSound () {
      if (this.isSoundEnabled) {
        this.audio = new Audio(require('~/static/sounds/Cigale.mp3'))
        this.audio.play()
      }
    }
  }
}
</script>

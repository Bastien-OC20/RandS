<template>
  <button @click="toggleSound">
    Toggle my sound preference!
  </button>
</template>

<script>
export default {
  computed: {
    isSoundEnabled () {
      return this.$store.state.isSoundEnabled
    }
  },
  mounted () {
    this.$store.commit('initializeSound')
  },
  methods: {
    toggleSound () {
      this.$store.commit('toggleSound')
    }
  }
}
</script>

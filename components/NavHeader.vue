<template>
  <div class="NavHeader">
    <nav class="navbar justify-content-around">
      <NavBrand />
    </nav>
  </div>
</template>

<script>
import NavBrand from '~/components/NavBrand'

export default {
  name: 'NavHeader',
  components: {
    NavBrand
  },
  computed: {

  }
}
</script>

<style lang="scss">
    .NavHeader {
background: linear-gradient(1deg,#808080, #807B79, #808080, #807380 );
border: 0.1em solid #778073;
}
</style>

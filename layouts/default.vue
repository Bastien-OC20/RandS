<template>
  <section class="d-flex flex-column justify-content-center text-center">
    <NavHeader />
    <Nuxt />
    <Footer />
  </section>
</template>
<script>
import Footer from '~/components/Footer'
import NavHeader from '~/components/NavHeader'

export default {

  components: {
    Footer,
    NavHeader
  },
  mounted () {

  }

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');

* {
  font-family: 'New Tegomin', serif ! important;
  font-weight: bolder;
  text-decoration: none;
  box-sizing: border-box;
  color: #000000;
  &:hover{
    text-decoration: none;
    color: #35495e;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a{
  text-decoration: none ! important;
}

</style>

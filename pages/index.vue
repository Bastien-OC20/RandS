<template>
  <section class="container index row justify-content-around d-flex flex-column align-items-center text-center">
    <article class="container-title d-flex flex-column justify-content-center justify-items-center text-center">
      <Logo />
      <h1 class="index_Title">
        Développeur Web frontend<br>made in Marseille
      </h1>
      <Cigale />
      <p class="index_Subheading">
        Et ses environs ...
      </p>
    </article>
    <article id="boxC" class="index_Links d-flex flex-column justify-content-center justify-items-center">
      <a
        title="bas de page"
        alt="bas de page"
        aria-label="bas de page"
        @click="scrollToDown()"
      >
        <Arrowdown />
      </a>
      <Nuxt-link
        :to="{path: '/Work',hash:'work' }"
        title="Mes projets"
        alt="Allez à la page des projets"
        aria-label="Allez à la page des projets"
        class="index_Links_Nuxtlink d-flex flex-row justify-content-center"
      >
        <Bgwork />
      </Nuxt-link>
    </article>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Arrowdown from '~/components/Arrowdown.vue'
import Bgwork from '~/components/Bgwork.vue'
import Cigale from '~/components/Cigale.vue'

export default {
  name: 'Index',
  path: '/',
  components: {
    Logo,
    Arrowdown,
    Bgwork,
    Cigale
  },
  transition: 'fadeOpacity',
  methods: {
    scrollToDown () {
      window.scrollTo({ top: 800 })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');

html {
  font-family: 'New Tegomin', serif ! important;
  text-decoration: none;
  box-sizing: border-box;
  background: linear-gradient(1deg #e7e7e7, #bbbbbb, #808080);
}

.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}
.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}

.return.nuxt-link-exact-active.nuxt-link-active{
  display:block;
  border-bottom: 5px solid orangered;
  width:3.5em;
}

.index {
  margin: 0 auto;
  min-height: 100vh;
  &_Title {
  font-size: 2em;
  color: #35495e;
  letter-spacing: 1px;
  padding-top: 1em;
  &:hover {
    color: #35495e;
  }
}
&_Subheading {
  font-size: 1em;
  color: #526488;
  word-spacing: 5px;
  &:hover {
    color: #35495e;
  }
}
&_Links {
  margin-top: 15px;
}
}

</style>

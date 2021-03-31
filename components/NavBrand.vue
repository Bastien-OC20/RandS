<template>
  <div
    class="navLink d-flex flex-row justify-content-around"
  >
    <div class="sound d-flex justify-content-left">
      <!-- <Tooglesound />
      <Playsound /> -->
    </div>
    <div class=" element1 d-flex ">
      <Nuxt-link
        exact
        to="/"
        class="return"
        title="Accueil"
        alt="Accueil"
        aria-label="Accueil"
      >
        <img
          class="LogoSite"
          src="~/static/svg/logo.svg"
          title="LogoSite"
          alt="LogoSite"
          aria-label="LogoSite"
        >
      </Nuxt-link>
    </div>
    <div class="element2 d-flex ">
      <Nuxt-link
        :to="{path: '/About',hash:'about' }"
        class="presentation"
        title="presentation"
        alt="presentation"
        aria-label="presentation"
      >
        About me
      </Nuxt-link>
    </div>
  </div>
</template>

<script>

// import Playsound from '~/components/Playsound.vue'
// import Tooglesound from '~/components/Tooglesound.vue'

export default {
  name: 'NavBrand',
  components: {
    // Playsound,
    // Tooglesound
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

.LogoSite{
    width: 52px;
    display: flex;
    margin-bottom: 0.4em;
}

.element1{
    margin-right: 1em;
}

.element2{
    margin-left: 5em;
    font-size: 1em;
}

.presentation{
    color: orange;
    font-size: 1.5em;
    & Nuxtlink {
            color: #FB8C00;
            &:hover{
                color:orangered;
            }
        }
}

@media (min-width: 768px) and (max-width: 991.98px) {
.element1{
    margin-right: 5em;
}

.element2{
    margin-left: 20em;
}

.presentation{
    color: orange;
    font-size: 1.5em;
    & Nuxtlink {
            color: #FB8C00;
            &:hover{
                color:orangered;
            }
        }
}
}

@media (min-width: 992px) and (max-width: 1199.98px) {
.element1{
    margin-right: 5em;
}

.element2{
    margin-left: 20em;
}

.presentation{
    color: orange;
    font-size: 1.5em;
    & Nuxtlink {
            color: #FB8C00;
            &:hover{
                color:orangered;
            }
        }
}
}

@media (min-width: 1200px) {
.element1{
    margin-right: 5em;
}

.element2{
    margin-left: 20em;
    height: 52px;
}

.presentation{
    color: orange;
    font-size: 1.5em;
}
}
</style>

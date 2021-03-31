<template
  id="about"
>
  <section
    class="mainAbout"
  >
    <h2 class="titrAbout">
      {{ titre }}
    </h2>
    <article id="boxA" class=" description">
      <p class="text">
        {{ intro }}
      </p>
      <p class="text">
        {{ dev }}
      </p>
      <p class="text">
        {{ conclu }}
      </p>
    </article>
    <Cigale />
    <section>
      <button>
        Mon CV
      </button>
    </section>
    <article class="competence">
      <section id="boxB">
        <h3 class="titreComp">
          {{ outils }}
        </h3>
        <div class="outils">
          <img
            class=" logo"
            alt="visual studio code"
            title="visual studio code"
            aria-label="visual studio code"
            src="~/static/svg/visual-studio-code.svg"
          ><img
            class="logoPhoto"
            alt="photoshop"
            title="photoshop"
            aria-label="photoshop"
            src="~/static/svg/photoshop.svg"
          >
          <img
            class=" logo"
            alt="git"
            title="git"
            aria-label="git"
            src="~/static/svg/git.svg"
          >
          <img
            class=" logo"
            alt="gitHub"
            title="gitHub"
            aria-label="gitHub"
            src="~/static/svg/github.svg"
          ><img
            class=" logo"
            alt="Bash"
            title="Bash"
            aria-label="Bash"
            src="~/static/svg/Asset1.svg"
          >
          <img
            class=" logo"
            alt="Windows10"
            title="windows10"
            aria-label="windows10"
            src="~/static/svg/windows.svg"
          >
        </div>
      </section>
      <section id="boxC">
        <h3 class="titreComp">
          {{ competences }}
        </h3>
        <div id="boxD" class="createur ">
          <img
            class=" logo"
            alt="HTML5"
            title="HTML5"
            aria-label="HTML5"
            src="~/static/svg/html5.svg"
          >
          <img
            class=" logo"
            alt="CSS3"
            title="CSS3"
            aria-label="CSS3"
            src="~/static/svg/css3.svg"
          >
          <img
            class=" logoSass"
            alt="SaSS"
            title="SaSS"
            aria-label="SaSS"
            src="~/static/svg/node-sass.svg"
          >
          <img
            class=" logo"
            alt="JavaScript"
            title="JavaScript"
            aria-label="JavaScript"
            src="~/static/svg/javascript.svg"
          >
          <img
            class=" logo"
            alt="Angular"
            title="Angular"
            aria-label="Angular"
            src="~/static/svg/angular.svg"
          >
          <img
            class=" logonode"
            alt="nodejS"
            title="nodeJS"
            aria-label="nodeJS"
            src="~/static/svg/nodejs.svg"
          >
          <img
            class=" logo"
            alt="MongoDB"
            title="MongoDB"
            aria-label="MongoDB"
            src="~/static/svg/mongodb.svg"
          >
          <img
            class=" logo"
            alt="VueJS"
            title="VueJS"
            aria-label="VueJS"
            src="~/static/svg/vue.svg"
          >
        </div>
      </section>
    </article>
  </section>
</template>

<script>

export default {
  name: 'About',
  transition: 'fadeOpacity',
  data () {
    return {
      titre: 'About me',
      intro:
        'Bonjour, je m’appelle Sébastien R. et je suis développeur web. Je ne l’ai pas toujours été : dans une autre vie professionnelle j’étais éducateur spécialisé.',

      dev:
        'Rien à voir avec le numérique mais ce premier métier m’a permis de développer mes capacités d’écoute, de travail en équipe, d’autonomie aussi, toutes qualités indispensables aujourd’hui dans ce nouveau métier. Passionné depuis toujours par le numérique, la formation de développeur a été plus qu’une évidence. J’ai acquis ainsi toute la technicité et le savoir-faire en front-end (JavaScript, framework, Vue.js et Nuxt.js...), back-end (Mongodb, MySQL, express.js, angular.js, node.js...)',

      conclu:
        'Nouvelles techniques, nouveaux langages, j’ai eu l’occasion de mettre en pratique, ma capacité d’analyse face à un problème complexe, ma curiosité, la patience et la rigueur, et être force de proposition au service d’un projet.',

      outils: 'Mes outils',
      competences: 'Mes domaines de compétences',
      url: '~/assets/downloads/Sébastien_Rapuzzi_CV_2020.pdf',
      scale: 2
    }
  }
}

</script>

<style lang="scss">

.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}
.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}

.presentation.nuxt-link-exact-active.nuxt-link-active{
  border-bottom: 3px solid orangered;
  line-height: 0.5em;
}

.mainAbout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  min-height: 100vh;
}

.titrAbout {
  font-size: 2.5em;
  color:black;
  padding: 0.5em;
  &:hover{
      color:black;
  }
}

.description {
  display: flex;
  flex-direction: column;
  margin: 1.2em;
  font-size: 1.2em;
}
.text {
  padding: 0.5em;
    text-align: left;
    color:black;
  &:hover{
      color:black;
  }
}

.pdf {
  display: flex;
  margin: auto;
  border: 1px solid orangered;
  width: 70%;
  height: 100%;
}

.competence {
  display: flex;
  flex-direction: column;
  color:black;
  &:hover{
      color:black;
  }
}
.titreComp {
  font-size: 2em;
  margin: 1.5em;
  color:black;
  &:hover{
      color:black;
  }
}

.orientation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em;
}
.button {
  margin: 0.5em;
  color: orangered;
  background: linear-gradient(
    45deg,
    rgb(58, 119, 150),
    rgb(26, 109, 150),
    #069
  );
  border: 1px solid;
  border-radius: 5px;
  transform: scale(1);
  box-shadow: 15px 15px 8px rgb(160, 160, 160);
  transition-property: transform;
  transition-duration: 1s, 1s;
  &:hover {
    transform: scale(1.1);
  }
}
.logoPhoto,
.logoSass,
.logonode {
  width: 5em;
  padding: 1.1em;
}

.colorText {
  color: orangered;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .logoPhoto,
  .logoSass,
  .logonode {
    width: 5em;
    padding: 0.7em;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .logoPhoto,
  .logoSass,
  .logonode {
    width: 4em;
    padding: 0.7em;
  }
  .competence {
  display: flex;
  flex-direction: row !important;
  justify-content: space-around;
}
}

@media (min-width: 1200px) {
  .logoPhoto,
  .logoSass,
  .logonode {
    width: 3em;
    padding: 0.5em;
  }

  .description {
    padding: 2em;
    font-size: 1.2em;
  }
  .competence {
  display: flex;
  flex-direction: row !important;
  justify-content: space-around;
}

  .logo {
    margin: 0.5em;
  }

  .orientation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2em;
  }
  .button {
    margin: 1em;
    color: blue;
    width: 6em;
  }
}
</style>

<template
  id="work"
>
  <section class="projet row justify-content-center text-center d-flex  p-4">
    <h2 class="projet-titre col-lg-12 p-3">
      My Works
    </h2>
    <Cigale />
    <article
      v-for="work in works"
      :key="work.id"
      class="projet_card col-lg-4 d-flex flex-column justify-content-center justify-item-center"
    >
      <div class="projet_card-titre">
        <h3
          id="titreMod"
          :key="work.titre"
        >
          {{ work.titre }}
        </h3>
        <h4
          id="SoustitreMod"
          :key="work.Soustitre"
        >
          {{ work.Soustitre }}
        </h4>
        <p
          id="detailsMod"
          :key="work.details"
        >
          {{ work.details }}
        </p>
      </div>
      <div
        class="projet_card-body d-flex justify-content-center justify-item-center p-2"
      >
        <img
          id="imgMod"
          :key="work.imgURL"
          :src="'./bg/'+ work.imgURL"
          class="projet_card-body_img"
          alt="Aperçu du projet"
          title="image du projet"
          aria-label="image du projet"
        >
      </div>
      <aside
        class="projet_card-body-card d-flex flex-column justify-content-center justify-item-center p-2"
      >
        <h4 class="d-flex flex-row justify-content-center">
          Made with
        </h4>
        <div
          class="projet_card-body-card_mod"
        >
          <img
            id="imgMod1"
            :key="work.imgURL1"
            :src="'./svg/'+ work.imgURL1"
            class="projet_card-body-card_mod-logo"
            :alt="'made with ' + work.imgURL1 "
            :title="'made with ' + work.imgURL1 "
            :aria-label="'made with ' + work.imgURL1 "
          >
          <img
            id="imgMod2"
            :key="work.imgURL2"
            :src="'./svg/'+ work.imgURL2"
            class="projet_card-body-card_mod-logo"
            :alt="'made with ' + work.imgURL2 "
            :title="'made with ' + work.imgURL2 "
            :aria-label="'made with ' + work.imgURL2 "
          >
          <img
            id="imgMod3"
            :key="work.imgURL3"
            :src="'./svg/'+ work.imgURL3"
            class="projet_card-body-card_mod-logo"
            :alt="'made with ' + work.imgURL3 "
            :title="'made with ' + work.imgURL3 "
            :aria-label="'made with ' + work.imgURL3 "
          >
          <img
            id="imgMod4"
            :key="work.imgURL4"
            :src="'./svg/'+ work.imgURL4"
            class="projet_card-body-card_mod-logo"
            :alt="'made with ' + work.imgURL4 "
            :title="'made with ' + work.imgURL4 "
            :aria-label="'made with ' + work.imgURL4 "
          >
          <img
            id="imgMod5"
            :key="work.imgURL5"
            :src="'./svg/'+ work.imgURL5"
            class="projet_card-body-card_mod-logo"
            :alt="'made with ' + work.imgURL5 "
            :title="'made with ' + work.imgURL5 "
            :aria-label="'made with ' + work.imgURL5 "
          >
          <img
            id="imgMod6"
            :key="work.imgURL6"
            :src="'./svg/'+ work.imgURL6"
            class="projet_card-body-card_mod-logo"
            :alt="'made with ' + work.imgURL6 "
            :title="'made with ' + work.imgURL6 "
            :aria-label="'made with ' + work.imgURL6 "
          >
        </div>
      </aside>
      <div
        class="projet_card-footer"
      >
        <button class="btn col-lg-4 m-2">
          <a
            id="linkplusMod"
            :key="work.linkPlus"
            :href="work.linkplus"
            target="_blank"
            title="Allez sur Github"
            alt="Allez sur Github"
            aria-label="Allez sur Github"
          ><img
             class="github"
             src="~/static/svg/github.svg"
             title="Logo GitHub"
             alt="Logo GitHub"
             aria-label="Logo GitHub"
           >
            <p class="text-plus-detail">+ de détails</p>
          </a>
        </button>
        <button
          v-if="(work.linkdemo !== null)"
          class="btn col-lg-4 m-2"
        >
          <a
            id="linkdemoMod"
            :key="work.linkemo"
            :href="work.linkdemo"
            target="_blank"
            title="Voir la démo"
            alt="Voir la démo"
            aria-label="Voir la démo"
          ><img
             class="demo"
             src="~/static/svg/demo.svg"
             title="Logo démo"
             alt="Logo démo"
             aria-label="Logo démo"
           >
            <p class="text-plus-detail">Voir la démo</p>
          </a>
        </button>
      </div>
    </article>
  </section>
</template>

<script>

import Cigale from '~/components/Cigale.vue'

export default {
  name: 'Work',
  components: {
    Cigale
  },
  transition: 'fadeOpacity',
  data () {
    return {
      works: [
        {
          titre: 'Site E-vitrine',
          Soustitre: 'Idéal et simple',
          details: 'Site présentant votre activité sur le web, simple et éfficace',
          imgURL: 'bg-w1.svg',
          linkplus: 'https://github.com/Bastien-OC20/ocr-projet2',
          linkdemo: 'https://bastien-oc20.github.io/ocr-projet2/',
          imgURL1: 'html5.svg',
          imgURL2: 'css3.svg',
          imgURL3: 'bootstrap5.svg',
          imgURL4: 'responsive.svg',
          imgURL5: 'w3c.svg',
          imgURL6: 'wcag.svg'
        },
        {
          titre: 'Site animé',
          Soustitre: 'Effets et animations',
          details: 'Site plus perfectionné, contenant des animations et effets de style',
          imgURL: 'bg-w2.svg',
          linkplus: 'https://github.com/Bastien-OC20/ocr-projet3',
          linkdemo: 'https://bastien-oc20.github.io/ocr-projet3/',
          imgURL1: 'html5.svg',
          imgURL2: 'css3.svg',
          imgURL3: 'node-sass.svg',
          imgURL4: 'responsive.svg',
          imgURL5: 'w3c.svg',
          imgURL6: 'wcag.svg'
        },
        {
          titre: 'Site SEO',
          Soustitre: 'Rechercher et trouver',
          details: 'Optimisation de référencement naturel améliorant la visibilité sur le web',
          imgURL: 'bg-w3.svg',
          linkplus: 'https://github.com/Bastien-OC20/ocr-projet4',
          linkdemo: 'https://bastien-oc20.github.io/ocr-projet4/',
          imgURL1: 'lighthouse.svg',
          imgURL2: 'materialui.svg',
          imgURL3: 'wave.svg',
          imgURL4: 'responsive.svg',
          imgURL5: 'w3c.svg',
          imgURL6: 'wcag.svg'
        },
        {
          titre: 'Site Dynamique | E-commerce',
          Soustitre: 'Site interactif d\'e-shoppping',
          details: 'Installation du frontend : Du choix de l\'appareil photo jusqu\'à la commande',
          imgURL: 'bg-w4.svg',
          linkplus: 'https://github.com/Bastien-OC20/ocr-projet5',
          linkdemo: 'https://bastien-oc20.github.io/ocr-projet5/front-end/index.html',
          imgURL1: 'angular.svg',
          imgURL2: 'javascript.svg',
          imgURL3: 'bootstrap5.svg',
          imgURL4: 'nodejs.svg',
          imgURL5: 'api.svg',
          imgURL6: 'npm.svg'
        },
        {
          titre: 'Site Dynamique | Api de notations',
          Soustitre: 'Site interactif d\'avis culinaires',
          details: 'Création du Backend : De l\'ajout d\'une sauce jusqu\'à son Like',
          imgURL: 'bg-w5.svg',
          linkplus: 'https://github.com/Bastien-OC20/ocr-projet6',
          linkdemo: null,
          imgURL1: 'nodejs.svg',
          imgURL2: 'ExpressJS.svg',
          imgURL3: 'mongodb.svg',
          imgURL4: 'owasp.svg',
          imgURL5: 'api.svg',
          imgURL6: 'npm.svg'
        },
        {
          titre: 'Site Dynamique | Réseau social',
          Soustitre: 'Site réseau social d\'entreprise',
          details: 'Création du site de communication interne complet',
          imgURL: 'bg-w6.svg',
          linkplus: 'https://github.com/Bastien-OC20/ocr-projet7',
          linkdemo: null,
          imgURL1: 'vue.svg',
          imgURL2: 'mysql.svg',
          imgURL3: 'bootstrap5.svg',
          imgURL4: 'owasp.svg',
          imgURL5: 'api.svg',
          imgURL6: 'npm.svg'
        }
      ],
      hover: false
    }
  },
  methods: {

    function (work) {
      localStorage.setItem('titre', work.titre)
      document.getElementById('titreMod').textContent = `${work.titre}`

      localStorage.setItem('Soustitre', work.Soustitre)
      document.getElementById('SoustitreMod').textContent = `${work.Soustitre}`

      localStorage.setItem('details', work.details)
      document.getElementById('detailsMod').textContent = `${work.details}`

      localStorage.setItem('imgURL', work.imgURL)
      document.getElementById('imgMod').src = `${work.imgURL}`
      work.imgURL.split('.').slice(0, -1).join('.')

      localStorage.setItem('linkplus', work.linkplus)
      document.getElementById('linkplusMod').src = `${work.linkplus}`

      localStorage.setItem('linkdemo', work.linkdemo)
      document.getElementById('linkdemoMod').src = `${work.linkdemo}`

      localStorage.setItem('imgURL1', work.imgURL1)
      document.getElementById('imgMod1').src = `${work.imgURL1}`

      localStorage.setItem('imgURL2', work.imgURL2)
      document.getElementById('imgMod2').src = `${work.imgURL2}`

      localStorage.setItem('imgURL3', work.imgURL3)
      document.getElementById('imgMod3').src = `${work.imgURL3}`

      localStorage.setItem('imgURL4', work.imgURL4)
      document.getElementById('imgMod4').src = `${work.imgURL4}`

      localStorage.setItem('imgURL5', work.imgURL5)
      document.getElementById('imgMod5').src = `${work.imgURL5}`

      localStorage.setItem('imgURL6', work.imgURL6)
      document.getElementById('imgMod6').src = `${work.imgURL6}`
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

.bouton-nav{
  font-size: 2em;
}

.projet{
  &-titre {
    font-size: 3em;
    color: black;
    margin-bottom: 2em;
    &:hover{
      color: black;
    }
  }
  &_card{
    border:1px solid #3949ab;
    border-radius: 0.5em;
    margin: 1em;
    padding: 0.5em;
    &-titre{
      background: linear-gradient(1deg, #5c6bc0, #3f51b5, #3949ab);
      border-radius: 0.5em 0.5em 0em 0em;
      padding: 1em;
      color: #fb8c00;
    }
    &-body{
      &_img{
        width: 20em;
      }
      &-card{
        &_mod{
      &-logo{
          width: 42px;
          padding:-1em;
        }
      }
      }
    }
  }
}

#titreMod{
  font-size: 2em;
  text-align: center;
  color: orange;
}
 #SoustitreMod{
   font-size: 1.5em;
   color: orange;
 }
 #detailsMod{
   font-size: 1em;
   color: orange;
   &:hover{
     color:orange;
   }
 }

.github, .demo{
  width: 42px;
  padding: 0.5em;
}

@media (min-width: 768px) and (max-width: 991.98px) {

}

@media (min-width: 992px) and (max-width: 1199.98px) {

}

@media (min-width: 1200px) {

}
</style>

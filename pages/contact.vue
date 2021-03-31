<template
  id="contact"
>
  <section class="contact col-lg-8 justify-content-center text-center d-flex flex-column">
    <h2 class="contact-titre">
      Contact
    </h2>
    <p class="contact-desc">
      Besoin de visibilité ? De proposer un service web ? ou améliorer votre activité web, parlons en !
    </p>
    <Cigale />
    <section class="contact-card_bloc d-flex flex-column justify-content-center">
      <article class="contact-card_bloc_info d-flex flex-column justify-content-center justify-items-center text-center">
        <div>
          <address>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11615.813784123753!2d5.435346821874996!3d43.29429660010652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1616443107606!5m2!1sfr!2sfr"
              width="400"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            />
          </address>
          <div class="phone card-text d-flex flex-row justify-content-center">
            <img
              class="logo-phone"
              src="~/assets/svg/phone.svg"
              alt="phone"
              title="téléphonez"
            >
            <p class="typo">
              <a href="tel:+33626705813" title="Téléphonez">
                <br>
                +33 626 705 813
              </a>
            </p>
          </div>
          <p class="typo">
            <a
              href="mailto:bastien.rapuzzi@gmail.com?subject=the&nbsp;subject&cc=cc@example.com&body=Main&nbsp;text&nbsp;of&nbsp;the&nbsp;mail"
              title="Contacter"
            >
              <img
                class="logo-mail"
                src="~/assets/svg/gmail.svg"
                alt="email"
                title="email"
              >
              bastien.rapuzzi@gmail.com
            </a>
          </p>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
import Cigale from '~/components/Cigale.vue'

export default {
  name: 'Footer',
  components: {
    Cigale
  },
  transition: 'fadeOpacity',
  data () {
    return {

    }
  },
  methods: {
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

.logo {
  width :42px;
  padding: 0.5em;
}

.contact {
  margin: 0 auto;
  min-height: 100vh;
  &-titre {
    font-size: 3em;
    color:black;
    &:hover {
      color: black;
    }
  }
  &-desc{
    color: black;
    &:hover {
      color:black;
    }
  }
  &-card{
    &_description{
      margin:0.5em;
      padding:0.5em;
      &_text{
        color: #35495e;
        &:hover {
    color: #35495e;
  }
      }
    }
    &_bloc{
  &_formulaire {
    border: #ffa500 1px solid;
    border-radius: 0.5em;
  }
  &_info {
    margin: 0.5em;
    background: linear-gradient(1deg,  #FAC10C, #FFA726, #FF9800, #FB8C00, #FA4A0C);
    border-radius: 0.5em;
    a {
      color: #3949ab;
      :hover {
        color: #2e7d32;
      }
    }
  }
  }
}
}
.logo-phone, .logo-mail{
  width:42px;
  padding:0.5em;
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .contact {
    margin: 0 auto;
    min-height: 100vh;
    &-card{
      &_bloc{
    &_info {
      margin: 0em;
    }
      }
    }
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .contact {
    margin: 0 auto;
    min-height: 100vh;
    &-card{
      &_bloc{
        display: flex ;
        padding : 2em;
    &_info {
      margin: 0em;
    }
    }
    &_formulaire{
      display: flex;
      flex-direction :row;
    }
    }
  }
}

@media (min-width: 1200px) {
  .contact {
    min-height: 100vh;
    &-titre {
      height: 2em;
    }
    &-card{
      &_bloc{
        display: flex ;
        padding:2em;
        & address{
          padding: 2em;
        }
    &_info {
      margin: 0em;
    }
      }
    }
  }
}
</style>

<template>
  <section class="footer flex-row d-flex justify-content-center text-center p-3 m-1">
    <article
      class="footer-contact col-lg-4"
    >
      <Nuxt-link
        :to="{path: '/contact',hash:'contact' }"
        title="Contact"
        alt="Allez à la page contact"
        aria-label="Allez à la page contact"
        class="footer-contact_Nuxtlink"
      >
        Contact
      </Nuxt-link>
    </article>
    <article
      class="footer-link col-lg-4"
    >
      <a
        href="https://www.linkedin.com/in/s%C3%A9bastien-r/"
        target="_blank"
        class="footer-link_icon"
        alt="Rejoindre mon réseau"
        title="Rejoindre mon réseau"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42 42"
          class="footer-link_icon--linkedin img-fluid"
        >
          <path
            d="M9,4A5.01532,5.01532,0,0,0,4,9V41a5.01532,5.01532,0,0,0,5,5H41a5.01532,5.01532,0,0,0,5-5V9a5.01532,5.01532,0,0,0-5-5ZM9,6H41a2.98524,2.98524,0,0,1,3,3V41a2.98524,2.98524,0,0,1-3,3H9a2.98524,2.98524,0,0,1-3-3V9A2.98524,2.98524,0,0,1,9,6Zm5,5.01172a4.31877,4.31877,0,0,0-2.81055.9414,3.29673,3.29673,0,0,0-1.17773,2.51368,3.68939,3.68939,0,0,0,3.67969,3.46679l.0039.002A.98814.98814,0,0,0,14,17.98828a3.74293,3.74293,0,0,0,3.98828-3.52148q-.00027-.0264-.002-.05274A3.78746,3.78746,0,0,0,14,11.01172Zm0,1.97656c1.39223,0,1.942.62176,2.002,1.50391-.01215.85624-.54186,1.51953-2.002,1.51953-1.38541,0-2.01172-.70949-2.01172-1.54492a1.22549,1.22549,0,0,1,.47266-1.002A2.36165,2.36165,0,0,1,14,12.98828ZM11,19a1.00011,1.00011,0,0,0-1,1V39a1.0001,1.0001,0,0,0,1,1h6a1.0001,1.0001,0,0,0,1-1V20a1.00011,1.00011,0,0,0-1-1Zm9,0a1.00011,1.00011,0,0,0-1,1V39a1.0001,1.0001,0,0,0,1,1h6a1.0001,1.0001,0,0,0,1-1V29a3.82985,3.82985,0,0,1,.625-2.19531,2.00359,2.00359,0,0,1,1.85742-.84766,2.16394,2.16394,0,0,1,1.90235.88477A3.70154,3.70154,0,0,1,32,29V39a1.0001,1.0001,0,0,0,1,1h6a1.0001,1.0001,0,0,0,1-1V28.26172a9.77385,9.77385,0,0,0-2.38086-6.89453A7.8711,7.8711,0,0,0,31.8125,19,8.729,8.729,0,0,0,27,20.42383V20a1.00011,1.00011,0,0,0-1-1Zm-8,2h4V38H12Zm9,0h4v1.56055a1.0001,1.0001,0,0,0,1.79883.60156A6.28175,6.28175,0,0,1,31.8125,21,5.801,5.801,0,0,1,36.168,22.74219,7.7393,7.7393,0,0,1,38,28.26172V38H34V29a5.57158,5.57158,0,0,0-1.00977-3.35352A4.35163,4.35163,0,0,0,29.51758,23.957a4.20272,4.20272,0,0,0-3.502,1.66211A5.66293,5.66293,0,0,0,25,29v9H21Z"
            transform="translate(-4 -4)"
            fill="#fb8c00"
          />
        </svg>
      </a>
    </article>
    <article
      class="footer-legale col-lg-4"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      Mentions légales
    </article>
    <Mention v-if="hover" class="footer-legale_card d-flex flex-column justify-content-center" />
  </section>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss">

.footer{
    background: linear-gradient(1deg, #7986CB, #5C6BC0 ,#3F51B5,#3949AB, #6C41AB);
    border-radius: 0.5em;
    margin-top: 2em;
    &-contact{
        font-size:1em;
        padding-top:0.5em;
        &_Nuxtlink {
            color: #FB8C00;
            &:hover{
                color:orangered;
            }
        }
    }
    &-link{
        &_icon{
            &--linkedin{
                width: 32px;
                padding-top: 0.5em;
        }
    }
}
    &-legale{
        font-size: 1em;
        padding-top: 0.5em;
        color: #FB8C00;
        &:hover {
    color: orangered;
  }
        &_Nuxtlink {
            color: #FB8C00;
            &:hover{
                color:orangered;
            }
        }
        &_card{
          z-index:1;
          position: absolute;
          top: 5em;
          background: linear-gradient(90deg, #7986CB, #5C6BC0 ,#3F51B5,#3949AB);
          border-radius:0.5em;
          border: 5px solid white;
          text-decoration:none;
        }
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .footer{
    flex-direction: row;
    background: linear-gradient(90deg, #7986CB, #5C6BC0 ,#3F51B5,#3949AB);
    border-radius: 0.5em;
    margin-top: 2em;
    &-contact{
        font-size:1em;
        padding-top:0.5em;
        &_Nuxtlink {
            color: #EF6C00;
            &:hover{
                color:orangered;
            }
        }
    }
    &-link{
        &_icon{
            &--linkedin{
                width: 32px;
                padding-top: 0.5em;
        }
    }
}
    &-legale{
        font-size: 1em;
        padding-top: 0.5em;
        &_Nuxtlink {
            color: #FB8C00;
            &:hover{
                color:orangered;
            }
        }
    }
}
}

@media (min-width: 992px) and (max-width: 1199.98px) {
}

@media (min-width: 1200px) {

.footer{
    &-contact{
        font-size:1.5em;

    }
    &-legale{
        font-size: 1.5em;

    }
}
}
</style>

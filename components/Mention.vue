<template>
  <section
    class="contact row justify-content-center  d-flex text-decoration-none p-4"
  >
    <h2 class="contact-titre col-lg-12 p-3 text-center">
      Mentions Légales
    </h2>
    <h4 class="text-center">
      Ce site est édité par :
    </h4>

    <h4 class="text-center">
      Pour les personnes physiques :
    </h4>
    <ul class="text-left">
      <li>Nom</li>
      <li>Prénoms</li>
      <li>Domicile</li>
      <li>Numéro de téléphone</li>
      <li>Le cas échéant : numéro d’inscription au registre du commerce et des sociétés (RCS) ou au répertoire des métiers (RM).</li>
    </ul>
    <h4 class="text-center">
      Pour les personnes morales :
    </h4>
    <ul class="text-left">
      <li>Dénomination ou raison sociale.</li>
      <li>Siège social.</li>
      <li>Numéro de téléphone.</li>
      <li>Le cas échéant : numéro d’inscription au registre du commerce et des sociétés (RCS) ou au répertoire des métiers (RM).</li>
      <li>Capital social.</li>
      <li>Adresse du siège social.</li>
      <li>Nom du directeur ou du codirecteur de la publication.</li>

      <li>Le cas échéant : nom du responsable de la rédaction.</li>
    </ul>
    <h4 class="text-center">
      Ce site est hébergé par :
    </h4>
    <ul class="text-left">
      <li class="text-decoration-none">
        Nom
      </li>
      <li>Dénomination ou raison sociale.</li>
      <li>Adresse.</li>
      <li>Numéro de téléphone.</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Mention',

  data () {
    return {}
  },
  methods: {

  }
}

</script>

<style lang="scss">

ul, li {
    text-decoration: none;
    color: black;
}

@media (min-width: 768px) and (max-width: 991.98px) {

}

@media (min-width: 992px) and (max-width: 1199.98px) {

}

@media (min-width: 1200px) {

}
</style>

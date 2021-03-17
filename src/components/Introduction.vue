<template>
  <Slide>
    <img class="inline-block w-80" :src="Vantea"/>
    <h1>Vantea Smart</h1>
  </Slide>

  <Slide>
    <h1>¿Quiénes somos?</h1>
  </Slide>

  <Contact
      full-name="Emmanuel González A."
      job-title="Junior Web Developer"
      :image="Emmanuel"
      linkedin-name="emagleza"
      linkedin-url="https://www.linkedin.com/in/emagleza/"
      git-hub-name="udsgit"
      git-hub-url="https://github.com/udsgit"
  />

  <Contact
      full-name="Agustín T. Rocha"
      job-title="Junior Web Developer"
      :image="Agustin"
      linkedin-name="agustrocha"
      linkedin-url="https://www.linkedin.com/in/agustrocha/"
      git-hub-name="agustrocha"
      git-hub-url="https://github.com/agustrocha"
  />

  <Slide>
    <h1>¿De qué vamos a hablar?</h1>
  </Slide>

  <Slide>
    <ol>
      <li>Tailwind</li>
      <li>Shopify</li>
      <li>Vue 3 Composition Api</li>
      <li>Vue Router</li>
      <li>Vuex</li>
      <li>Consejos, recomendaciones y dudas</li>
    </ol>
  </Slide>

</template>

<script>
import LinkedinLogo from "./../assets/images/linkedin-logo.png";
import GitHubLogo from "./../assets/images/github-logo.png";
import Emmanuel from "./../assets/images/emmanuel.jpeg";
import Agustin from "./../assets/images/Agus.jpg";
import Vantea from "./../assets/images/vantea.png";
import Slide from "./Slide";
import Contact from "./Contact";

export default {
  name: "Introduction",
  components: {
    Slide,
    Contact
  },
  setup() {
    return {
      LinkedinLogo,
      GitHubLogo,
      Emmanuel,
      Agustin,
      Vantea
    }
  },
};
</script>
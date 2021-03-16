<template>
  <Slide>
    <img
        class="inline-block w-80"
        :src="Vantea">
    <h1>Vantea Smart</h1>
  </Slide>

  <Slide>
    <h3>¿Quiénes somos?</h3>
    <img
        class="rounded-full"
        :src="Emmanuel"
    >
  </Slide>
</template>

<script>
import Emmanuel from "./../assets/images/emmanuel.jpeg";
import Vantea from "./../assets/images/vantea.png";
import Slide from "./Slide";

export default {
  name: "Introduction",
  components: {
    Slide
  },
  setup(){
    return {
      Vantea,
      Emmanuel
    }
  }
}
</script>
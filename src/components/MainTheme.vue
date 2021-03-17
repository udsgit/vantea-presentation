<template>
  <Tailwind />
  <Shopify />
  <CompositionApi />
  <VueRouter />
  <Vuex />
  <Dudas />
</template>

<script>
import CompositionApi from "./CompositionApi.vue";
import VueRouter from "./VueRouter";
import Vuex from "./Vuex";
import Tailwind from "@/components/Tailwind";
import Shopify from "@/components/Shopify";
import Dudas from "@/components/Dudas";

export default {
  name: "MainTheme",
  components: {
    Dudas,
    Shopify,
    Tailwind,
    CompositionApi,
    VueRouter,
    Vuex,
  },
};
</script>
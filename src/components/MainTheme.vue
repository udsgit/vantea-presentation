<template>
  <CompositionApi />
  <VueRouter />
  <Vuex />
</template>

<script>
import CompositionApi from "./CompositionApi.vue";
import VueRouter from "./VueRouter";
import Vuex from "./Vuex";

export default {
  name: "MainTheme",
  components: {
    CompositionApi,
    VueRouter,
    Vuex,
  },
};
</script>
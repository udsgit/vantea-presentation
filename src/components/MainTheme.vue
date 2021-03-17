<template>
  <VueRouter/>
  <Tailwind/>
  <Shopify/>
</template>

<script>
import VueRouter from "./VueRouter";
import Tailwind from "@/components/Tailwind";
import Shopify from "@/components/Shopify";

export default {
  name: "MainTheme",
  components: {
    Shopify,
    Tailwind,
    VueRouter
  }
}
</script>
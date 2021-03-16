<template>
  <div v-for="{id, title, image, price, description} in products" :key="id">
    <h1>{{ title }}</h1>
    <img :src="image" :alt="title"/>
    <h3> {{ price }} </h3>
    <p> {{ description }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "category",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const products = computed(() => fetch(`/api/v1/categories/${props.id}`));
    return {
      products
    }
  }
}
</script>
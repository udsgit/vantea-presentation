<template>
  <Slide>
    <img :src="CompositionApiLogo" alt="Composition api logo" />
  </Slide>

  <Slide>
    <img :src="OptionVsComposition1" alt="Option Vs Composition 1" />
  </Slide>

  <Code
    v-for="({ title, content, lineNumber }, index) in compositionApiCode"
    :key="index"
    :title="title"
    :content="content"
    :line-numbers="lineNumber"
  />

  <Slide>
    <img :src="OptionVsComposition2" alt="option Vs Composition 2" />
  </Slide>

</template>

<script>
import CompositionApiLogo from "../assets/images/vue-composition-api-logo.jpg";
import OptionVsComposition1 from "./../assets/images/option-api-vs-composition-api-1.png";
import OptionVsComposition2 from "./../assets/images/option-api-vs-composition-api-2.png";
import Slide from "./Slide";
import Code from "./Code";

export default {
  name: "VueRouter",
  components: {
    Slide,
    Code
  },
  setup() {
    const compositionApiCode = [
      {
        title: "option api example",
        content: `
            import ...
            export default {
                name: "",
                components: { ... },
                props: { ... },
                data () {
                    return {
                        products: [],
                        customers: [],
                        searchQuery: ''
                    }
                },
                computed: {
                    filteredProducts () { ... },
                    filteredCustomers () { ... }
                },
                watch: {
                    products: 'getProductsStock'
                },
                methods: {
                    getProducts () { ... }
                    getCustomers () { ... }
                },
                mounted () {
                    this.getProducts()
                }
            }
        `,
        lineNumber: "|3|4|5|6-12|13-16|17-19|20-23|24-26",
      },
      {
        title: "composition api example",
        content: `
            import { ref, computed, watch } from "vue";
            export default {
                name: { ... },
                props: { ... },
                setup(){
                    const products = ref([]);
                    const filteredProducts = computed(() => { ... });
                    const getProducts = () => { ... });
                    watch(() => products => ... );

                    const customers = ref([]);
                    const filteredCustomers = () => { ... });
                    const getCustomers = () => { ... });

                    getProducts();

                    return {
                        filteredProducts,
                        filteredCustomers
                    }
                }
            }
        `,
        lineNumber: "|1|3|4|5-21|6-9|11-13|15|17-20|"
      }
    ];

    return {
      compositionApiCode,
      CompositionApiLogo,
      OptionVsComposition1,
      OptionVsComposition2,
    };
  },
};
</script>

<style scoped>
</style>
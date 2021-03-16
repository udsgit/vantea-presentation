<template>
  <Slide>
    <img :src="VuexLogo" alt="Vuex logo">
  </Slide>

  <Slide>
    <img :src="VuexVsDiagram" alt="Vuex Vs diagram">
  </Slide>

  <Slide>
    <img :src="VuexFlow" alt="Vuex flow">
  </Slide>

  <Slide>
    <img :src="VuexDiagram" alt="Vuex diagram">
  </Slide>

  <Code
      v-for="({title,content, lineNumbers}, index) in vuexCode"
      :key="index"
      :title="title"
      :content="content"
      :lineNumbers="lineNumbers"
  />

</template>

<script>
import VuexLogo from "../assets/images/vuexLogo.png";
import VuexVsDiagram from "../assets/images/vuexVsDiagram.png";
import VuexFlow from "../assets/images/vuexFlow.png";
import VuexDiagram from "../assets/images/vuexDiagram.png";

import Slide from "./Slide";
import Code from "./Code";

export default {
  name: "Vuex",
  components: {
    Slide,
    Code
  },
  setup() {
    const vuexCode = [
      {
        title: "Instalación",
        content: "npm install vuex@next --save",
        lineNumbers: ""
      },
      {
        title: "/src/store/index.js",
        content: `
        import {createLogger, createStore} from 'vuex';
        const store = createStore({
            plugins: [createLogger()],
            state: {
              ...
            },
            mutations: {
              ...
            },
            actions: {
              ...
            },
            modules: {}
        });
        export default store;`,
        lineNumbers: "|1|2-15|3"
      },
      {
        title: "/src/store/index.js",
        content: `
        import {createLogger, createStore} from 'vuex';
        const store = createStore({
            plugins: [createLogger()],
            state: {
              products: [],
            },
            mutations: {
              ...
            },
            actions: {
              ...
            },
            modules: {}
        });
        export default store;`,
        lineNumbers: "4-6|5"
      },
      {
        title: "/src/store/index.js",
        content: `
        import {createLogger, createStore} from 'vuex';
        const store = createStore({
              ...
            mutations: {
              setProducts: (state, products) =>
                state.products = products;
            },
            actions: {
              ...
            },
            modules: {}
        });
        export default store;`,
        lineNumbers: "4-7|6"
      },
      {
        title: "/src/store/index.js",
        content: `
        import {createLogger, createStore} from 'vuex';
        const store = createStore({
              ...
            },
            actions: {
              getProducts: async (commit, id) => {
                try {
                  await fetch("/api/v1/categories/" + id)
                    .then((data) => {
                      let products = data.json();
                      commit("setProducts", products);
                    });
                } catch (error) {
                      console.log(error);
                }
              }
            },
            modules: {}
        });
        export default store;`,
        lineNumbers: "5-17|11|18|20"
      },
      {
        title: "/src/main.js",
        content: `
          import { createApp } from 'vue';
          import App from './App.vue';
          import router from './router';
          import store from './store';

          createApp(App).use(store).use(router).mount('#app')
        `,
        lineNumbers: "|1|2|3|4|6|"
      },
      {
        title: "src/components/category.vue",
        content: `
          <template>
              <div
                v-for="{id, title, image, price, description} in products"
                :key="id">
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
              const products = computed(() => 
                fetch("api/v1/categories/" + props.id)
                  .then((data) => data.json());
              return {
                products
              }
            }
          }
         `,
        lineNumbers: "|21-27"
      },
      {
        title: "src/components/category.vue",
        content: ` 
          <template>
            <div v-for="{ id, title, image, price, description } in products" :key="id">
              <h1>{{ title }}</h1>
              <img :src="image" :alt="title" />
              <h3>{{ price }}</h3>
              <p>{{ description }}</p>
            </div>
          </template>

          <script>
          import { useStore } from "vuex";
          import { computed } from "vue";
          export default {
            name: "Category",
            props: {
              id: {
                type: Number,
                required: true,
              },
            },
            setup(props) {
              const store = useStore();
              let products;

              store
                .dispatch("getProducts", props.id)
                .then(() => (products = computed(() => store.state.products)));
              return {
                products,
              };
            },
          };
          `,
        lineNumbers: "|11-32|21-31"
      }
    ]
    return {
      vuexCode,
      VuexLogo,
      VuexVsDiagram,
      VuexFlow,
      VuexDiagram

    }
  }
}
</script>
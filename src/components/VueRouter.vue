<template>
  <Slide>
    <img :src="VueRouterLogo" alt="Vue router">
  </Slide>

  <Slide>
    <h3>Single Page Application (Spa)</h3>
    <img :src="SpaDiagram" alt="Spa Diagram"/>
    <div class="flex justify-around">
      <a href="https://www.hiperdino.es/">Hiperdino</a>
      <a href="https://www.mercadona.es/">Mercadona</a>
    </div>

    <aside class="notes">
      <div>
        Es un sistema para crear rutas, utilizado para crear las páginas SPA (Single Page Application)
      </div>
      <div>Código postal Adeje: 38670</div>
      <div>Código postal Madrid: 28001</div>
    </aside>

  </Slide>

  <Code
      v-for="({title,content, lineNumber}, index) in vueRouterCode"
      :key="index"
      :title="title"
      :content="content"
      :line-numbers="lineNumber"
  />

</template>

<script>
import VueRouterLogo from "../assets/images/vueRouterLogo.png";
import SpaDiagram from "./../assets/images/spaDiagram.jpg"
import Slide from "./Slide";
import Code from "./Code";

export default {
  name: "VueRouter",
  components: {
    Slide,
    Code
  },
  setup() {
    const vueRouterCode = [
      {
        title: "Instalación",
        content: `npm install vue-router@4 --save`,
        lineNumber: ""
      },
      {
        title: "/src/router/index.js",
        content: `
        import { createWebHistory, createRouter } from "vue-router";
        import Home from "@/components/Home.vue";
        import Category from "@/components/Category.vue";
        import MyProducts from "@/components/MyProducts.vue";

        const routes = [
          {
            path: "/",
            name: "Home",
            component: Home,
          },
          {
            path: "/categories/:id",
            name: "Category",
            component: Category,
            props: true
          },
          {
            path: "/my-products",
            name: "MyProducts",
            component: MyProducts,
          }
        ];

        const router = createRouter({
          history: createWebHistory(),
          routes,
        });

        export default router;
        `,
        lineNumber: "|1|2-4|6-22|8,13,18|9,14,19|10,15,20|7-11,17-21|12-16|24-27|29|"
      },
      {
        title: "/src/main.js",
        content: `
        import { createApp } from 'vue'
        import App from './App.vue'
        import router from './router'

        createApp(App).use(router).mount('#app')`,
        lineNumber: "|1|2|3|5|"
      },
      {
        title: "/src/main.js",
        content: `
        <template>
            <div id="nav">
                <router-link to="/categories/156">
                   Agua
                </router-link>
                <router-link to="/categories/163">
                    Isotónico y energético
                </router-link>
                <router-link to="/categories/158">
                    Refresco de cola
                </router-link>
                <router-link to="/categories/159">
                    Refresco de naranja y limón
                </router-link>
            </div>
            <router-view />
        </template>`,
        lineNumber: "|3-5|6-8|9-11|12-14|16|"
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
        lineNumber: "|1-10|3-4|5-8|12|13-27|14|15-20|21-26|22|23-25|"
      }
    ]

    return {
      vueRouterCode,
      VueRouterLogo,
      SpaDiagram
    }
  }
}
</script>

<style scoped>

</style>
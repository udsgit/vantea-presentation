<template>
  <Slide>
    <h1>Tailwind</h1>
  </Slide>

  <Slide>
    <h2>¿Qué es?</h2>
    <blockquote cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">
      &ldquo;Tailwind CSS es un Framework de CSS que brinda clases útiles para nuestro desarrollo web. &rdquo;
    </blockquote>
    <aside class="notes">
      <div>- Comparación con bootstrap</div>
      <div>--- Mucha más personalización</div>
      <div>--- Sitios responsive</div>
      <div>--- Mayor conocimiento de CSS</div>
    </aside>
  </Slide>

  <Slide>
    <div class="flex justify-center items-center">
      <img :src="TWvsBT" alt="BT vs TW"/>
    </div>
  </Slide>

  <Code
      :title="twCodeMuestra.title"
      :content="twCodeMuestra.content"
      :line-numbers="twCodeMuestra.lineNumber"
  />

  <Slide>
    <div class="py-3 px-8 bg-green-500 text-center cursor-pointer rounded-2xl">
      <p class="text-center text-white font-semibold font-sans uppercase">
        De lujo
      </p>
    </div>
    <aside class="notes">
      <div>- Mostrar codigo, instalación y config</div>
      <div>-- Instalación</div>
      <div>--- 2 opciones, la mejor, aunque compleja, npm</div>
      <div>-- Config</div>
      <div>--- Configuración de la personalización de tw</div>
      <div>--- Mostrar todas las partes del config</div>
    </aside>
  </Slide>

  <Code
      :title="twInstalation.title"
      :content="twInstalation.content"
      :line-numbers="twInstalation.lineNumber"
  />

  <Code
      :title="twConfig.title"
      :content="twConfig.content"
      :line-numbers="twConfig.lineNumber"
  />

</template>

<script>
import TWvsBT from "./../assets/images/TWvsBT.png"
import Slide from "./Slide";
import Code from "./Code";

export default {
  name: "Tailwind",
  components: {
    Slide,
    Code
  },
  setup() {
    const twInstalation = {
      title: "Instalación",
      content: `
        npm install tailwindcss

        -----

        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
        `,
      lineNumber: "|1|5|"
    }

    const twCodeMuestra = {
      title: "Muestra de codigo",
      content: `
      <template>
        <div class="py-3 px-8 bg-green-500
            text-center cursor-pointer rounded-xl">
          <p class="text-center text-white
            font-semibold uppercase">
            De lujo
          </p>
        </div>
      </template>
      `,
      lineNumber: ""
    }
    const twConfig = {
      title: "Archivo config",
      content: `
      module.exports = {
      important: true,
      prefix: 'tw-',
      purge: {
        enabled: false,
        content: [
          './assets/layout/*.liquid',
          './assets/templates/*.liquid',
          './assets/sections/*.liquid',
          './assets/snippets/*.liquid',
        ],
      },
      darkMode: false, // or 'media' or 'class'
      theme: {
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1600px'
        },
        extend: {
          fontFamily: {
            'recoletaAlt': 'RecoletaAlt, serif',
          },
          height: {
            76: '19rem',
            96: '25rem',
            160: '40rem',
          },
          minWidth: {
            80: '20rem',
            84: '21rem',
            88: '22rem',
            92: '23rem',
            96: '24rem',
            100: '25rem'
          },
          width: {
            75: '18.75rem',
            84: '21rem',
            88: '22rem',
            92: '23rem',
            96: '24rem',
            100: '25rem'
          },
          borderRadius: {
            'lg-xl': '0.625rem'
          },
          colors: {
            primary: {
              DEFAULT: "#58B98C"
            },
            secondary: {
              DEFAULT: "#F7796A"
            },
            neutral: {
              black: "#212322",
              semiblack: "#1D1D1B",
              dark: "#85888E",
              DEFAULT: "#9D9E9E",
              optional: "#DADADA",
              light: "#F0F1F5",
              extraLight: "#f7f7f7",
            }
          }
        }
      },
      variants: {
        extend: {
          fontWeight: ['hover'],
          cursor: ['hover'],
          boxShadow: ['hover'],
          display: ['group-hover'],
          margin: ['first', 'last'],
          borderWidth: ['first', 'last'],
          borderRadius: ['first', 'last'],
          borderColor: ['first', 'last','focus-within'],
          width: ['first, last'],
          height: ['first, last'],
          backgroundPosition: ['first, last']
        }
      },
      plugins: [],
    }
      `,
      lineNumber: "|2|3|4-12|15-21|22-68|69-82|"
    }

    return {
      twInstalation,
      twCodeMuestra,
      twConfig,
      TWvsBT
    }
  }
}
</script>

<style scoped>

</style>
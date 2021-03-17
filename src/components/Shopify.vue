<template>
  <Slide>
    <h1>Shopify</h1>
  </Slide>

  <Slide>
    <h2>¿Qué es?</h2>
    <blockquote cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">
      &ldquo;Shopify es un CMS para eCommerce que permite diseñar tu tienda online al gusto sin necesidad de tener conocimientos de programación &rdquo;
    </blockquote>
    <aside class="notes">
      <div>- CMS: Software para crear, administrar y gestionar un sitio web</div>
    </aside>
  </Slide>

  <Slide>
    <h1>¿Qué es Liquid?</h1>
    <div class="flex justify-center items-center">
      <img :src="LiquidSchema" alt="LiquidSchema" />
    </div>
    <aside class="notes">
      <div>- Liquid: Se trata de un motor de plantillas, como ThymeLeaf en SpringBoot y Eloquent en Laravel</div>
      <div>-- Un motor de plantilla te permite aplicar lógica y acceder a datos almacenados en una base de datos</div>
    </aside>
  </Slide>

  <Code
      :title="liquidCode.title"
      :content="liquidCode.content"
      :line-numbers="liquidCode.lineNumber"
  />
</template>

<script>
import Slide from "@/components/Slide";
import LiquidSchema from "../assets/images/LiquidSchema.png";
import Code from "@/components/Code";

export default {
  name: "Shopify",
  components: {Code, Slide},
  setup(){
    const liquidCode = {
      title: "Muestra de codigo",
      content: `
{% if section.settings.enable_dots %}
    <ul class="controls">
    {% for block in section.blocks %}
        <li class="controlDot
        {% if forloop.first %}active{% endif %}"></li>
    {% endfor %}
    </ul>
{% endif %}
{% if section.settings.enable_arrows %}
    <div class="nextControl--hero-banner"
    onclick="nextSlide()"></div>
{% endif %}
`,
      lineNumber: ""
    }
    return {
      LiquidSchema,
      liquidCode
    }
  }
}
</script>

<template>
  <section data-auto-animate>
    <h3 data-id="code-title"> {{ title }} </h3>
    <pre data-id="code-animation">
      <code class="hljs" data-trim :data-line-numbers="lineNumbers">
					{{ content }}
					</code>
    </pre>
  </section>
</template>

<script>
export default {
  name: "Code",
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    lineNumbers: {
      type: String,
      required: false
    }
  }
}
</script>
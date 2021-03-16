<template>
  <div class="slides">
    <Introduction/>
    <MainTheme/>
    <Summary/>
  </div>
</template>

<script>

import Introduction from "./components/Introduction";
import MainTheme from "./components/MainTheme";
import Summary from "./components/Summary";
export default {
  name: 'Presentation',
  components: {
    Summary,
    MainTheme,
    Introduction
  }
}
</script>

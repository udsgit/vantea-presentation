<template>
  <Slide>
    <h2> {{ fullName }}</h2>
    <p> {{ jobTitle }}</p>
    <div class="flex justify-center items-center">
      <div>
        <img class="rounded-full" :src="image"/>
      </div>
      <div class="flex flex-col ml-5">
        <div class="flex items-center justify-around">
          <img class="w-20" :src="LinkedinLogo"/>
          <a class="ml-5" :href="linkedinUrl">@{{ linkedinName }}</a>
        </div>
        <div class="flex items-center">
          <img class="w-20" :src="GitHubLogo"/>
          <a class="ml-5" :href="gitHubUrl">@{{ gitHubName }}</a>
        </div>
      </div>
    </div>
  </Slide>
</template>

<script>
import LinkedinLogo from "../assets/images/linkedin-logo.png";
import GitHubLogo from "../assets/images/github-logo.png";
import Slide from "./Slide";

export default {
  name: "Contact",
  components: {
    Slide
  },
  props: {
    fullName: {
      type: String,
      required: true
    },
    jobTitle: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    linkedinName: {
      type: String
    },
    linkedinUrl: {
      type: String
    },
    gitHubName: {
      type: String
    },
    gitHubUrl: {
      type: String
    }
  },
  setup(){
    return {
      LinkedinLogo,
      GitHubLogo
    }
  }
}

</script>
<template>
  
  <Section-Loader :sections="story.content.sections"></Section-Loader>

</template>

<script>
  
import {storyblokBridge} from '~/mixins/storyblokBridge.js';

import SectionLoader from '~/components/sections/Section-Loader.vue';
  
export default {
  
  mixins: [storyblokBridge],
  
  components: {
    SectionLoader,
  }
  
}

</script>

<style lang="scss">
    

</style>

<template>

  <div class="section-loader">
    <component v-for="section in sections"
               :is="section.component"
               :content="section"
               :key="section._uid"></component>
  </div>
             
</template>


<script>

import pageHeader from '~/components/sections/page-header.vue';
import sellingPoints from '~/components/sections/selling-points/loader.vue';
import clientSamples from '~/components/sections/client-samples.vue';
  
export default {
  
  props: ['sections'],
  
  components:  {
    pageHeader,
    sellingPoints,
    clientSamples,
  }
  
}

</script>


<style lang="scss">



</style>
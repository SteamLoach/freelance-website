<template>

  <div class="section-loader">
    <component v-for="section in sections"
               :is="section.component"
               :section="section"
               :id="section.id"
               :key="section._uid"
               v-editable="section"></component>
  </div>
             
</template>


<script>

import pageHeader from '~/components/sections/page-header.vue';
import pageSection from '~/components/sections/page-section.vue';
  
export default {
  
  props: ['sections'],
  
  components:  {
    pageHeader,
    pageSection,
  }
  
}

</script>


<style lang="scss">
  
  

</style>
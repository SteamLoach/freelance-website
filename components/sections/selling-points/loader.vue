<template>

  <section class="section-wrapper selling-point-loader">
    
    <h4 class="section-pre-title"> {{content.pre_title}} </h4>
    
    <h2 class="section-title"> {{content.title}} </h2>
    
    <p class="section-intro"> {{content.intro}} </p>
    
    <selling-point v-for="item in content.selling_points"
                   :content="item"
                   v-editable="item"
                   :key="item._uid"
                   :order="content.selling_points.indexOf(item) + 1">
    </selling-point>
  
  </section>

</template>



<script>

import sellingPoint from './selling-point.vue';
  
export default {
  
  props: ['content'],
  
  components: {
    sellingPoint,
  }
  
}

</script>



<style lang="scss">

  .selling-point-loader {
    //background: $accent-lightest;
  }

</style>
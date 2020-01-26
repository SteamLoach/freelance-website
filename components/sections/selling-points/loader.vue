<template>

  <section v-editable="content"
           id="services"
           class="selling-point-loader">
    
    <h2> {{content.title}} </h2>
    
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



</style>
<template>

  <section class="section-inner faq-group">
    
    <faq-item v-for="item in content.items"
              :content="item"
              :key="item._uid">
    </faq-item>
  
  </section>

</template>



<script>

import faqItem from './faq-item.vue';  

export default {
  
  props: ['content'],
  
  components: {
    faqItem,
  }
    
}


</script>


<style lang="scss">

  .faq-group {
    
  }
  
  


</style>
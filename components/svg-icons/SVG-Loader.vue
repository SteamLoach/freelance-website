<template>
    <component :is="iconComponent"></component>
</template>




<script>

//Selling Points
import editing from './selling-points/editing.vue'
import money from './selling-points/money.vue'
import wallet from './selling-points/wallet.vue'
import responsive from './selling-points/responsive.vue'
import timer from './selling-points/timer.vue'
import checkMark from './selling-points/check-mark.vue'
  
//Client Samples
import dish from './client-samples/dish.vue'
import community from './client-samples/community.vue'
import creativity from './client-samples/creativity.vue'
import scissors from './client-samples/scissors.vue'
import suit from './client-samples/suit.vue'
import tools from './client-samples/tools.vue'
import star from './client-samples/star.vue'
  
//Misc
import horizontalArrow from './utils/horizontal-arrow.vue'
  
export default {
  
  props: ['icon'],
  
  computed: {
    iconComponent: function() {
      return this.$toCase.camel(this.icon) ; 
    }
  },
  
  components: {
    
    //Selling Points
    editing,
    money,
    wallet,
    responsive,
    timer,
    checkMark,
    //Client Samples
    dish,
    community,
    creativity,
    scissors,
    suit,
    tools,
    //Misc
    horizontalArrow,
    star,
  }
  
}
</script>

<style lang="scss"></style>
<template>
    <component :is="iconComponent"></component>
</template>




<script>

//Header
import responsiveDesign from './page-header/responsive-design.vue'

//Social
import facebookIcon from './social/facebook-icon.vue'
import linkdinIcon from './social/linkdin-icon.vue'
import twitterIcon from './social/twitter-icon.vue'
  
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
  
//Pricing Tiers
import fries from './pricing-tiers/fries.vue'
import burger from './pricing-tiers/burger.vue'
import fullMonty from './pricing-tiers/full-monty.vue'
  
//Utils
import horizontalArrow from './utils/horizontal-arrow.vue'
import thickMenuClose from './utils/thick-menu-close.vue'
import menuButton from './utils/menu-button.vue'

  
export default {
  
  props: ['icon'],
  
  computed: {
    iconComponent: function() {
      return this.$toCase.camel(this.icon) ; 
    }
  },
  
  components: {
    
    //Header
    responsiveDesign,
    //Social
    facebookIcon,
    twitterIcon,
    linkdinIcon,
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
    star,
    //Pricing
    fries,
    burger,
    fullMonty,
    //Utils
    horizontalArrow,
    thickMenuClose,
    menuButton,
    
  }
  
}
</script>

<style lang="scss"></style>
<template>

  <div class="site-wrapper"
       :class="{'nav-is-fixed': navIsFixed}">
      
      <primary-nav v-for="nav in settings.primary_nav"
                   :content="nav"
                   :key="`${nav._uid}primary`"
                   :activeSection="mxn_onePageNav.activeSection">
      </primary-nav>
      
      <handheld-nav v-for="nav in settings.primary_nav"
                    :content="nav"
                    :key="`${nav._uid}handheld`"
                    :activeSection="mxn_onePageNav.activeSection">
      </handheld-nav>
      
      <nuxt />
    
  </div>

</template>

<script>

import {stickyNav} from '~/mixins/stickyNav';
import {onePageNav} from '~/mixins/onePageNav';
  
import primaryNav from '~/components/navigation/primary-nav';
import handheldNav from '~/components/navigation/handheld-nav';
  
export default {
  
  mixins: [
    onePageNav,
    stickyNav
  ],
  
  components: {
    primaryNav,
    handheldNav,
  },
  
  data() {
    return {
      
      settings: this.$store.state.settings,
      
      mxn_onePageNav: {
        watchSections: this.$store.state.settings.primary_nav[0].links,
        activeSection: '',
        navOffset: 'primary-nav',
      }
    }
  },
  
}

</script>

<style lang="scss">

  html {
    @include html-base();
      width: 100%;
  }
  
  .site-wrapper {    
    &.nav-is-fixed {
      .primary-nav {
        padding: $space-2;
        @include shadow($elevation-light);
      }
    }
    
  }
    
</style>

<template>
  <div>
    <main class="site-wrapper"
          id="main"
          :class="{'fix-primary-nav': navIsFixed}"
          :style="padSiteWrapper">
      
      <primary-nav v-for="nav in settings.primary_nav"
                   :content="nav"
                   :key="`${nav._uid}primary`">
      </primary-nav>
      
      <handheld-nav v-for="nav in settings.primary_nav"
                    :content="nav"
                    :key="`${nav._uid}handheld`">
      </handheld-nav>
      
      <nuxt />
    
  </main>
  </div>
</template>

<script>

import {stickyNav} from '~/mixins/stickyNav';
  
import primaryNav from '~/components/navigation/primary-nav';
import handheldNav from '~/components/navigation/handheld-nav';
  
export default {
  
  mixins: [stickyNav],
  
  components: {
    primaryNav,
    handheldNav,
  },
  
  computed: {
    settings: function() {
      return this.$store.state.settings;
    }
  }
  
}

</script>

<style lang="scss">

  html {
    @include html-base();
      width: 100%;
  }
  
  .site-wrapper {
    &.fix-primary-nav {
      .primary-nav {
        position: fixed;
          top: 0;
        padding: $space-2;
        @include shadow($elevation-light);
      }

    }
  }
  
</style>

<template>

  <nav class="handheld-nav"
       :class="state">
    
    <div class="handheld-nav-close"
         @click="handheldNavControl(false)">
      <SVG-Loader :icon="'thick-menu-close'"></SVG-Loader>
    </div>
    
    <nav-links :links="content.links"
               :activeSection="activeSection"></nav-links>
    
    <social-links :links="content.social_icons"></social-links>
    
  </nav>

</template>


<script>

import {mapMutations} from 'vuex';
  
import navLinks from './common/nav-links.vue';
import socialLinks from './common/social-links.vue';

export default {
  
  props: ['content', 'activeSection'],
  
  components: {
    navLinks,
    socialLinks,
  },
  
  computed: {
    state: function() {
      return this.$store.state.handheldNav;
    }
  },
  
  methods: {
    ...mapMutations({
      handheldNavControl: 'handheldNavControl',
    })
  }
  
}

</script>


<style lang="scss">

  .handheld-nav {
    z-index: 1001;
    position: fixed;
    overflow-y: scroll;
      top: 0;
      right: -100%;
    @include media-from($laptop, display, none);
    height: 100vh;
    @include column-scale(
      $default: 20,
      $on-tablet: 18,
    );
    background: $page-background;
    @include shadow(none);
    @include transition();
    
    &.is-active {
      right: 0;
      @include shadow($elevation-medium);
    }
  
    .nav-links {
      margin: $space-6 0;
      font-size: $text-large;
      font-weight: 600;
      text-align: right;

      li {
        padding: 0 $space-2;
        margin: $space-6 $space-3;
        border-right: 3px solid transparent;
        @include transition();

        &:hover, &.is-active {
          color: $brand-base;
          border-right-color: $brand-base;
          cursor: pointer;
        }
      }
    }
  
    .social-links {
      margin: $space-6 0;
      li {
        text-align: right;
      }
      .svg-icon {
        @include size($text-large);
        margin: $space-2 $space-5;
        fill: $shade-black;
        @include transition();
        &:hover {
          fill: $brand-base;
        }
      }
      .svg-icon-accent {
        fill: $page-background;
      }
    }
  }
    
  .handheld-nav-close {
    padding: $space-5;
    &:hover {cursor: pointer;}
    .svg-icon {
      margin-left: auto;
      @include size(2rem);
    }
  }

</style>
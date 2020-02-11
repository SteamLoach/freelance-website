<template>

  <nav class="primary-nav"
       id="primary-nav">
  
    <h2 @click="$scrollPage('header')"> {{content.title}} </h2>
    
    <nav-links :links="content.links"
               :activeSection="activeSection"></nav-links>
    
    <social-links :links="content.social_icons"></social-links>
    
    <span class="handheld-nav-open"
          @click="handheldNavControl(true)">
      <SVG-Loader :icon="'menu-button'"></SVG-Loader>
    </span>
  
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
  
  methods: {
    ...mapMutations({
      handheldNavControl: 'handheldNavControl',
    })
  }
    
}

</script>


<style lang="scss">

  .primary-nav {
    @include row(between, center, $no-wrap: true);
    position: fixed;
      top: 0;
    z-index: 1000;
    padding: $space-1;
    background: $page-background;
    @include transition();
    
    
    h2 {
      padding: $space-2;
      @include pad-from($laptop, $xy: $space-4);
      font-size: $title-small;
      @include media-from($tablet, font-size, $title-medium);
      @include transition();
      
      &:hover {
        cursor: pointer;
        color: $brand-base;
      }  
    }
    
    .nav-links,
    .social-links {
      @include media-until($laptop, display, none);
      @include wrapper(around, center, $no-wrap: true);
    }
  
    .nav-links {
    
      li {
        position: relative;
        padding: $space-2 $space-5;
        font-size: $text-body;
        font-weight: 600;
        @include transition();
      
        &:after {
          content: '';
          position: absolute;
          @include center-absolute();
            bottom: 0;
          @include size(0px, 4px);
          border-radius: $border-radius;
          background: transparent; 
          @include transition();
        }
      
        &:hover, &.is-active {
          cursor: pointer;
          color: $brand-base;

          &:after {
            @include size(40px, 4px);
            background: $brand-base
          }

        }
      }
    }
  
    .social-links {
      padding: $space-4;

      .svg-icon {
        @include size($text-large);
        margin: $space-2;
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

  
  .handheld-nav-open {
    @include media-from($laptop, display, none);
    padding: $space-3;
    
    &:hover {
      cursor: pointer;
    }
    
    .svg-icon {
      @include size(2rem);
      fill: $shade-black;
    }
    
  }


</style>
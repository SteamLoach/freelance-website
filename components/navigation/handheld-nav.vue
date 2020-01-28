<template>

  <nav class="handheld-nav"
       :class="state">
    
    <div class="handheld-nav-close"
         @click="handheldNavControl(false)">
      <SVG-Loader :icon="'thick-menu-close'"></SVG-Loader>
    </div>
    
    <ul class="handheld-nav-links">
      <li v-for="link in content.links">
        <div @click="$scrollPage(link.target, 'top', 'primary-nav'),
                     handheldNavControl(false)">
          <scroll-link :link="link"></scroll-link>
        </div>
      </li>
    </ul>
    
    <ul class="handheld-social-links">
      <li v-for="icon in content.social_icons">
        <a :href="icon.route">
          <SVG-Loader :icon="icon.text_or_icon"></SVG-Loader>
        </a>
      </li>
    </ul>
    
  
  </nav>

</template>


<script>

import {mapMutations} from 'vuex';

import scrollLink from './scroll-link.vue';  

export default {
  
  props: ['content'],
  
  components: {
    scrollLink,
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
    
  }
  
  .handheld-nav-links {
    margin: $space-6 0;
    font-size: $text-large;
    font-weight: 600;
    text-align: right;
    
    .scroll-link {
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
  
  .handheld-social-links {
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
  
  .handheld-nav-close {
    padding: $space-5;
    &:hover {cursor: pointer;}
    .svg-icon {
      margin-left: auto;
      @include size(2rem);
    }
  }

</style>
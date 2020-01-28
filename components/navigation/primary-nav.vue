<template>

  <nav class="primary-nav"
       id="primary-nav">
  
    <h2 @click="$scrollPage('main')"> {{content.title}} </h2>
    
    <ul class="nav-links">
      <li v-for="link in content.links">
        <div @click="$scrollPage(link.target, 'top', 'primary-nav')">
          <scroll-link :link="link"
                       :key="link._uid"></scroll-link>
        </div>
      </li>
    </ul>
    
    <ul class="social-links">
      <li v-for="icon in content.social_icons">
        <a :href="icon.route">
          <SVG-Loader :icon="icon.text_or_icon"></SVG-Loader>
        </a>
      </li>
    </ul>
    
    <span class="handheld-nav-open"
          @click="handheldNavControl(true)">
      <SVG-Loader :icon="'menu-button'"></SVG-Loader>
    </span>
  
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
  
  methods: {
    ...mapMutations({
      handheldNavControl: 'handheldNavControl',
    })
  }
    
}

</script>


<style lang="scss">

  .primary-nav {
    z-index: 1000;
    @include row(between, center, $no-wrap: true);
    padding: $space-2;
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
    
  }
  
  .nav-links,
  .social-links {
    @include media-until($laptop, display, none);
    @include wrapper(around, center, $no-wrap: true);
  }
  
  .nav-links {
    
    .scroll-link {
      position: relative;
      padding: $space-2 $space-6;
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
<template>

  <section class="page-header">
    
    <div class="page-header-inner">
      
      <div class="header-content">
        
        <rich-text class="header-text"
                   :content="section.title"></rich-text>

        <div v-editable="section.cta"
             class="header-cta">
          <button v-for="button in section.cta"
                  :class="button.color"
                  @click="$scrollPage(button.target, 'top', 'primary-nav')"> {{button.text}} </button>
        </div>
      </div>
      
      <div class="header-feature">
        <SVG-Loader :icon="'responsive-design'"></SVG-Loader>
      </div>
      
    </div> 
  
  </section>

</template>


<script>
  
export default {
  
  props: ['section'],
    
}

</script>


<style lang="scss">

  .page-header {
    min-height: 100vh;
    @include row(center, center);
    @include pad-scale(
      top,
      $default: $space-10,
      $on-laptop: $space-8,
    );
  }
  
  .page-header-inner {
    @include row(center, start);
    max-width: $wide-content-width;
    @include pad-scale(
      x,
      $default: $space-3,
      $on-laptop: $space-8,
    );
  }
  
  .header-content {
    @include column-scale(
      $default: 24,
      $on-laptop: 14,
    );
  }
  
  .header-feature {
    @include media-until($tablet, display, none);
    @include wrapper(center, center);
    flex: 1;
    @include pad-scale(
      x,
      $default: $space-2,
      $on-laptop: $space-6,
    );
    @include margin-between($tablet, $laptop, $space-6);
    .svg-icon {
      @include size(375px);
      @include size-from($laptop, 100%);
      .svg-icon-background {fill: $brand-lightest;}
      .svg-icon-screen-top-left,
      .svg-icon-screen-bottom-right,
      .svg-icon-mobile-top-left,
      .svg-icon-mobile-bottom-right{
        fill: $brand-dark;
      }
      .svg-icon-screen-top-right,
      .svg-icon-screen-bottom-left,
      .svg-icon-mobile-top-right,
      .svg-icon-mobile-bottom-left {
        fill: $accent-dark;
      }
    }
  }
  
  .header-text {

    h1,
    h2 {
      @include font-size-scale(
        $default: $title-medium,
        $on-tablet: $title-large,
      );
      font-weight: 700;
    }
    h1 {padding-bottom: $space-7;}
    h2 {padding-bottom: $space-5;}
    
    
    p {
      padding-bottom: $space-7;
      font-size: $text-large;
      max-width: 650px;
    }
    b {
      color: $brand-base;
    }
    
  }
  
  .header-cta {
    @include row(center, start, $direction: column);
    @include row-from($tablet, start, center, $direction: row);
    
    button {
      padding: $space-4 $space-6;
      @include margin-until($tablet, $bottom: $space-6);
      @include margin-from($tablet, $right: $space-6);
      
      color: $shade-lightest;
      
      font-size: $text-body;
      font-weight: 700;
      border-radius: $border-radius;
      
      background-position: left center;
      background-size: 200%;
      
      @include transition();
      
      &:hover {
       background-position: right center;
      }
      
      &.brand-base {
        background-image: linear-gradient(
          135deg,
          $brand-base 0%,
          $brand-darker 60%,
          $brand-dark 80%,
          $brand-darker 100%,
        );
      }
      &.accent-base {
        background-image: linear-gradient(
          135deg,
          $accent-base 0%,
          $accent-darker 60%,
          $accent-dark 80%,
          $accent-darker 100%,
        );
      }
    }
    
  }
  

</style>
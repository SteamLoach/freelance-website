<template>

  <section v-editable="content"
           class="page-header"
           :class="content.theme">
    
    <div class="page-header-inner">
      
      <div class="header-content">
        
        <div class="header-text"
             v-html="headerText"></div>

        <div v-editable="content.cta"
             class="header-cta">
          <button v-for="button in content.cta"
                  :class="button.color"> {{button.text}} </button>
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
  
  props: ['content'],
  
  computed: {
    headerText() {
      return this.$storyapi.richTextResolver.render(this.content.title);
    }
  }
  
}

</script>


<style lang="scss">

  .page-header {
    min-height: 100vh;
    @include row(center, center);
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
      font-size: $text-body;
      font-weight: 700;
      border-radius: $border-radius;
      
      &.brand-base {
        color: $brand-lightest;
        background: $brand-base;
      }
      &.accent-base {
        color: $accent-lightest;
        background: $accent-base;
      }
    }
    
  }
  

</style>
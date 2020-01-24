<template>

  <section v-editable="content"
           class="page-header"
           :class="content.theme">
    
    <div class="page-header-inner">
      
      <div class="header-text"
           v-html="headerText"></div>

      
      <div v-editable="content.cta"
           class="header-cta">
        <button v-for="button in content.cta"
                :class="button.color"> {{button.text}} </button>
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
    
    &.dark-theme {
      background-color: $shade-black;
      h1, h2 {color: $offset-title-color;}
    }
    &.light-theme {}
  }
  
  .page-header-inner {
    z-index: 1;
    @include row(start, center);
    @include pad-scale(
      left,
      $on-tablet: $space-4,
      $on-laptop: $space-8,
      //$on-desktop: $space-11,
    );
  }
  
  .header-text {
    @include column-scale(
      $default: 24,
    );
    @include pad-scale(
      x,
      $default: $space-2,
      $on-tablet: 0,
    );
    @include margin-until(
      $tablet, 
      $y: $space-6
    );
    h1, h2 {
      @include media-until($tablet, text-align, center);
      @include font-size-scale(
        $default: $title-medium,
        $on-lrg-mobile: $title-large,
        $on-laptop: $title-larger,
        $on-desktop: $title-largest,
      );
      font-weight: 700;
      padding-bottom: $space-6;
      b {
        color: $brand-base;
      }
    }
    
  }
  
  .header-cta {
    @include row(center, center, $direction: column);
    @include row-from($tablet, start, center, $direction: row);
    
    button {
      padding: $space-4 $space-6;
      @include margin-until($tablet, $bottom: $space-6);
      @include margin-from($tablet, $right: $space-6);
      font-size: $text-body;
      font-weight: 700;
      border-radius: $border-radius;
      
      &.brand-primary {
        color: $brand-darkest;
        background: $brand-base;
      }
      &.brand-accent {
        color: $accent-darkest;
        background: $accent-base;
      }
    }
    
  }
  

</style>
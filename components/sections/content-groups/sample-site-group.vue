<template>

  <div class="section-inner sample-site-inner">
  
    <div v-for="item in content.items"
         class="sample-site"
         v-editable="item"
         :key="item._uid"
         :style="$setBackgroundImage(item.feature[0].image)">
        
      <p class="sample-site-text"> {{item.text}} </p>
        
      <div class="sample-site-link">
        <span> {{item.cta}} </span>
        <SVG-Loader :icon="'horizontal-arrow'"></SVG-Loader>
      </div>
        
    </div>
    
  </div>

</template>



<script>

export default {
  props: ['content'],
}

</script>


<style lang="scss">


  #sample-sites {
    background: $shade-lightest;
  }
  
  .sample-site-inner {
    @include row(around, stretch);
    @include row-from($laptop, between, stretch);
  }
  
  .sample-site {
    z-index: 1;
    @include container(between, center, $direction: column);
    max-width: 325px;
    padding: $space-6;
    @include margin-scale(
      bottom,
      $default: $space-6,
      $on-tablet: $space-8,
    );
    @include column-scale(
      $default: 24,
      $on-tablet: 10,
      $on-laptop: 7
    );
    @include background-image();
    @include shadow($elevation-heavy);
    
    &:before {
      z-index: -1;
      position: absolute;
        top: 0;
        left: 0;
      content: '';
      @include size(100%);
      background-position: left center;
      background-size: 300%;
      background-image: linear-gradient(
          135deg,
          $brand-base 0%,
          $brand-darker 60%,
          $brand-dark 80%,
          $brand-darker 100%,
      );
      opacity: 0.8;
      @include transition();
    }
    
    &:hover {
      &:before {
        background-position: right center;
      }
    }
    
  }
  
  .sample-site-text {
    margin-bottom: $space-6;
    font-size: $text-larger;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: $offset-text-color;
    text-transform: uppercase;
    text-align: center;
  }
  
  .sample-site-link {
    @include row(center, center);
    padding: $space-3 $space-3;
    font-size: $text-body;
    color: $offset-text-color;
    border: 2px solid $offset-text-color;
    @include transition();
      
    .svg-icon {
      position: relative;
        left: 0px;
      @include size($text-large);
      margin: 0 0 0 $space-4;
      fill: $offset-text-color;
      transform: rotate(180deg);
      @include transition();
    }
      
    &:hover {
      cursor: pointer;
        
      .svg-icon {
        left: 5px;
      }
    }
  }


</style>
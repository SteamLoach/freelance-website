<template>

  <section class="client-sample-loader"
           v-editable="content"
           :id="content.id">
    
    <h4 class="section-pre-title"> {{content.pre_title}} </h4>
    
    <h2 class="section-title"> {{content.title}} </h2>
    
    <p class="section-intro"> {{content.intro}} </p>
    
    <div class="client-sample-inner">
      
      <div v-for="item in content.client_samples"
           class="client-sample"
           v-editable="item"
           :key="item._uid"
           :style="$setBackgroundImage(item.feature[0].image)">
        
        <p class="client-sample-text"> {{item.text}} </p>
        
        <div class="sample-site-link">
          <span> {{item.cta}} </span>
          <SVG-Loader :icon="'horizontal-arrow'"></SVG-Loader>
        </div>
        
      </div>
      
    </div>
  
  </section>

</template>

<script>
  
export default {
  props: ['content'],
}

</script>


<style lang="scss">

  .client-sample-loader {
    background: $shade-lightest;
  }
  
  .client-sample-inner {
    @include row(around, stretch);
    @include row-from($laptop, between, stretch);
    @include content-panel-inner();
  }
  
  .client-sample {
    z-index: 1;
    position: relative;
    @include wrapper(between, center, $direction: column);
    max-width: 325px;
    padding: $space-6;
    @include margin-scale(
      bottom,
      $default: $space-6,
      $on-laptop: $space-8,
    );
    @include column-scale(
      $default: 24,
      $on-tablet: 10,
      $on-laptop: 7
    );
    @include background-image();
    
    &:before {
      z-index: -1;
      position: absolute;
        top: 0;
        left: 0;
      content: '';
      @include size(100%);
      background: $brand-base;
      opacity: 0.7;
      @include transition();
    }
    
    &:hover {
      &:before {
        opacity: 0.9;
      }
    }
    
  }
  
  .client-sample-text {
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
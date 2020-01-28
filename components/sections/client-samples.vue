<template>

  <section class="client-sample-loader"
           v-editable="content"
           id="clients">
  
    <h2> {{content.title}} </h2>
    
    <div class="client-sample-inner">
      
      <div v-for="item in content.client_samples"
           class="client-sample"
           v-editable="item"
           :key="item._uid">
        <SVG-Loader :icon="item.icon"></SVG-Loader>
        <ul>
          <li v-for="client in item.clients">
            <SVG-Loader :icon="'star'"></SVG-Loader>
            <span> {{client.text}} </span>
          </li>
        </ul>
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
    @include row(center, center, $direction: column);
    background: $brand-lightest;
  }
  
  .client-sample-inner {
    @include row(around, center);
    @include row-from($laptop, between, center);
    @include content-panel-inner();
  }
  
  .client-sample {
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
    background: $page-background;
    @include shadow($elevation-medium);
    
    ul, 
    .svg-icon {margin-bottom: $space-5;}
    
    ul {
      font-size: $text-large;
      font-weight: 600;
    }
    
    li {
      @include wrapper(start, center, $no-wrap: true);
      margin-bottom: $space-2;
      .svg-icon {
        @include size($text-small);
        margin: 0 $space-3 0 0
      }
    }
    
    .svg-icon {
      @include size(75px);
      fill: $brand-base;
    }
    
    .sample-site-link {
      @include wrapper(center, center);
      padding: $space-3 $space-3;
      font-size: $text-body;
      color: $brand-darkest;
      border: 1px solid $brand-base;
      @include transition();
      
      .svg-icon {
        position: relative;
          left: 0px;
        @include size($text-large);
        margin: 0 0 0 $space-4;
        transform: rotate(180deg);
        @include transition();
      }
      
      &:hover {
        color: $offset-text-color;
        background: $brand-base;
        cursor: pointer;
        
        .svg-icon {
          fill: $offset-text-color;
          left: 5px;
        }
      }
    }
    
    
  }


</style>
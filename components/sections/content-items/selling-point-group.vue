<template>
  
  <div class="selling-point-group"
       v-editable="content">
  
    <article class="selling-point section-inner"
             v-for="item in content.items"
             v-editable="item"
             :class="{'is-reversed': ((content.items.indexOf(item) + 1)%2 == 0) ? true : false}">
      
      <div class="selling-point-content">
        <h4> .0{{content.items.indexOf(item) + 1}} </h4>
        <h3> {{item.title}} </h3>
        <rich-text :content="item.text"></rich-text>
        <ul>
          <li class="check-point"
              v-for="item in item.check_marks"
              v-editable="item"
              >
            <SVG-Loader :icon="'check-mark'"></SVG-Loader>
            <rich-text :content="item.text"></rich-text>
          </li>
        </ul>
      </div>
      
      <div class="selling-point-feature"
           v-editable="item.feature[0]">
        <SVG-Loader :icon="item.feature[0].icon"></SVG-Loader>
      </div>
  
    </article>
             
  </div>

</template>




<script>
  
export default {
  
  props: ['content'],
  
}

</script>



<style lang="scss">
  
  .selling-point-group {
    @include row(center, center);
  }
  
  .selling-point {
    @include row(around, center);
    &.is-reversed {
      flex-direction: row-reverse;
    }
  }
    
  .selling-point-content {
    position: relative;
    @include column-scale(
      $default: 24,
      $on-laptop: 12,
    );
    font-size: $text-large;
    h3,
    h4 {
      @include font-size-scale (
        $default: $title-medium,
        $on-tablet: $title-large,
        )
    }
    h3 {
      margin-bottom: $space-6;
      color: $shade-black;
    }
    h4 {
      margin-bottom: $space-4;
      color: $brand-base;
    }
    p {
      max-width: 500px;
      margin-bottom: $space-5;
      line-height: 1.6;
    }
    
    ul {
      margin-top: $space-4;
      margin-bottom: $space-7;
    }
    
    .check-point {
      @include wrapper(start, center, $no-wrap: true);
      margin-bottom: $space-5;
      p {margin: 0;}
      b {color: $brand-base;}
    }
    
    .svg-icon {
      @include size($text-largest);
      min-width: $text-largest;
      margin-right: $space-3;
      fill: $brand-base;
    }
    &:after {
      content: '';
      position: absolute;
        left: 0;  
        bottom: 0;
      height: 5px;
      width: 75px;
      background: $brand-base;
      border-radius: 5px;
    }
  }
  
  .selling-point-feature {
    @include media-until($laptop, display, none);
    @include container(center, center);
    @include column-scale(
      $default: 24,
      $on-laptop: 10
    );
    &:before {
      z-index: -1;
      content: '';
      position: absolute;
      @include size(450px);
      background: $shade-lightest;
      border-radius: 1000px;
    }
    .svg-icon {
      @include size(300px);
      fill: $brand-base;
    }    
  }


</style>
<template>

  <article v-editable="content"
           class="selling-point">
  
    <div class="selling-point-inner"
         :class="{'is-reversed': (order%2 == 0) ? true : false}">
      
      <div class="selling-point-content">
        <h4> 0{{order}}. </h4>
        <h2> {{content.title}} </h2>
        <div v-html="richText"
             class="rich-text"></div>
        <ul>
          <li v-for="item in content.check_marks">
            <check-point :content="item"></check-point>
          </li>
        </ul>
      </div>

      <div class="selling-point-feature">
        <SVG-Loader :icon="content.feature[0].icon"></SVG-Loader>
      </div>
  
    </div>
  
  </article>

</template>




<script>

import checkPoint from './check-point.vue';
  
export default {
  
  props: ['content', 'order'],
  
  components: {
    checkPoint,
  },
  
  computed: {
    richText: function() {
      return this.$storyapi.richTextResolver.render(this.content.text);
    },
  }
  
}

</script>



<style lang="scss">

  .selling-point {
    @include row(center, center);
  }
  
  .selling-point-inner {
    @include row(between, center);
    @include content-panel-inner();
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
    h2 {
      margin-bottom: $space-6;
      font-size: $title-large;
      color: $shade-black;
    }
    h4 {
      margin-bottom: $space-4;
      font-size: $title-large;
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
    
    li {
      margin-bottom: $space-5;
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
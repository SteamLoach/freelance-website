<template>

  <article class="faq"
           :class="{'is-active': state}"
           v-editable="content">
      
    <div class="faq-question"
        @click="toggleFaq">
      <h3> {{content.question}} </h3>
      <SVG-Loader :icon="'down-arrow'"></SVG-Loader>
    </div>
      
    <div class="faq-answer-wrapper"
         @click="toggleFaq">
    <rich-text class="faq-answer"
               :content="content.answer"></rich-text>
    </div>
      
  </article>


</template>



<script>

export default {
  
  props: ['content'],
  
  data() {
    return {
      state: false,
    }
  },
  
  methods: {
    toggleFaq: function() {
      this.state = !this.state;
    }
  }
  
}

</script>



<style lang="scss">

  .faq {
    overflow: hidden;
    max-width: $narrow-content-width;
    margin-bottom: $space-6;
    background: transparent;
    @include transition();
    
    &.is-active {
      
      background: $accent-lighter;
            
      .faq-answer-wrapper {
        max-height: 1000px;
      }
      .svg-icon {
        transform: rotate(180deg);
      }
    }
  }
  
  .faq-question {
    @include row(between, center, $no-wrap: true);
    padding: $space-4 $space-5;
    @include hover-pointer();
    
    h3 {
      font-family: $text-font;
      font-size: $title-smaller;
      line-height: 1.4;
    }
    
    .svg-icon {
      position: relative;
        top: 0px;
      @include size($title-small);
      min-width: $title-small;
      margin-left: $space-6;
      fill: $shade-black;
      @include transition();
    }
    
    &:hover {
      .svg-icon {
        top: 5px;
      }
    }
    
  }
  
  .faq-answer-wrapper {
    overflow: hidden;
    max-height: 0px;
    @include transition(
      $duration: 0.6s,
      $function: ease-in-out,
    );    
  }
  
  .faq-answer {
    padding: $space-4 $space-5;
    font-size: $text-body;
    
    p {
      margin-bottom: $space-3;
    }
    
    ul {
      list-style: disc;
      margin: $space-3 $space-6;
    }
    
  }

</style>
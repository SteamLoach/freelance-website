<template>

  <article class="faq"
           :class="{'is-active': state}"
           v-editable="content">
      
    <h3 class="faq-question"
        @click="toggleFaq"> {{content.question}} </h3>
      
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
    padding: $space-5;
    margin-bottom: $space-6;
    background: $brand-lighter;
    border-radius: $border-radius;
    @include transition();
    
    &.is-active {
      @include shadow($elevation-heavy);
      &:hover {
        @include shadow($elevation-heavy);
      }
      
      .faq-answer-wrapper {
        max-height: 1000px;
      }
      .faq-question {
        &:after {
          width: $space-8;
        }
      }
    }
    
    &:hover {
      @include shadow($elevation-medium);
    }
  }
  
  .faq-question {
    position: relative;
    width: 100%;
    max-width: $text-content-width;
    font-family: $text-font;
    font-size: $title-smallest;
    line-height: 1.4;
    @include hover-pointer();
    
    &:after {
      content: '';
      position: absolute;
        bottom: -$space-2;
        left: 0;
      @include size(0px, 3px);
      background: $brand-base;
      border-radius: 15px;
      @include transition();
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
    margin-top: $space-4;
    font-size: $text-body;
    
    p {
      margin-bottom: $space-2;
    }
    
    ul {
      list-style: disc;
      margin-left: $space-6;
      margin-bottom: $space-4;
    }
    
  }

</style>
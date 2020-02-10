<template>

  <section class="page-section"
           :class="section.classes">
  
    <h4 class="section-pre-title"
        v-if="section.pre_title"> {{section.pre_title}} </h4>
    
    <h2 class="section-title"
        v-if="section.title"> {{section.title}} </h2>
  
    <p class="section-intro"
       v-if="section.intro"> {{section.intro}} </p>
    
    <component v-for="group in section.content_group"
               :is="group.component"
               :content="group"
               :key="section._uid">
    </component>
  
  </section>

</template>


<script>

import sellingPointGroup from './content-items/selling-point-group.vue';
import sampleSiteGroup from './content-items/sample-site-group.vue';
import pricingGroup from './content-items/pricing-group.vue';
import faqGroup from './content-items/faqs/faq-group.vue';
  
export default {

  props: ['section'],
  
  components: {
    sellingPointGroup,
    sampleSiteGroup,
    pricingGroup,
    faqGroup,
  }
  
}

</script>

<style lang="scss">

  .page-section {
    @include row(center, center, $direction: column);
    @include y-pad($space-8);
  }
  
  .section-inner {
    max-width: $wide-content-width;
    @include pad-scale(
      x,
      $default: $space-3,
      $on-tablet: $space-4,
      $on-laptop: $space-6,
      $on-desktop: $space-8,
    );
    @include pad-scale(
      y,
      $default: $space-6,
      $on-tablet: $space-8,
    );
  }
  
  .section-pre-title {
    font-size: $text-small;
    font-weight: 600;
    text-transform: uppercase;
    color: $brand-base;
  }
  
  .section-title {
    position: relative;
    padding: $space-5 $space-2;
    margin-bottom: $space-4;
    text-align: center;
    @include font-size-scale(
      $default: $title-medium, 
      $on-tablet: $title-large,
    );
    line-height: 1.2;
    &:after {
      content: '';
      @include size(75%, 5px);
      @include center-absolute();
        bottom: 0;
      background: $brand-base;
      border-radius: $border-radius;
    }
  }
  
  .section-intro {
    padding: $space-4 $space-3;
    font-size: $text-large;
    max-width: $text-content-width;
    text-align: justify;
    @include media-from($tablet, text-align, center);
  }

</style>
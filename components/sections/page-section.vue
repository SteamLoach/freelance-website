<template>

  <section class="page-section"
           :class="section.classes">
  
    <h4 class="section-pre-title"> {{section.pre_title}} </h4>
    
    <h2 class="section-title"> {{section.title}} </h2>
  
    <p class="section-intro"> {{section.intro}} </p>
    
    <component :is="section.content_group[0].component"
               :content="section.content_group[0]">
    </component>
  
  </section>

</template>


<script>

import sellingPointGroup from '~/components/sections/content-groups/selling-point-group.vue';
import sampleSiteGroup from '~/components/sections/content-groups/sample-site-group.vue';
import pricingGroup from '~/components/sections/content-groups/pricing-group.vue';
  
export default {

  props: ['section'],
  
  components: {
    sellingPointGroup,
    sampleSiteGroup,
    pricingGroup,
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
    @include font-size-scale(
      $default: $title-medium, 
      $on-tablet: $title-large,
    );
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
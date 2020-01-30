<template>

  <div class="section-loader">
    <component v-for="section in sections"
               :is="section.component"
               :content="section"
               :key="section._uid"
               :id="section.id"
               v-editable="section"></component>
  </div>
             
</template>


<script>

import pageHeader from '~/components/sections/page-header.vue';
import sellingPoints from '~/components/sections/selling-points/loader.vue';
import clientSamples from '~/components/sections/client-samples.vue';
import pricingTiers from '~/components/sections/pricing-tiers.vue';
  
export default {
  
  props: ['sections'],
  
  components:  {
    pageHeader,
    sellingPoints,
    clientSamples,
    pricingTiers,
  }
  
}

</script>


<style lang="scss">
  
  .section-wrapper {
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
<template>

  <section :id="content.id"
           class="section-wrapper pricing-section">
    
    <div class="section-inner pricing-tiers-inner">
  
      <div v-for="tier in content.tiers"
           class="pricing-tier"
           v-editable="tier">
        <h3 class="tier-title"> {{tier.title}} </h3>
        <SVG-Loader :icon="tier.icon_reference"
                    class="tier-icon"></SVG-Loader>
        <div class="tier-price"> 
          <span>from </span> 
          <sup> £</sup> 
          <h4> {{tier.price}} </h4>
        </div>
        <ul class="tier-features">
          <li v-for="feature in tier.features"
              class="tier-feature">
            <SVG-Loader :icon="'star'"></SVG-Loader>
            <span> {{feature.text}} </span>
          </li>
        </ul>
  
        <div class="tier-cta"> {{tier.cta}} </div>
  
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

  .pricing-section {
    background-image: linear-gradient(
      135deg,
      $accent-light,
      $accent-base 75%,
      $accent-dark
    );
  }
  
  .pricing-tiers-inner {
    @include row(between, center);
  }
  
  .pricing-tier {
    @include wrapper(center, center, $direction: column);
    max-width: 395px;
    @include column-scale(
      $default: 24,
      $on-tablet: 11,
      $on-laptop: 7,
    );
    padding: $space-6;
    background: $page-background;
    border-radius: $border-radius;
      
  }
  
  .tier-title,
  .tier-icon,
  .tier-price,
  .tier-features,{
    margin-bottom: $space-6;
  }
  
  .tier-title {
    font-size: $title-medium;
    padding: $space-3 $space-4;
    text-align: center;
    border: 3px solid $title-color;
  }
  
  .tier-icon {
    @include size($title-largest);
    margin-bottom: $space-4;
  }
  
  .tier-price {
    margin-bottom: $space-4;
    h4 {
      display: inline-block;
      font-size: $title-large;
    }
    span {
      font-size: $text-body;
      font-weight: 600;
    }
    sup {
      position: relative;
        top: -$text-body;
      font-size: $text-body;
      font-weight: 600;
    }
  }
  
  .tier-features {
    padding: $space-2;
  }
  
  .tier-feature {
    @include row(start, center, $no-wrap: true);
    padding-bottom: $space-3;
    font-size: $text-large;
    font-weight: 600;
    line-height: 1.2;
    
    
    .svg-icon {
      @include size($text-small);
      min-width: $text-small;
      margin-right: $space-2;
      fill: $brand-base;
    } 
  }
  
  .tier-cta {
    padding: $space-4 $space-6;
    color: $offset-text-color;
    font-size: $text-body;
    font-weight: 700;
    background: $brand-base;
    border-radius: $border-radius;
    @include hover-pointer();
    
  }


</style>
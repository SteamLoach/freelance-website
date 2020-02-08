<template>

  <section :id="content.id"
           class="section-wrapper pricing-section">
    
    <h2 class="section-title"> {{content.title}} </h2>
    
    <div class="section-inner pricing-tiers-inner">
  
      <div class="pricing-tier"
           v-for="tier in content.tiers"
           v-editable="tier"
           :class="{'has-emphasis': tier.emphasis}">
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
            <rich-text v-editable="feature"
                       :content="feature.text"
                       :key="feature._uid"></rich-text>
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
    background: $brand-lightest;
  }
  
  .pricing-tiers-inner {
    @include row(center, center);
    @include row-from($tablet, around, stretch);
  }
  
  .pricing-tier {
    @include wrapper(center, center, $direction: column);
    max-width: 395px;
    @include column-scale(
      $default: 23,
      $on-tablet: 11,
      $on-laptop: 7,
    );
    padding: $space-6;
    @include margin-scale(
      bottom,
      $default: $space-8,
      $on-tablet: $space-8,
    );
    background: $page-background;
    border-radius: $border-radius;
    @include shadow($elevation-medium);  
  }
  
  .tier-title,
  .tier-icon,
  .tier-price,
  .tier-features {
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
    text-align: center;
    font-size: $text-large;
    line-height: 1.4;
    
    .rich-text {
      max-width: 285px;
    }
    
    b {
      color: $brand-base;
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
  
  .pricing-tier.has-emphasis {
    @include column-scale (
      $default: 24,
      $on-tablet: 12,
      $on-laptop: 8,
    );
    max-width: 415px;
    
    color: $offset-text-color;
    background: $brand-base;
    @include shadow($elevation-heavier);
    
        
    .tier-title {
      color: $offset-title-color;
      border-color: $offset-title-color;
    }
    
    .tier-price {
      h4 {
        color: $offset-title-color;
      }
    }
    
    .tier-feature {
      b {
        color: $shade-white;
      }
    }
    
    .tier-cta {
      color: $brand-base;
      background: $offset-text-color;  
    }
    
    
  }

</style>


































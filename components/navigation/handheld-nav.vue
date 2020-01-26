<template>

  <nav class="handheld-nav">
    
    <div class="handheld-nav-close">
      <SVG-Loader :icon="'thick-menu-close'"></SVG-Loader>
    </div>
    
    <ul class="handheld-nav-links">
      <li v-for="link in content.links">
        <div @click="$scrollPage(link.target)"> {{link.text}} </div>
      </li>
    </ul>
    
    <ul class="handheld-social-links">
      <li v-for="icon in content.social_icons">
        <a :href="icon.route">
          <SVG-Loader :icon="icon.text_or_icon"></SVG-Loader>
        </a>
      </li>
    </ul>
    
  
  </nav>

</template>


<script>

export default {
  
  props: ['content']
  
}

</script>


<style lang="scss">

  .handheld-nav {
    z-index: 1001;
    position: fixed;
    overflow-y: scroll;
      top: 0;
      right: 0;
    @include media-from($laptop, display, none);
    height: 100vh;
    @include column-scale(
      $default: 20,
      $on-tablet: 18,
    );
    @include pad-scale(
      y,
      $default: $space-6,
    );
    background: $page-background; 
  }
  
  .handheld-nav-links {
    margin: $space-6 0;
    font-size: $text-large;
    font-weight: 600;
    text-align: right;
    div {
      padding: $space-3 $space-5;
    }
  }
  
  .handheld-social-links {
    li {
      text-align: right;
    }
    .svg-icon {
      @include size($text-large);
      margin: $space-2 $space-5;
      fill: $shade-black;
    }
    .svg-icon-accent {
      fill: $page-background;
    }
  }
  
  .handheld-nav-close {
    .svg-icon {
      margin-right: $space-5;
      margin-left: auto;
      @include size(2rem);
    }
  }

</style>
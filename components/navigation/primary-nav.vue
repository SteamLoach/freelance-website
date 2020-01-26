<template>

  <nav class="primary-nav"
       id="primary-nav">
  
    <h2 @click="$scrollPage('main')"> {{content.title}} </h2>
    
    <ul class="nav-links">
      <li v-for="link in content.links">
        <div @click="$scrollPage(link.target)"> {{link.text}} </div>
      </li>
    </ul>
    
    <ul class="social-links">
      <li v-for="icon in content.social_icons">
        <a :href="icon.route">
          <SVG-Loader :icon="icon.text_or_icon"></SVG-Loader>
        </a>
      </li>
    </ul>
    
    <span class="handheld-nav-open">
      <SVG-Loader :icon="'menu-button'"></SVG-Loader>
    </span>
  
  </nav>

</template>


<script>

export default { 
  
  props: ['content'],
    
}

</script>


<style lang="scss">

  .primary-nav {
    z-index: 1000;
    @include row(between, center, $no-wrap: true);
    padding: 0;
    background: $page-background;
    @include transition();
    h2 {
      padding: $space-2;
      @include pad-from($laptop, $xy: $space-4);
      font-size: $title-small;
      @include media-from($tablet, font-size, $title-medium);
      @include transition();
      &:hover {
        cursor: pointer;
        color: $brand-base;
      }
    }
  }
  
  .nav-links,
  .social-links {
    @include media-until($laptop, display, none);
    @include wrapper(around, center, $no-wrap: true);
  }
  
  .nav-links {
    div {
      padding: $space-4 $space-6;
      font-size: $text-body;
      font-weight: 600;
      &:hover {
        cursor: pointer;
        color: $brand-base;
      }
    }
  }
  
  .social-links {
    padding: $space-4;
    .svg-icon {
      @include size($text-large);
      margin: $space-2;
      fill: $shade-black;
    }
    .svg-icon-accent {fill: $page-background;}
  }
  
  .handheld-nav-open {
    @include media-from($laptop, display, none);
    padding: $space-2;
    .svg-icon {
      @include size(2rem);
      fill: $shade-black;
    }
  }


</style>
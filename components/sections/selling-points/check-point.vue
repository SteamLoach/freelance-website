<template>

  <div v-editable="content"
       class="check-point">
    <SVG-Loader :icon="'check-mark'"></SVG-Loader>
    <rich-text :content="content.text"></rich-text>
  </div>

</template>

<script>

export default {
  
  props: ['content'],
  
}

</script>

<style lang="scss">

  .selling-point-content .check-point {
    @include wrapper(start, center, $no-wrap: true);
    p {margin: 0;}
    b {color: $brand-base;}
  }

</style>
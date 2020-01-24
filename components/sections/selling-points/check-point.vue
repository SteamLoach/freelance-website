<template>

  <div v-editable="content"
       class="check-point">
    <SVG-Loader :icon="'check-mark'"></SVG-Loader>
    <span v-html="richText"></span>
  </div>

</template>

<script>

export default {
  
  props: ['content'],
  
  computed: {
    richText: function() {
      return this.$storyapi.richTextResolver.render(this.content.text);
    }
  }
  
}

</script>

<style lang="scss">

  .selling-point-content .check-point {
    @include wrapper(start, center, $no-wrap: true);
    p {margin: 0;}
    b {color: $brand-base;}
  }

</style>
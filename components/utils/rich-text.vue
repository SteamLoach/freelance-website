<template>

  <div class="rich-text"
       v-html="richText">
  </div>

</template>



<script>

export default {
  
  props: ['content'],
  
  computed: {
    richText: function() {
      return this.$storyapi.richTextResolver.render(this.content);
    }
  }
  
}

</script>

<style lang="scss">

  .rich-text {
    width: 100%;
  }

</style>
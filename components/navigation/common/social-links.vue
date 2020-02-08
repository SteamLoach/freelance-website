<template>

  <ul class="social-links">
    <li v-for="link in links">
      <a :href="link.route">
        <SVG-Loader :icon="link.text_or_icon"></SVG-Loader>
      </a>
    </li>
  </ul>

</template>

<script>

export default {
  
  props: ['links']
  
}

</script>
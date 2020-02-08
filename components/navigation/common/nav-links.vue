<template>

  <ul class="nav-links">
    <li v-for="link in links"
        :class="{'is-active': link.target === activeSection}"
        @click="$scrollPage(link.target, 'top', 'primary-nav'),
                handheldNavControl(false)">
        {{link.text}}
    </li>
  </ul>

</template>

<script>
  
import {mapMutations} from 'vuex';

export default {
  
  props: ['links', 'activeSection'],
  
  methods: {
    ...mapMutations({
      handheldNavControl: 'handheldNavControl',
    })
  }
  
}

</script>
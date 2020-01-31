<template>

  <div class="scroll-link"
        :class="{'is-active': isActive}">
      {{link.text}}
  </div>

</template>

<script>

export default {

  props: ['link'],

  mounted() {
    
    if (document.getElementById(this.link.target)) {
      
      this.section = document.getElementById(this.link.target);
      
      this.activeSection();
      
      window.addEventListener('scroll', this.activeSection);
    
    } else {
      
      console.warn(`The "${this.link.text}" scroll-link will not fire because there is no associated element with the id="${this.link.target}" attribute`)
    
    }

  },

  data() {
    return {
      section: '',
      isActive: false,
    }
  },

  methods: {

    activeSection: function() {

      let top = this.section.offsetTop - document.getElementById('primary-nav').offsetHeight;
      let bottom = top + this.section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
          this.isActive = true;
      } else {
          this.isActive = false;
      }

    }

  }

}

</script>
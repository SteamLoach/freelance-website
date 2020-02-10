export const stickyNav = {
  
  mounted() {
    
    this.nav = document.querySelector('#primary-nav');
    
    this.fixNav();
    
    window.addEventListener('scroll', this.fixNav);
    
  },
  
  data() {
    return {
      
      nav: '',
      navIsFixed: false,
      
    }
  },
      
  methods: {
    
    fixNav: function() {
      if(window.scrollY > this.nav.offsetTop) {
        this.navIsFixed = true;
      } else {
        this.navIsFixed = false;
      }
    }
    
  }
  
  
}


export const stickyNav = {
  
  mounted() {
    
    this.nav = document.querySelector('#primary-nav')
    window.addEventListener('scroll', this.fixNav);
    
  },
  
  data() {
    return {
      
      nav: '',
      navIsFixed: false,
      padSiteWrapper: {'padding-top': 0},
      
    }
  },
      
  methods: {
    
    fixNav: function() {
      if(window.scrollY > this.nav.offsetTop) {
        this.padSiteWrapper['padding-top'] = `${this.nav.offsetHeight}px`;
        this.navIsFixed = true;
      } else {
        this.navIsFixed = false;
        this.padSiteWrapper['padding-top'] = 0;
      }
    }
    
  }
  
  
}


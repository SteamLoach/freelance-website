//Requires a data object 'mxn_onePageNav' with the following properties:
//'watchSections': a list of section ids to watch
//'activeSection': initially empty, defines active section
//'navOffset': Nav id if offset is required, else false


export const onePageNav = {
  
  mounted() {
    
    if (this.mxn_onePageNav) {
      
      this.setActiveSection();
      window.addEventListener('scroll', this.$debounce(this.setActiveSection, 250), {capture: true, passive: true});
      
    } else {
      
      console.warn(`onePageNav mixin requires 'mxn_onePageNav' data object. Ensure object includes a 'watchSections' array of element ids and an 'activeSection' key`)
      
    }
    
  },
  
  computed: {
  
    sectionElements: function() {
      let arr = [];
      this.mxn_onePageNav.watchSections.forEach(section => {
        arr.push(document.getElementById(section.target))
      });
      return arr;
    }
    
  },
  
  
  methods: {
    
    setActiveSection: function() {
      
      //Account for nav offset
      let navHeight = 0;
      if (this.mxn_onePageNav.navOffset) {
        navHeight = document.getElementById(this.mxn_onePageNav.navOffset).offsetHeight;
      }
      
      //Watch for active section
      this.sectionElements.forEach(section => {
        
        let top = section.offsetTop - navHeight;
        let bottom = top + section.offsetHeight;
                
        if (window.scrollY >= top && window.scrollY <= bottom) {
          this.mxn_onePageNav.activeSection = section.id;
        }
        
      })
      
    }
    
  }
  
  
}
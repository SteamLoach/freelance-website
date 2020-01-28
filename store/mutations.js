export default {
  
  //Site Settings
  setSettings (state, settings) {
    state.settings = settings
  },
  
  //Handheld Nav
  handheldNavControl (state, bool) {
    state.handheldNav['is-active'] = bool;

  }
  
}
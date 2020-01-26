export default {
  
    loadSettings (context) {
    return this.$storyapi.get('cdn/stories/settings/site-settings', {
      version: process.env.CONTENT_VERSION,
    }).then((res) => {
      context.commit('setSettings', res.data.story.content)
    })
  },
  
}
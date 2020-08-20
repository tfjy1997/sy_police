export default {
  setUser (state, user) {
    state.user = user
  },
  setPageName(state, page) {
    if(page.firstTitle) {
      state.pageName.firstTitle = page.firstTitle
    }
    if(page.secondTitle) {
      state.pageName.secondTitle = page.secondTitle
    }
    if(page.thirdTitle) {
      state.pageName.thirdTitle = page.thirdTitle
    }
  }
}
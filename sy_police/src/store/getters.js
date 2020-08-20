export default {
  pageName: state => {
    return state.pageName.firstTitle + 
      (state.pageName.secondTitle ? ' > ' + state.pageName.secondTitle : '') +
      (state.pageName.thirdTitle ? ' > ' + state.pageName.thirdTitle : '')
  }
}

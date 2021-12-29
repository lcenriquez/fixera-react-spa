let browserDarkModeEnabled = false;

if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // Enable dark mode if match with browser's default
  browserDarkModeEnabled = true;
}

const initialState = {
  user: {
    username: '',
    email: '',
    isLoggedIn: false
  },
  darkModeEnabled: browserDarkModeEnabled
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: {...action.data.user, isLoggedIn: true}
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: {username: '', email: '', isLoggedIn: false}
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        darkModeEnabled: !state.darkModeEnabled
      };
    default:
      return state;
  }
}

export default reducer;
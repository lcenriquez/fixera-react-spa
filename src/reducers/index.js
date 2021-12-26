const initialState = {
  user: {
    username: '',
    email: '',
    isLoggedIn: false
  }
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
    default:
      return state;
  }
}

export default reducer;
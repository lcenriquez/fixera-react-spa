const initialState = {
  user: {
    username: '',
    email: ''
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: [...action.data.user]
      };
    default:
      return state;
  }
}

export default reducer;
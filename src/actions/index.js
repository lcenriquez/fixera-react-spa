const apiUrl = "http://localhost:8000";

function postRequest(path = "", data = {}) {
  let response = fetch(`${apiUrl}/${path}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const signIn = (data) => {
  return function(dispatch) {
    postRequest('auth/login', data)
      .then(response => {
        if(response.ok) return response.json();
        throw new Error("Invalid server response");
      })
      .then(json => {
        json.user = {
          username: 'test',
          email: 'test'
        }
        if(json.user) {
          dispatch({ type: "SIGN_IN", data: json });
        }
      })
      .catch((error) => {
        // console.log("Error en el servidor");
        throw error;
      });
  };
};

const signOut = () => {
  return function(dispatch) {
    dispatch({ type: "SIGN_OUT" });
  };
};

const toggleTheme = () => {
  return function(dispatch) {
    dispatch({ type: "TOGGLE_THEME" });
  };
};

module.exports = {
  signIn,
  signOut,
  toggleTheme
}
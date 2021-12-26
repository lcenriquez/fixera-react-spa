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
    return postRequest('auth/login', data)
      .then(response => {
        if(response.ok) {
          console.log("OK");
        } else {
          console.log("NOT OK");
        }
        return response.json();
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
      .catch(() => {
        console.log("Error en el servidor");
      });
  };
};

const signOut = () => {
  return function(dispatch) {
    dispatch({ type: "SIGN_OUT" });
  };
};

module.exports = {
  signIn,
  signOut
}
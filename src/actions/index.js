const signIn = (username, password) => {
  return function(dispatch) {
    return fetch(`https://fakeapi.com/?username=${username}&password=${password}`)
      .then(response => response.json())
      .then(json => {
        if(json.Response === "True") {
          dispatch({ type: "SIGN_IN", data: json });
        }
      })
      .catch(() => {
        console.log("Error en el fetch...")
      });
  };
};

module.exports = {
  signIn
}
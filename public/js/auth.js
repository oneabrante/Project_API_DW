function isAuthenticated() {
    if (!getToken()) {
      window.location.href = '/login.html';
    } else {
      return true;
    }
  }
  
  function getToken() {
    return localStorage.getItem('@EyesUpToken:token');
  }
  
  function signin(token) {
    localStorage.setItem('@EyesUpToken:token', token);
  
    window.location.href = '/inside.html';
  }
  
  function signout() {
    localStorage.removeItem('@EyesUpToken:token');
  
    window.location.href = '/index.html';
  }
  
  export default { isAuthenticated, getToken, signin, signout };
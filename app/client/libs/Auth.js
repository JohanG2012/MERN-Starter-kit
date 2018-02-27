import JWT from './JWT';

class Auth {
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  static isUserAuthenticated() {
    const token = localStorage.getItem('token');
    if (token) {
      return JWT.decode(token);
    }
  }

  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  static getToken() {
    return localStorage.getItem('token');
  }
}

export default Auth;

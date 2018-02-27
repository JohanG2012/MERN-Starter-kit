import JwtDecode from 'jwt-decode';

class Jwt {
  static decode(token) {
    const decoded = JwtDecode(token);
    return decoded;
  }
  static getUsername(token) {
    return this.decode(token).username;
  }
}

export default Jwt;

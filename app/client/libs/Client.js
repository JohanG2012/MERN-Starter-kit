/**
 * Class for performing HTTP operations
 */
class Client {
  /**
   * serialize - Takes and Object and returns a URI Encoded URI.
   * @param  {object} obj Data to be encoded
   * @return {string}     URI Encoded string.
   */
  static serialize(obj) {
    const str = [];
    const keys = Object.keys(obj);
    let i;
    for (i = 0; i < keys.length; i += 1) {
      if (Object.prototype.hasOwnProperty.call(obj, keys[i])) {
        str.push(`${encodeURIComponent(keys[i])}=${encodeURIComponent(obj[keys[i]])}`);
      }
    }
    return str.join('&');
  }

  /**
   * HTTP POST
   * @param {string} uri      URI to POST to.
   * @param {Object} [obj={}] Data to POST
   */
  static async POST(uri, obj = {}) {
    const httpHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const headers = new Headers(httpHeaders);
    const body = this.serialize(obj);
    const options = {
      method: 'post',
      headers,
      body
    };

    const response = await fetch(uri, options);
    const json = await response.json();
    const result = { status: response.status, message: response.message, ...json };
    return result;
  }

  /**
   * HTTP GET
   * @param {string} uri URI to GET
   */
  static async GET(uri) {
    const httpHeaders = {
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: `bearer ${Auth.getToken()}`
    };

    const headers = new Headers(httpHeaders);

    const options = {
      method: 'get',
      headers
    };

    const url = uri.includes('token') ? `${uri}${Auth.getToken()}` : uri;

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  }

  /**
   * HTTP PATCH
   * @param {string} uri      URI to PATCH
   * @param {object} [obj={}] Data to PATCH
   */
  static async PATCH(uri, obj = {}) {
    const httpHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const headers = new Headers(httpHeaders);
    const body = this.serialize(obj);
    const options = {
      method: 'PATCH',
      headers,
      body
    };

    const response = await fetch(uri, options);
    const json = await response.json();
    const result = { status: response.status, message: response.message, ...json };
    return result;
  }
}

export default Client;

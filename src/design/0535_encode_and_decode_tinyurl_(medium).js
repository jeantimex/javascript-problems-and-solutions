/**
 * Encode and Decode TinyURL
 *
 * TinyURL is a URL shortening service where you enter a URL
 * such as https://leetcode.com/problems/design-tinyurl and
 * it returns a short URL such as http://tinyurl.com/4e9iAk.
 *
 * Design the encode and decode methods for the TinyURL service.
 * There is no restriction on how your encode/decode algorithm should work.
 *
 * You just need to ensure that a URL can be encoded to a tiny URL and
 * the tiny URL can be decoded to the original URL.
 */

/**
 * Base62 Solution
 */
class TinyUrl {
  constructor() {
    this.database = {};
    this.id = 0;
  }

  idToShortUrl(n) {
    const map = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let shortUrl = '';

    while (n) {
      shortUrl = map[n % 62] + shortUrl;
      n = Math.floor(n / 62);
    }

    return shortUrl;
  }

  shortUrlToId(shortUrl) {
    let id = 0;

    for (let c of shortUrl) {
      if ('a' <= c && c <= 'z') {
        id = id * 62 + c.charCodeAt(0) - 'a'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        id = id * 62 + c.charCodeAt(0) - 'A'.charCodeAt(0) + 26;
      } else {
        id = id * 62 + c.charCodeAt(0) - '0'.charCodeAt(0) + 52;
      }
    }

    return id;
  }

  /**
   * Encodes a URL to a shortened URL.
   *
   * @param {string} longUrl
   * @return {string}
   */
  encode(longUrl) {
    const shortUrl = this.idToShortUrl(this.id);
    this.database[this.id++] = longUrl;
    return shortUrl;
  }

  /**
   * Decodes a shortened URL to its original URL.
   *
   * @param {string} shortUrl
   * @return {string}
   */
  decode(shortUrl) {
    const id = this.shortUrlToId(shortUrl);
    return this.database[id];
  }
}

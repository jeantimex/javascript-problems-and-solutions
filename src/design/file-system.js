/**
 * File System
 */

class FileSystem {
  constructor() {
    this.pathMap = new Map([['', 0]]);
  }

  /**
   * Create a path with value
   * @param {string} path
   * @param {number} value
   * @return {boolean}
   */
  create(path, value) {
    if (this.pathMap.has(path)) {
      return false;
    }

    const lastSlashIndex = path.lastIndexOf('/');
    if (!this.pathMap.has(path.substring(0, lastSlashIndex))) {
      return false;
    }

    this.pathMap.set(path, value);
    return true;
  }

  /**
   * Returns the path value
   * @param {string} path
   * @return {number}
   */
  get(path) {
    return this.pathMap.get(path);
  }

  /**
   * Update the path value
   * @param {string} path
   * @param {number} value
   * @return {boolean}
   */
  set(path, value) {
    if (!this.pathMap.has(path)) {
      return false;
    }

    this.pathMap.set(path, value);
  }
}

export { FileSystem };

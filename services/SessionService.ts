import { SESSION_KEY } from '~/utils/const';

/**
 * Provide methods for managing user session
 */
export class SessionService {
  private static storage = process.client ? window.sessionStorage : null;
  private static _isPermanent = false;

  /**
   * Load the session from storage
   * @static
   * @memberof SessionService
   */
  static loadSession() {
    if (process.client) {
      if (window.localStorage.getItem(SESSION_KEY)) {
        this.storage = window.localStorage;
      }
      if (SessionService.getSessionId()) {
        this._isPermanent = true;
      }
    }
  }

  static get isPermanent() {
    return this._isPermanent;
  }

  /**
   * Set a new session
   * @static
   * @param {string} sessionId
   * @param {boolean} [isPermanent=false]
   * @memberof SessionService
   */
  static setSession(sessionId: string, isPermanent: boolean = false) {
    this._isPermanent = isPermanent;
    if (this._isPermanent) {
      this.storage = window.localStorage;
    }
    SessionService.setSessionId(sessionId);
  }

  /**
   * Change the session id of this session
   * @static
   * @param {string} sessionId
   * @memberof SessionService
   */
  static setSessionId(sessionId: string) {
    this.storage.setItem(SESSION_KEY, sessionId);
  }

  /**
   * Get the session id of this session
   * @static
   * @returns
   * @memberof SessionService
   */
  static getSessionId() {
    return this.storage.getItem(SESSION_KEY) || null;
  }

  /**
   * Reset the current session
   * @static
   * @memberof SessionService
   */
  static resetSession() {
    if (this._isPermanent) {
      window.localStorage.removeItem(SESSION_KEY);
    } else {
      window.sessionStorage.removeItem(SESSION_KEY);
    }
    this.storage.clear();
    this.storage = window.sessionStorage;
  }
}

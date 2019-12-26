export default {
  title: 'Example',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,


   /**
   * @type {string}
   * @description api base URI
   */
  baseAPIUrl: 'https://example.com/',
  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: ['production', 'development']
}

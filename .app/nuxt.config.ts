export default defineNuxtConfig({
  extends: [
    /**
     * Uncomment the following line to add the Apollux Layout Collapse layer
     */
    // '../layers/apollux-layout-collapse',

    /**
     * This extends the base Apollux layer.
     *
     * Alternatively you can use the following:
     * 'github:cssninjaStudio/apollux/layers/xxx#v1.0.0'
     *
     * And set GIGET_AUTH=<github_token> in your .env file
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    '../layers/apollux',
  ],

  /**
   * Load local font with @fontsource packages
   * @see https://fontsource.org/
   */
  css: [
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
  ],
})

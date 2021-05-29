module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      jsx: {
        injectH: false
      }
    }]
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import', 'transform-vue-jsx']
}

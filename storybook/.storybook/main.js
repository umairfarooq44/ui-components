// .storybook/main.js

module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@react-theming/storybook-addon'
    // 'storybook-contrast'
  ]
};

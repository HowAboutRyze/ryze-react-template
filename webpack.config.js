const HtmlWebpackAlterPlugin = require('html-webpack-alter-plugin');
const path = require('path');
const projectConfig = path.join(process.cwd(), 'project.config.js');
const projectData = require(projectConfig);

module.exports = {
  target:'web', 
  framework: 'react',
  entry: {
    index: 'src/app.js'
  },
  plugins: [
    new HtmlWebpackAlterPlugin({
      position: 'head',
      content: [{
        type: 'script',
        data: `window.__PROJECT_STATE__=${JSON.stringify(projectData)}`
      }]
    })
  ]
};
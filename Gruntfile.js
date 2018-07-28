const path = require("path");
const devConfig = require("./webpack.config.babel");
const prodConfig = require("./production.config.babel");

const gruntTask = (grunt) => {
  grunt.initConfig({
    "webpack": {
      build: prodConfig
    },
    "webpack-dev-server": {
      options: {
        webpack: devConfig
      },
      start: devConfig.devServer
    }
  });

  grunt.loadNpmTasks("grunt-webpack");
};

module.exports = gruntTask;

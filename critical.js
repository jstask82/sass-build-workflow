"use strict";
const critical = require('critical');
const srcfile = "index.html";

critical.generate({
      inline: true,
      base: './',
      src: srcfile,
      dest: 'index-critical.html',
      minify: true,
      dimensions: [{
            height: 360,
            width: 640
        }, {
            height: 800,
            width: 1280
        }]
  });
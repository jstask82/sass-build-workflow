"use strict";
//https://github.com/addyosmani/critical#readme
const critical = require('critical');

critical.generate({
      inline: true,
      base: './',
      src: 'index.html', //or URI
      dest: 'index.html',
      dimensions: [{
            height: 640,
            width: 360
        }, {
            height: 800,
            width: 1280
        }],
        ignore: {
            atrule: ['@font-face']  //defer fonts
            //rule: [/some-regexp/],
            //decl: (node, value) => /big-image\.png/.test(value)
          }
  });
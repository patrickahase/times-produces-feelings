import React, { Component } from 'react'

export class BGAnim extends Component {
  render() {
    return (
      <div id="bg-image">
        <canvas id="bg-image-canvas"></canvas>
      </div>
    )
  }
  componentDidMount(){

  }
}

export default BGAnim

var img = new Image();
img.onload = start;
img.src = require("./bg.jpg");

function start() {
  
  var canvas = document.querySelector("canvas");
  var ctx = canvas.getContext("2d");

  function mix(a, b, l) {
    return a + (b - a) * l;
  }
  
  function upDown(v) {
    return Math.sin(v) * 0.5 + 0.5;
  }
  
  function render(time) {
    time *= 0.0003;

    resize(canvas);

    var t1 = time;
    var t2 = time * 0.37;

    // for each line in the canvas
    for (var dstX = 0; dstX < canvas.width; ++dstX) {
      
      // v is value that goes 0 to 1 down the canvas
      var v = dstX / canvas.width;
      
      // compute some amount to offset the src
      var off1 = Math.sin((v + 0.5) * mix(3, 12, upDown(t1))) * 300;
      var off2 = Math.sin((v + 0.5) * mix(3, 12, upDown(t2))) * 300;
      var off = off1 + off2;
      
      // compute what line of the source image we want
      // NOTE: if off = 0 then it would just be stretching
      // the image down the canvas.
      var srcX = dstX * img.width / canvas.width + off;
      
      // clamp srcY to be inside the image
      srcX = Math.max(0, Math.min(img.width - 1, srcX));

      // draw a single line from the src to the canvas
      ctx.drawImage(
        img, 
        srcX, 0, 1, img.height, 
        dstX, 0, 1, canvas.height);
    }    
    
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  function resize(canvas) {
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    if (width !== canvas.width || height !== canvas.height) {
      canvas.width = width;
      canvas.height = height;
    }
  }
}
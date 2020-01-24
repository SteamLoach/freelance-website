/******
Copyright (c) 2020 by Y.ENDO (https://codepen.io/y_endo/pen/gObOxoM)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
******/

import Vue from 'vue';

function random(low, high) {
  return Math.random() * (high - low) + low;
}

class Visual {
  constructor() {
    this.canvas = document.querySelector('#particle-visual');
    this.context = this.canvas.getContext('2d');
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.particleLength = 250;
    this.particles = [];
    this.particleMaxRadius = 12;

    this.handleResizeBind = this.handleResize.bind(this);

    this.initialize();
    this.render();
  }

  initialize() {
    this.resizeCanvas();
    for (let i = 0; i < this.particleLength; i++) {
      this.particles.push(this.createParticle(i));
    }
    this.bind();
  }

  bind() {
    window.addEventListener('resize', this.handleResizeBind, false);
  }
  
  unbind() {
    window.removeEventListener('resize', this.handleResizeBind, false);
  }
  


  handleResize() {
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvasWidth = document.body.offsetWidth;
    this.canvasHeight = document.body.offsetHeight;
    this.canvas.width = this.canvasWidth * window.devicePixelRatio;
    this.canvas.height = this.canvasHeight * window.devicePixelRatio;
    this.context = this.canvas.getContext('2d');
    this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  createParticle(id, isRecreate) {
    const radius = random(1, this.particleMaxRadius);
    const x = isRecreate ? -radius - random(0, this.canvasWidth) : random(0, this.canvasWidth);
    let y = random(this.canvasHeight / 2 - 150, this.canvasHeight / 2 + 150);
    y += random(-100, 100);
    const alpha = random(0.05, 1);

    return {
      id: id,
      x: x,
      y: y,
      startY: y,
      radius: radius,
      defaultRadius: radius,
      startAngle: 0,
      endAngle: Math.PI * 2,
      alpha: alpha,
      color: { r: random(0, 255), g: random(0, 100), b: 255 },
      speed: alpha + 1,
      amplitude: random(50, 300),
      isBurst: false
    };
  }

  drawParticles() {
    this.particles.forEach(particle => {

      this.moveParticle(particle);

      this.context.beginPath();
      this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
      this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
      this.context.fill();
    });
  }

  moveParticle(particle) {
    particle.x += particle.speed;
    particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
  }


  render() {
    this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);

    this.drawParticles();

    this.particles.forEach(particle => {
      if (particle.x - particle.radius >= this.canvasWidth) {
        this.particles[particle.id] = this.createParticle(particle.id, true);
      }
    });

    requestAnimationFrame(this.render.bind(this));
  }
}

const particleVisual = function() {
  new Visual();
}

Vue.prototype.$particleVisual = particleVisual;
/** @type {HTMLCanvasElement} */
import {
  randomIntFromRange,
  randomItemFromArray,
  randomRgbColor,
} from './helper';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

let mouse = { x: undefined, y: undefined };

const colors = ['#DB488B', '#1F1A70', '#1A0E3E', '#3337C0', '#D854C2'];

window.addEventListener('resize', (e) => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Object {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  ctx.fillStyle = 'rgba(255,255,255)';
  ctx.fillRect(0, 0, width, height);
  new Object(10, 10, 10, 10, 10, colors[0]).draw(ctx);
  requestAnimationFrame(animate);
}
animate();

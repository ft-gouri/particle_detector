const r = require("raylib");

const width = 400;
const height = 300;

const field1X = 100;
const field1Y = 0;
const field1Size = 80;

const field2X = 250;
const field2Y = 0;
const field2Size = 5;

const field3X = 0;
const field3Y = 50;
const field3Size = 20;

let x1 = 0;
let x2 = width / 2;
let y3 = 0;

let size = 20;

let speed1 = 3;
let speed2 = 3;
let speed3 = 2;

function setup() {
  r.InitWindow(width, height, "Particle Scanner");
  r.SetTargetFPS(60);
}

function color(x, field, fSize) {
  let colour = r.WHITE;
  return (x + size >= field && x <= field + fSize) ? colour = r.RED : colour;

}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(field1X, field1Y, field1Size, height, r.BLUE);
  r.DrawRectangle(field2X, field2Y, field2Size, height, r.BLUE);
  r.DrawRectangle(field3X, field3Y, width, field3Size, r.BLUE);

  r.DrawRectangle(x1, 0, size, height, color(x1, field1X, field1Size));
  r.DrawRectangle(x2, 0, size, height, color(x2, field2X, field2Size));
  r.DrawRectangle(0, y3, width, size, color(y3, field3Y, field3Size));

  r.EndDrawing();
}
function speed(x, speed) {
  return x + speed;
}

function update() {
  (x1 + size >= width / 2 || x1 < 0) ? speed1 = -speed1 : speed1;
  (x2 + size > width || x2 < width / 2) ? speed2 = -speed2 : speed2;
  (y3 + size >= height || y3 < 0) ? speed3 = -speed3 : speed3;

  x1 = speed(x1, speed1);
  x2 = speed(x2, speed2);
  y3 = speed(y3, speed3);

}

function running() {
  return !r.WindowShouldClose();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  setup,
  running,
  draw,
  update,
  teardown
};
const r = require('raylib');
const pv = require('./particle_fields');

const width = 400;
const height = 300;

let widthScanner1 = 0;
let widthScanner2 = width / 2;
let heightScanner3 = 0;

let size = 20;

let speed1 = 3;
let speed2 = 3;
let speed3 = 2;

function setup() {
    r.InitWindow(width, height, 'Particle Scanner');
    r.SetTargetFPS(60);
}

function color(x, field, fSize) {
    let colour = r.WHITE;
    return x + size >= field && x <= field + fSize ? (colour = r.RED) : colour;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(pv.field1X, pv.field1Y, pv.field1Size, height, r.BLUE);
    r.DrawRectangle(pv.field2X, pv.field2Y, pv.field2Size, height, r.BLUE);
    r.DrawRectangle(pv.field3X, pv.field3Y, width, pv.field3Size, r.BLUE);

    r.DrawRectangle(
        widthScanner1,
        0,
        size,
        height,
        color(widthScanner1, pv.field1X, pv.field1Size),
    );
    r.DrawRectangle(
        widthScanner2,
        0,
        size,
        height,
        color(widthScanner2, pv.field2X, pv.field2Size),
    );
    r.DrawRectangle(
        0,
        heightScanner3,
        width,
        size,
        color(heightScanner3, pv.field3Y, pv.field3Size),
    );

    r.EndDrawing();
}
function speed(x, speed) {
    return x + speed;
}

function update() {
    widthScanner1 + size >= width / 2 || widthScanner1 < 0
        ? (speed1 = -speed1)
        : speed1;
    widthScanner2 + size > width || widthScanner2 < width / 2
        ? (speed2 = -speed2)
        : speed2;
    heightScanner3 + size >= height || heightScanner3 < 0
        ? (speed3 = -speed3)
        : speed3;

    widthScanner1 = speed(widthScanner1, speed1);
    widthScanner2 = speed(widthScanner2, speed2);
    heightScanner3 = speed(heightScanner3, speed3);
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
    teardown,
};

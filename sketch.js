const r = require('raylib');
const pv = require('./particle_fields');
const s1 = require('./scanner1');
const s2 = require('./scanner2');
const s3 = require('./scanner3');
const sf = require('./sacnnerFunctions');

function setup() {
    r.InitWindow(pv.width, pv.height, 'Particle Scanner');
    r.SetTargetFPS(60);
}

function update() {
    s1.speed = sf.direction(s1.start, s1.size, pv.width / 2, 0, s1.speed);
    s1.start = sf.move(s1.start, s1.speed);

    s2.speed = sf.direction(
        s2.start,
        s1.size,
        pv.width,
        pv.width / 2,
        s2.speed,
    );
    s2.start = sf.move(s2.start, s2.speed);

    s3.speed = sf.direction(s3.start, s1.size, pv.height, 0, s3.speed);
    s3.start = sf.move(s3.start, s3.speed);
}

function drawRange(x, y, width, height, color) {
    return r.DrawRectangle(x, y, width, height, color);
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    particle_1 = drawRange(
        pv.field1X,
        pv.field1Y,
        pv.field1Size,
        pv.height,
        r.BLUE,
    );
    particle_2 = drawRange(
        pv.field2X,
        pv.field2Y,
        pv.field2Size,
        pv.height,
        r.BLUE,
    );
    particle_2 = drawRange(
        pv.field3X,
        pv.field3Y,
        pv.width,
        pv.field3Size,
        r.BLUE,
    );
    scanner_1 = drawRange(
        s1.start,
        0,
        s1.size,
        pv.height,
        sf.overlap(s1.start, pv.field1X, pv.field1Size) ? r.RED : r.WHITE,
    );
    scanner_2 = drawRange(
        s2.start,
        0,
        s1.size,
        pv.height,
        sf.overlap(s2.start, pv.field2X, pv.field2Size) ? r.RED : r.WHITE,
    );
    scanner_3 = drawRange(
        0,
        s3.start,
        pv.width,
        s1.size,
        sf.overlap(s3.start, pv.field3Y, pv.field3Size) ? r.RED : r.WHITE,
    );

    r.EndDrawing();
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

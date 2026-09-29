const r = require('raylib');
const w = require('./window');
const p = require('./particle_fields');
const s1 = require('./scanner1');
const s2 = require('./scanner2');
const s3 = require('./scanner3');
const sf = require('./sacnnerFunctions');

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(w.WIDTH, w.HEIGHT, 'Particle Scanner');
    r.SetTargetFPS(60);
}

function update() {
    s1.speed = sf.direction(s1.start, s1.width, w.WIDTH / 2, 0, s1.speed);
    s1.start = sf.move(s1.start, s1.speed);

    s2.speed = sf.direction(s2.start, s2.width, w.WIDTH, w.WIDTH / 2, s2.speed);
    s2.start = sf.move(s2.start, s2.speed);

    s3.speed = sf.direction(s3.start, s3.width, w.HEIGHT, 0, s3.speed);
    s3.start = sf.move(s3.start, s3.speed);
}

function drawRange(x, y, width, height, color) {
    return r.DrawRectangle(x, y, width, height, color);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    particle_1 = drawRange(
        p.field1X,
        p.field1Y,
        p.field1Size,
        w.HEIGHT,
        r.BLUE,
    );
    particle_2 = drawRange(
        p.field2X,
        p.field2Y,
        p.field2Size,
        w.HEIGHT,
        r.BLUE,
    );
    particle_3 = drawRange(p.field3X, p.field3Y, w.WIDTH, p.field3Size, r.BLUE);
    scanner_1 = drawRange(
        s1.start,
        0,
        s1.width,
        w.HEIGHT,
        sf.chooseColor(s1.start, s1.width, p.field1X, p.field1Size),
    );
    scanner_2 = drawRange(
        s2.start,
        0,
        s2.width,
        w.HEIGHT,
        sf.chooseColor(s2.start, s2.width, p.field2X, p.field2Size),
    );
    scanner_3 = drawRange(
        0,
        s3.start,
        w.WIDTH,
        s3.width,
        sf.chooseColor(s3.start, s3.width, p.field3Y, p.field3Size),
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

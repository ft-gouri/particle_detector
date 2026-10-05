const r = require('raylib');
const particles = require('./particles');
const range = require('./range');
const detector = require('./detector');

function setup(world) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.width, world.height, 'Particle Scanner');
    r.SetTargetFPS(world.fps);

    world.p1 = { x: 100, y: 0, width: 50, height: world.height };
    world.p2 = { x: 200, y: 0, width: 5, height: world.height };
    world.p3 = { x: 0, y: 80, width: world.width, height: 20 };

    world.r1 = range.create(world.p1);
    world.r2 = range.create(world.p2);
    world.r3 = range.create(world.p3);

    world.s1 = {
        x: 0,
        y: 0,
        width: 20,
        height: world.height,
        lower: 0,
        upper: world.width / 2,
        speed: 0.5,
        direction: 'x',
    };

    world.s2 = {
        x: world.width / 2,
        y: 0,
        width: 20,
        height: world.height,
        lower: world.width / 2,
        upper: world.width,
        speed: 2,
        direction: 'x',
    };

    world.s3 = {
        x: 0,
        y: 0,
        width: world.width,
        height: 20,
        lower: 0,
        upper: world.height,
        speed: 3,
        direction: 'y',
    };
}

function update(world) {
    detector.update(world.s1);
    detector.update(world.s2);
    detector.update(world.s3);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    particles.draw(world.p1);
    particles.draw(world.p2);
    particles.draw(world.p3);

    detector.draw(world.s1, world.p1, world.p2);
    detector.draw(world.s2, world.p1, world.p2);
    detector.draw(world.s3, world.p3);

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
    update,
    draw,
    running,
    teardown,
};

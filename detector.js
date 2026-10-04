const r = require('raylib');
const range = require('./range');

function create(detector) {
    return {
        x: detector.x,
        y: detector.y,
        width: detector.width,
        height: detector.height,
        lower: detector.lower,
        upper: detector.upper,
        speed: detector.speed,
        direction: detector.direction,
    };
}

function determineDirection(detector) {
    const position = detector.direction === 'x' ? detector.x : detector.y;

    const size = detector.direction === 'x' ? detector.width : detector.height;

    return position + size >= detector.upper || position < detector.lower
        ? -detector.speed
        : detector.speed;
}

function move(detector) {
    detector.speed = determineDirection(detector);

    if (detector.direction === 'x') {
        detector.x += detector.speed;
    } else {
        detector.y += detector.speed;
    }
}

function update(detector) {
    move(detector);
}

function determineColor(detector, ranges) {
    return range.overlap(detector, ranges) ? r.RED : r.WHITE;
}

function draw(detector, ranges) {
    const color = determineColor(detector, ranges);

    r.DrawRectangle(
        detector.x,
        detector.y,
        detector.width,
        detector.height,
        color,
    );
}

module.exports = {
    create,
    determineDirection,
    move,
    update,
    determineColor,
    draw,
};

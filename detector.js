const r = require('raylib');
const range = require('./range');

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

function determineColor(detector, range1, range2) {
    return range.overlap(detector, range1, range2) ? r.RED : r.WHITE;
}

function draw(detector, range1, range2) {
    const color = determineColor(detector, range1, range2);

    r.DrawRectangle(
        detector.x,
        detector.y,
        detector.width,
        detector.height,
        color,
    );
}

module.exports = {
    determineDirection,
    move,
    update,
    determineColor,
    draw,
};

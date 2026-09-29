const s1 = require('./scanner1');

function move(x, speed) {
    return x + speed;
}

function direction(x, size, upper, lower, speed) {
    return x + size >= upper || x < lower ? -speed : speed;
}

function isOutOfBounds(x, field, fSize) {
    return x + s1.size >= field && x <= field + fSize;
}

function overlap(x, field, fSize) {
    return isOutOfBounds(x, field, fSize) ? true : false;
}
module.exports = {
    move,
    direction,
    isOutOfBounds,
    overlap,
};

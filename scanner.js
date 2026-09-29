const s = require('./window');

const s1 = { start: 0, end: s.WIDTH / 2, speed: 0.5, width: 20, y: 0 };
const s2 = {
    start: s.WIDTH / 2,
    end: s.WIDTH,
    speed: 2,
    width: 20,
    y: s.WIDTH / 2,
};
const s3 = { start: 0, end: s.HEIGHT, speed: 3, width: 20, y: 0 };

module.exports = {
    s1,
    s2,
    s3,
};

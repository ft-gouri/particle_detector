const WIDTH = 300; //WINDOW WIDTH
const HEIGHT = 200; //WINDOW HEIGHT

const s1 = { start: 0, end: WIDTH / 2, speed: 0.5, width: 20, y: 0 };
const s2 = {
    start: WIDTH / 2,
    end: WIDTH,
    speed: 2,
    width: 20,
    y: WIDTH / 2,
};
const s3 = { start: 0, end: HEIGHT, speed: 3, width: 20, y: 0 };

module.exports = {
    s1,
    s2,
    s3,
};

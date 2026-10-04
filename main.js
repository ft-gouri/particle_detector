const sketch = require('./sketch');

function main() {
    const world = {
        width: 300,
        height: 200,
        fps: 60,
    };

    sketch.setup(world);

    while (sketch.running()) {
        sketch.update(world);
        sketch.draw(world);
    }

    sketch.teardown();
}

main();

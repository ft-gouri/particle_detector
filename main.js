const sketch = require('./sketch');

function main() {
    sketch.setup();

    while (sketch.running()) {
        sketch.draw();
        sketch.update();
    }

    sketch.teardown();
}

main();

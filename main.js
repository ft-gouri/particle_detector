const sketch = require("./sketch");

function main() {
  const WIDTH = 400;
  const HEIGHT = 300;
  sketch.setup(WIDTH, HEIGHT);

  while (sketch.running()) {
    sketch.draw();
    sketch.update();
  }

  sketch.teardown();
}

main();
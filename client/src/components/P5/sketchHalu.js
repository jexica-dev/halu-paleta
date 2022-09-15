function sketch(p) {
  p.setup = function () {
    p.createCanvas(1000, 1000);
  };

  p.draw = function () {
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }

    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}

export default sketch;

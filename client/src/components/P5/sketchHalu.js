function sketch(p) {
  p.setup = function () {
    p.createCanvas(1000, 1000);
    p.img = p.loadImage("https://i.imgur.com/jCs31K2.png");
  };

  p.draw = function () {
    if (!p.mouseIsPressed) {
      p.fill(255, 0, 0);
      p.strokeWeight(0.25);
    }
    // else {
    //   p.fill(255, 0, 0);
    // }

    p.triangle(
      p.mouseX + 30 - 30,
      p.mouseY + 75 - 60,
      p.mouseX + 58 - 30,
      p.mouseY + 20 - 60,
      p.mouseX + 86 - 30,
      p.mouseY + 75 - 60
    );

    p.image(p.img, 0, p.height / 2, p.img.width / 2, p.img.height / 2);
    // p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}

export default sketch;

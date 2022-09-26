import halohalo from "../../images/halohalo.png";
import halulogo from "../../images/halulogo.svg";

function sketch(p) {
  p.setup = function () {
    p.createCanvas(1000, 1000);
    // p.img = p.loadImage("https://i.imgur.com/bqls1TK.png");
    p.img = p.loadImage(halohalo);
    p.img2 = p.loadImage(halulogo);
  };

  p.draw = function () {
    p.background(255, 236, 72, 3);
    if (!p.mousePressed) {
      p.fill(255, 236, 72, 3);
      p.rect(0, 0, 1000, 1000);
    } else {
      p.fill(0);
    }

    // p.strokeWeight(0.25);

    p.image(
      p.img,
      p.mouseX - p.width / 4.5,
      p.mouseY - p.height / 4.5,
      p.img.width / 1.25,
      p.img.height / 1.25
    );

    p.image(p.img2, 50, 470, p.img2.width / 1.25, p.img2.height / 1.25);

    // p.filter(p.BLUR, 1);
    // p.image(p.img, p.width, p.height, p.img.width / 2, p.img.height / 2);
    // p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}

export default sketch;

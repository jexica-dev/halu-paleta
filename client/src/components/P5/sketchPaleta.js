import paleta from "../../images/paleta-90.png";

function sketchPaleta(p) {
  p.setup = function () {
    p.createCanvas(1000, 1000);
    // p.img = p.loadImage("https://i.imgur.com/bqls1TK.png");
    p.img = p.loadImage(paleta);
    // p.img2 = p.loadImage(logo);
  };

  p.draw = function () {
    if (!p.mousePressed) {
      p.fill(172, 158, 255, 5);
      p.rect(0, 0, 1000, 1000);
    } else {
      p.fill(0);
    }

    // p.strokeWeight(0.25);

    p.image(
      p.img,
      p.mouseX - p.width / 2,
      p.mouseY - p.height / 2.25,
      p.img.width,
      p.img.height
    );

    // p.image(p.img2, 50, 500, p.img2.width / 1.25, p.img2.height / 1.25);

    // p.filter(p.BLUR, 1);
    // p.image(p.img, p.width, p.height, p.img.width / 2, p.img.height / 2);
    // p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}

export default sketchPaleta;

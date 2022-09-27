import paleta from "../../images/paleta-90.png";
import paletaLogo from "../../images/paletapop.svg";

function sketchPaleta(p) {
  p.setup = function () {
    p.createCanvas(1000, 1000);
    // p.img = p.loadImage("https://i.imgur.com/bqls1TK.png");
    p.img = p.loadImage(paleta);
    p.img2 = p.loadImage(paletaLogo);

    p.img_x = 0;
    p.img_y = 0;
  };

  p.draw = function () {
    if (!p.mousePressed) {
      p.fill(172, 158, 255, 5);
      p.rect(0, 0, 1000, 1000);
    } else {
      p.clear();
    }

    // p.strokeWeight(0.25);

    // lerp img_x and img_y towards the mouse position
    // weight img_x and img_y stronger to slow down the animation

    let alpha = 0.2;
    p.img_x = p.img_x * (1 - alpha) + p.mouseX * alpha;
    p.img_y = p.img_y * (1 - alpha) + p.mouseY * alpha;

    p.image(
      p.img,
      p.img_x - p.width / 4.5,
      p.img_y - p.height / 4.5,
      p.img.width,
      p.img.height
    );

    // p.image(p.img2, 150, 470, p.img2.width / 1.25, p.img2.height / 1.25);

    // p.filter(p.BLUR, 1);
    // p.image(p.img, p.width, p.height, p.img.width / 2, p.img.height / 2);
    // p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}

export default sketchPaleta;

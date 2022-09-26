import haloImg from "../../images/halohalo.png";
// import halulogo from "../../images/halulogo.svg";

function sketchHex(p) {
  p.setup = function () {
    p.createCanvas(700, 730);
    p.img = p.loadImage(haloImg);
    console.log("halo hex setup called");
    // p.img2 = p.loadImage(halulogo);
  };

  p.draw = function () {
    // p.background(255, 236, 72, 1);

    // if (!p.mousePressed) {
    //   p.fill(255, 236, 72, 3);
    //   p.rect(0, 0, 1000, 1000);
    // } else {
    //   p.fill(0);
    // }

    // p.strokeWeight(0.25);

    p.image(p.img, 0, 450, p.img.width, p.img.height);
  };
}

export default sketchHex;

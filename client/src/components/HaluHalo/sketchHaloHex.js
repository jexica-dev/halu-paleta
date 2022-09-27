import haloImg from "../../images/halohalo.png";
// import halulogo from "../../images/halulogo.svg";

function sketchHex(p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.img = p.loadImage(haloImg);
    // p.img2 = p.loadImage(halulogo);
  };

  p.draw = function () {
    p.image(
      p.img,
      0,
      p.windowHeight - (p.img.height * 1.25) / 1.75,
      p.img.width * 1.25,
      p.img.height * 1.25
    );
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}

export default sketchHex;

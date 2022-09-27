import haloImg from "../../images/halohalo.png";
// import halulogo from "../../images/halulogo.svg";

function sketchHex(p) {
  p.setup = function () {
    p.w = p.min(p.windowWidth, p.windowHeight);
    p.createCanvas(p.w, p.w);

    p.gridWidth = p.w;
    p.gridHeight = p.w;
    p.hexagonSize = p.w / 10;

    p.img = p.loadImage(haloImg);
    // p.img2 = p.loadImage(halulogo);
  };

  p.drawHexagon = function (cX, cY, r) {
    p.beginShape();
    for (let a = 0; a < p.TAU; a += p.TAU / 6) {
      p.vertex(cX + r * p.cos(a), cY + r * p.sin(a));
    }
    p.endShape(p.CLOSE);
  };

  p.makeGrid = function () {
    p.count = 0;
    for (let y = 0; y < p.gridHeight; y += p.hexagonSize / 2.3) {
      for (let x = 0; x < p.gridWidth; x += p.hexagonSize * 1.5) {
        p.drawHexagon(
          x + p.hexagonSize * (p.count % 2 == 0) * 0.75,
          y,
          p.hexagonSize / 2
        );
      }
      p.count++;
    }
  };

  p.draw = function () {
    // p.background(0);
    p.image(
      p.img,
      0,
      p.windowHeight - (p.img.height * 1.25) / 1.75,
      p.img.width * 1.25,
      p.img.height * 1.25
    );
    p.stroke(255, 0);
    p.noFill();

    // if()

    p.makeGrid();

    // p.noLoop();
  };

  // p.windowResized = function () {
  //   p.resizeCanvas(p.windowWidth, p.windowHeight);
  // };
}

export default sketchHex;

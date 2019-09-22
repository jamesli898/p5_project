let img; 

function setup() {
  createCanvas(1125, 1125);

  img = loadImage('parth.png');

  slider = createSlider(0, 900, 1);
  slider.position(10, 40);
  slider.style('width', '80px');
  slider.size(150);
}

let diameter = 0;
function draw() {
  background(img, [0]);
  for (var x = 0; x < width; x += width / 20) {
		for (var y = 0; y < height; y += height / 20) {
			stroke('#39ff14');
			strokeWeight(1);
			line(x+225, 0-225, x+225, height-225);
			line(0+225, y-225, width+225, y-225);
		}
  }
  strokeWeight(10);
  line(0+225, 450, 900+225, 450);
  strokeWeight(10);
  line(450+225, 0, 450+225, 900);

  var diameter = slider.value();

  textSize(20);
  strokeWeight(1);
  text('Expand the circle', 10, 30);
  circle(900/2 + 225, 900/2, diameter);
  fill('#39ff14');

  textSize(20);
  text('Radius:', 10, 100);
  text((diameter/112.5).toFixed(1), 85, 100);

  textSize(20);
  text('CirCUMference:', 10, 130);
  text((2*Math.PI*(diameter/112.5)).toFixed(1), 160, 130);

  textSize(20);
  text('Area:', 10, 160);
  text((Math.PI*(diameter/112.5)*(diameter/112.5)).toFixed(1), 65, 160);

  //image(img, 900/2 + 112.5 + 56.25 + 28.125 + 14.0625, 900/2 - 28.125, diameter / 2, diameter / 2);
}

/*function mouseDragged() {
  diameter = diameter + 5;
  if (diameter > 900) {
    diameter = 0;
  }

  + 112.5 - 28
  - 225 + 28.125
}*/
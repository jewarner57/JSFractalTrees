
let branchLength = 100;

function setup() {
  createCanvas(400, 400);

  slider = createSlider(1, branchLength, 1);
  slider.position(10, 10);
  slider.style('width', '100px');
}

function draw() {
  background(100);

  translate(200, height)
  stroke(255);

  branch(branchLength);
}

function branch(len) {

  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > slider.value()) {
    push();
    rotate(TWO_PI / 0.92);
    branch(len * 0.67)
    pop();
    push();
    rotate(-TWO_PI / 0.92);
    branch(len * 0.67)
    pop();
  }
}


function setup() {
  createCanvas(400, 800);
}

function draw() {
  background(100);
  var len = 100;
  translate(200, height)
  stroke(255);
  branch(100);

}

function branch(len) {
  
  line(0, 0, 0,-len);
  translate(0, -len);
  if(len > 2) {
    push();
    rotate(TWO_PI / 0.92);
    branch(len*0.67)
    pop();
    push();
    rotate(-TWO_PI / 0.92);
    branch(len*0.67)
    pop();
  }
}
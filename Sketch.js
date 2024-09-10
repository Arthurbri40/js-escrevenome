
1
function setup() {
2
  createCanvas(400, 400);
3
}
4

5
function draw() {
6
  background(220);
7
}
8
function setup() {
9
  createCanvas(600, 600);
10

11
  background("white");
12
}
13

14
function draw() {
15
  stroke("blue");
16

17
  fill("red");
18

19
  // console.log(mouseIsPressed)
20

21
  if (mouseIsPressed) {
22
    rect(mouseX, mouseY, 20, 35);
23
  }
24
}
25
function setup() {
26
  createCanvas(400, 400);
27

28
  background("white");
29
}
30

31
function draw() {
32
  stroke("blue");
33

34
  fill("red");
35

36
  if (mouseIsPressed) {
37
    rect(mouseX, mouseY, 20, 35);
38
  }
39
}
40


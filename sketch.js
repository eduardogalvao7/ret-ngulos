
background(200);

// Create a p5.Color object.
let c = color(175, 100, 220);

// Draw the left rectangle.
noStroke();
fill(c);
rect(15, 15, 300, 370);

// Set 'greenValue' to 100.
let greenValue = green(c);

// Draw the right rectangle.
fill(0, greenValue, 0);
rect(50, 15, 35, 70);

describe('Two rectangles. The left one is light purple and the right one is dark green.');
}
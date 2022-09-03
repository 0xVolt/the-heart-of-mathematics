// Global variables for radius and multiplicative factor
let r;
let factor = 2;

// Function to calculate the mapping from one point on the spectrograph to another
function getVector(index, total) {
    // Find the angle
    const angle = map(index % total, 0, total, 0, TWO_PI);

    // Get the vector from point to point
    const v = p5.Vector.fromAngle(angle + PI);
    v.mult(r);

    // Return the vector
    return v;
}

// Setup function
function setup() {
    // Creating a reasonably sized canvas
    createCanvas(windowWidth, windowHeight);

    // Adding a margin so our circle fits snugly in the window
    r = height / 2 - 16;
}

// Draw function
function draw() {
    // Translate origin
    translate(width / 2, height / 2);

    // Black background
    background(25);

    // Making the total number of points and the factor of multiplication dynamic as mouse pointer position
    const total = int(map(mouseY, 0, height, 0, 200));
    // factor = map(mouseX, 0, width, -10, 10);

    console.log(factor)
    factor += 0.1

    // sinusoidalFactor = sin(4 * frameCount / 50);

    // Draw circle
    stroke(255, 150);
    strokeWeight(2);
    noFill();
    ellipse(0, 0, r * 2);

    // Draw lines from point to point using our function
    strokeWeight(2);
    for (let i = 0; i < total; i++) {
        const a = getVector(i, total);
        const b = getVector(i * factor, total);

        line(a.x, a.y, b.x, b.y);
    }
}

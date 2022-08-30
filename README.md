# About this repository
## Dedication
This repository was humourously named *the-heart-of-mathematics* as a nod to the cardioid being heart shaped and in dedication to my dearly beloved Juno. I love you with all my heart and I'm never letting you go. All my love chellams!

## Inspiration
A cardioid is a two-dimensional plane figure that has a heart-shaped curve. The word *cardioid* originated from a Greek word, which means *heart*. By what it looks like, it's easy to see why it's called a heart-shaped curve. What's fascinating is that it's also a form of a sinusoidal spiral but more formally defined as an epicycloid having a single cusp.

The following visuals are what inspired me to take on this passion project of visualising a cardioid.

1. This image shows the cardioid as an envelope of pencil lines. This is the main logic that's implemented in the visualisation. A series of points are plotted equally spread across the circumference of the circle and are numbered from `0` to `n`. Each point is then connected with the point whose index is twice that of it's index. For example, the point indexed at `2` is connected with the point indexed at `4`. Point `5` with `10`. Point `n` with `2n`. The indexing of points can overlap with previously indexed points as the numbering laps the entire circumference.

![](assets/cardioid%20as%20an%20envelope%20of%20a%20pencil%20of%20lines.png)

1. This image shows how cardioids commonly occur in nature as a caustic of light bouncing of the walls of a circular rim like a mug of coffee.

![](assets/cardioid%20as%20caustic%20of%20a%20circle%20with%20light%20source%20right%20on%20the%20perimeter.png)
## Methodology
p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, and anyone else.

This project is a visualisation of a cardioid using the JavaScript library p5.js with the main script in the [`sketch.js`](/the-heart-of-mathematics/sketch.js) JavaScript file.

The project was created with an extension in VSCode to setup a p5.js project with an [`index.html`](/the-heart-of-mathematics/index.html), a [`style.css`](/the-heart-of-mathematics/style.css) and a folder including the p5.js dependency libraries. The `sketch.js` is run using the *Live Server* extension on VSCode to start a `localhost:5000` server to host the script.

## Resources
1. https://p5js.org/ - The best place to learn about p5.js for visualisations using JavaScript.
2. https://en.wikipedia.org/wiki/Cardioid - Can't ever go wrong with Wikipedia, am I right? (You most definitely can. The page is legit however.)
var svg = d3.select('svg');
var originX = 200;
var originY = 200;
var innerCircleRadius = 40;
var outerCircleRadius = 60;

var table = svg.append("circle").attr({
    cx: originX,
    cy: originY,
    r: 40,
    fill: "white",
    stroke: "black"
});

var group = svg.append("g");

var outerCircle = svg.append("circle").attr({
    cx: originX,
    cy: originY,
    opacity: 0,
    r: outerCircleRadius,
    fill: "none",
    stroke: "black"
});

var chairOriginX = originX + ((60) * Math.sin(0));
var chairOriginY = originY - ((60) * Math.cos(0));

var pointOnOuterCircle = svg.append("circle").attr({
    cx: chairOriginX,
    cy: chairOriginY,
    opacity: 0,
    r: 5,
    fill: "black"
});

var chairWidth = 20;
var chair = svg.append("rect").attr({
    x: chairOriginX - (chairWidth / 2),
    y: chairOriginY - (chairWidth / 2),
    width: chairWidth,
    opacity: 0,
    height: 20,
    fill: "none",
    stroke: "blue"
});

// ANIMATIONS

// drawing outer circle
outerCircle.transition().delay(500).duration(500).style("opacity", 1);

// drawing point on outer circle
pointOnOuterCircle.transition().delay(1000).duration(500).style("opacity", 1);

// drawing chair on the point
chair.transition().delay(1500).duration(500).style("opacity", 1);

// rotating the chair
var tween = function (d, i, a) {
    return d3.interpolateString("rotate(0, 200, 200)", "rotate(45, 200, 200)");
}

chair.transition().delay(2000).duration(500).attrTween("transform", tween);


// fading out the intermediate objects
pointOnOuterCircle.transition().delay(4000).duration(500).style("opacity", 0);
outerCircle.transition().delay(4000).duration(500).style("opacity", 0);

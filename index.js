
  var c = document.getElementById("canvas1");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  var c = document.getElementById("canvas2");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  var c = document.getElementById("canvas3");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  var c = document.getElementById("canvas4");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  // arrow--->

  var canvas1 = document.getElementById("myCanvas1");
  var canvas2 = document.getElementById("myCanvas2");
  var canvas3 = document.getElementById("myCanvas3");
  var canvas4 = document.getElementById("myCanvas4");
  var ctx1 = canvas1.getContext("2d");
  var ctx2 = canvas2.getContext("2d");
  var ctx3 = canvas3.getContext("2d");
  var ctx4 = canvas4.getContext("2d");

  window.onload = function () {
    drawArrow(ctx1, 49, 10.5, 10, 10, 10, "black");
    drawArrow(ctx2, 49, 10.5, 10, 10, 10, "black");
    drawArrow(ctx3, 49, 10.5, 10, 10, 10, "black");
    drawArrow(ctx4, 49, 10.5, 10, 10, 10, "black");
  };

  function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color) {
    var headlen = 5;
    var angle = Math.atan2(toy - fromy, tox - fromx);

    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineWidth = arrowWidth;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(
      tox - headlen * Math.cos(angle - Math.PI / 7),
      toy - headlen * Math.sin(angle - Math.PI / 7)
    );

    ctx.lineTo(
      tox - headlen * Math.cos(angle + Math.PI / 7),
      toy - headlen * Math.sin(angle + Math.PI / 7)
    );

    ctx.lineTo(tox, toy);
    ctx.lineTo(
      tox - headlen * Math.cos(angle - Math.PI / 7),
      toy - headlen * Math.sin(angle - Math.PI / 7)
    );

    ctx.stroke();
    ctx.restore();
  }
  var x = 10,
    y = 100;
  function onClick(id, arrowID) {
    var bubble = document.getElementById(id);
    var ctxx = bubble.getContext("2d");
    ctxx.fillStyle = "#808080";
    ctxx.fill();

    draw();
  }

  function draw() {
    ctx1.beginPath();
    ctx1.arc(x, y, 20, 0, 2 * Math.PI);
    ctx1.fillStyle = "rgba(250,0,0,0.4)";
    ctx1.fill();

    x += 2;
    ctx1.fillStyle = "rgba(34,45,23,0.4)";
   
    requestAnimationFrame(draw);
  
  }

  function onReset() {
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fill();

    var c = document.getElementById("canvas2");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fill();

    var c = document.getElementById("canvas3");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fill();

    var c = document.getElementById("canvas4");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fill();
  }
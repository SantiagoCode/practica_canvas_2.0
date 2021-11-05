var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");


function dibujante(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujame()
{
  var color = prompt("Color");
  var xinicial = prompt("X inicial");
  var yinicial = prompt("Y inicial");
  var xfinal = prompt("X final");
  var yfinal = prompt("Y final");

  dibujante(color, xinicial, yinicial, xfinal, yfinal);
}

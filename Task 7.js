function cToF(celsius) 
{
  var celToFahr = 0;
  var cTemp = celsius;
  var celToFahr = (9 * cTemp + (5 * 32)) /5;
  var message = celToFahr;
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fahrToCel = 0;
  var fTemp = fahrenheit;
  var fahrToCel = (5 * (fTemp - 32)) / 9;
  var message = fahrToCel;
    console.log(message);
} 
cToF(40);
fToC(100);
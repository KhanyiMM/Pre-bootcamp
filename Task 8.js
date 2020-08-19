function timeConvert(num) {
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
 if (hours >= 2 && minutes >= 2) {
   return hours + " hours" + ", " + minutes +  " minutes";
} else if (hours == 1 || minutes >= 2) {
 return hours + " hour" + ", " + minutes +  " minutes";
}
}

console.log(timeConvert(71));
console.log(timeConvert(145));
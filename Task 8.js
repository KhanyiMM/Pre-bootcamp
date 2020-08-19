function timeConvert(num) {
   var hours = Math.floor(num / 60);  
   var minutes = num % 60;
  if (hours >= 1 && minutes >= 1) {
  return hours + " hour" + ", " + minutes +  " minutes";
}
}

console.log(timeConvert(71));
function timeConvert(num) {
   var hours = Math.floor(num / 60);  
   var minutes = num % 60;
  if (hours >= 1 && minutes >= 1) {
  return hours + " hours" + ", " + minutes +  " minutes";      
} else {
  return hours + " hour" + ", " + minutes + " minute";
}
}

console.log(timeConvert(71));
console.log(timeConvert(241));
console.log(timeConvert(133));
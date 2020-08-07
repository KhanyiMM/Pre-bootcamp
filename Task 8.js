function timeConvert(num)
 { 
   var hours = Math.floor(num / 60);  
   var minutes = num % 60;
  if (hours < 60 && minutes < 60)
  return hours + " hour(s)" + ", " + minutes +  " minute(s)"      
}

console.log(timeConvert(71));
console.log(timeConvert(247));
console.log(timeConvert(133));

var vowels = "aeiouAEIOU";
var string = "UmuzI bOotcamp";

var array = "";
for (a = 0; a < string.length; a++) {
    if(vowels.indexOf(string[a]) >= 0) array += string[a];
}
console.log(array);
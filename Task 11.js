function commonLetters(str1,str2) {
    var strArray = [];
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                strArray.push(str1[i]);
            }
        }
    }
}

console.log(commonLetters("Khanyi","Kanya"));
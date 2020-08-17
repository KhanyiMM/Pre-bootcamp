function commonCharac(str1,str2) {

    var array = [];
    for (a = 0; a < str1.length; a++) {
        for (b = 0; b < str2.length; b++) {
            if (str1[a] === str2[b]) {
                array.push(str1[a]);
            }
        }
    }
    console.log(array);
}
commonCharac("Khanyi", "Kanya");
function numbers(a,b) {
    if (a == 65) {
        return true;
    } else if (b == 65) {
        return true;
    } else if (a + b == 65) {
        return true;
    }
    return false;
}

console.log(numbers(1,20));
console.log(numbers(60,5));
console.log(numbers(65,5));
function numberThree (x, y) {
    const sum = x + y;
    if (x == 3 || y == 3) {
    return true;
    } else if (sum.toString().includes("3")) {
    return true;
    } else {
        return false;
    }
}

console.log(numberThree(70,3));
console.log(numberThree(12,1));
console.log(numberThree(10,5));
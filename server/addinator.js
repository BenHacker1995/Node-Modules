function addinator(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}

module.exports = addinator;
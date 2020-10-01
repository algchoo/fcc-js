function largestOfFour(arr) {
    let largest = []
    for (let i=0; i<arr.length; i++) {
        let num = arr[i][0]
        for (let j=1; j<arr[i].length; j++) {
            if (num < arr[i][j]) {
                num = arr[i][j]
            }
        }
        largest.push(num)
    }
    return largest
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) // should return [25, 48, 21, -3]
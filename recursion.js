function factorial(num) {

    // 3*2*1 return 6
    if (num == 1 || num == 0) { return 1 }
    if (num == 2) { return 2 }

    return num * factorial(num - 1)
}

let arrNumNormal = [16, 7, 10, 4]
let arrNumEdge = [-100, 0, 0.5, 1000]
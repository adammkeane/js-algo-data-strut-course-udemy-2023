function averagePair(a, num) {
    let p1 = 0;
    let p2 = a.length - 1;

    while (p2 > p1) {
        if ((a[p1] + a[p2]) / 2 > num) {
            p2--
        } else if ((a[p1] + a[p2]) / 2 < num) {
            p1++
        } else {
            return true
        }
    }
    return false
}
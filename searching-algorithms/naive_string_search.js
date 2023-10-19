// find how many times a short string is found within a longer string.

// naiveSearch("lorie loled", "lol") // 1
// naiveSearch("omgpgddffomgdfomdfdoomgo", "omg") // 3

// my solution
function naiveSearch(long, short) {
    let count = 0;
    let p = 0;
    for (let i = 0; i < long.length; i++) {
        if (long[i] === short[0]) {
            p = i + 1
            for (let j = 1; j < short.length; j++) {
                if (long[p] !== short[j]) {
                    break;
                }
                p++
                if (j === short.length - 1) {
                    count++
                }
            }
        }
    }
    return count
}

// official solution
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")
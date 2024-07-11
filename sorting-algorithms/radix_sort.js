// his helper methods
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// mostDigits([23,567,89,12234324,90])

// my code
// needed to steal his code for creating the buckets,
// and replacing the original array with the buckets contents
function radixSort (arr) {
    let mostDigitsNum = mostDigits(arr);
    for (let i = 0; i < mostDigitsNum; i++) {
        // create an array of  10 item, with each of the 10 items being empty arrays
        let digitalBuckets = Array.from({length: 10}, ()=> []);
        for (let j = 0; j < arr.length; j++) {
            digitalBuckets[getDigit(arr[j], i)].push(arr[j]);
        }
        arr = [].concat(...digitalBuckets);
    }
    return arr;
}

console.log(radixSort([23,567,89,12234324,90]))

// his code
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        // create an array of  10 item, with each of the 10 items being empty arrays
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

// radixSort([23,345,5467,12,2345,9852])
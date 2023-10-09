// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

//     areThereDuplicates(1, 2, 3) // false
//     areThereDuplicates(1, 2, 2) // true 
//     areThereDuplicates('a', 'b', 'c', 'a') // true 

// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates() {
    let s1 = {};
    
    for (let e in arguments) {
        s1[arguments[e]] = ++s1[arguments[e]] || 1;
    }
     
    for (let key in s1){
        if (s1[key] > 1) {
            return true   
        }
    } 
    
    return false
}

areThereDuplicates(1, 2, 2)
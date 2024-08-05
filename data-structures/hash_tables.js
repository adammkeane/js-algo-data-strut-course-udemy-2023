// my solution
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
            }
        return total;
    }

    set(key, value) {
        let hashedIndex = this._hash(key);
        console.log(hashedIndex)
        let arrayElement = this.keyMap[hashedIndex];
        if (Array.isArray(arrayElement)) {
            arrayElement.push([key, value]);
        } else {
            this.keyMap[hashedIndex] = [[key, value]];
        }
    }
}

let hashTable = new HashTable();
hashTable.set('first', 'test1');
hashTable.set('first', 'test1');
console.log(hashTable.keyMap);
console.log(hashTable.keyMap[14]);

// official solution
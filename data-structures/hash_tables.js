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
        let index = this._hash(key);
        let arrayElement = this.keyMap[index];
        if (Array.isArray(arrayElement)) {
            arrayElement.push([key, value]);
        } else {
            this.keyMap[index] = [[key, value]];
        }
    }
    get(key) {
        let index = this._hash(key);
        if (!this.keyMap[index]) return undefined;
        for (let i=0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
        }
        return undefined;
    }
}

let hashTable = new HashTable();
hashTable.set('first', 'test1');
hashTable.set('first', 'test1');
console.log(hashTable.keyMap);
console.log(hashTable.get('first'));

// official solution
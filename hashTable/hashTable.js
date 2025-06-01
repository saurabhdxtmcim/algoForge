class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    
    // Hash function to convert a string key into an index
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
    /*
        * Sets a key-value pair in the hash table.
        * If the key already exists, it appends the new value to the existing list.
        * 
        * @param {string} key - The key to set in the hash table.
        * @param {*} value - The value to associate with the key.
        * 
        * @returns {void}
    */
    set(key,value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key){
        let index = this._hash(key);
        let values = [];
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key) {
                    values.push(this.keyMap[index][i][1]);
                }
            }
        }
        return values.length ? values : undefined;
    }
    /*
        * Returns an array of all unique values in the hash table.
        * This method iterates through the keyMap and collects values,
        * ensuring no duplicates are included in the returned array.
        * 
        * @returns {Array} An array of unique values: there are not suppose to be duplicate values but just to make tests simpler, returning unique values
    */
    values(){
        let values = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(values.includes(this.keyMap[i][j][1])) continue; // avoid duplicates
                    // push the value if it is not already in the values array
                    values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    }
    /*
        * Returns an array of all unique keys in the hash table.
        * This method iterates through the keyMap and collects keys,
        * ensuring no duplicates are included in the returned array.
        * 
        * @returns {Array} An array of unique keys: there are not suppose to be duplicate keys but just to make tests simpler, returning unique keys
    */
    keys(){
        let keys = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    // push the key if it is not already in the keys array
                    if(keys.includes(this.keyMap[i][j][0])) continue; // avoid duplicates
                    // push the key if it is not already in the keys array
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    } 
}

// Tests for HashTable
function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        console.error(`❌ ${message} | Expected: ${expected}, Got: ${actual}`);
    } else {
        console.log(`✅ ${message}`);
    }
}
function assertArrayEqual(actual, expected, message) {
    const isEqual = actual.length === expected.length && actual.every((v, i) => v === expected[i]);
    if (!isEqual) {
        console.error(`❌ ${message} | Expected: [${expected}], Got: [${actual}]`);
    } else {
        console.log(`✅ ${message}`);
    }
}

// Test: set and get
const ht = new HashTable();
ht.set('hello', 'world');
ht.set('foo', 'bar');
ht.set('baz', 'qux');

assertArrayEqual(ht.get('hello'), ['world'], "Get values for 'hello'");
assertArrayEqual(ht.get('foo'), ['bar'], "Get values for 'foo'");
assertArrayEqual(ht.get('baz'), ['qux'], "Get values for 'baz'");
assertEqual(ht.get('notfound'), undefined, "Get value for non-existent key returns undefined");

// Test: chaining multiple values
ht.set('foo', 'newbar');
assertArrayEqual(ht.get('foo'), ['bar', 'newbar'], "Chained values for 'foo'");

// Test: keys and values (no duplicates)
ht.set('dup', 'same');
ht.set('dup2', 'same');
const values = ht.values();
const keys = ht.keys();

assertArrayEqual(
  values.sort(),
  ['world', 'bar', 'newbar', 'qux', 'same'].sort(),
  "Values returns all unique values"
);

assertArrayEqual(
  keys.sort(),
  ['hello', 'foo', 'baz', 'dup', 'dup2'].sort(),
  "Keys returns all unique keys"
);

// Test: collision handling
const ht2 = new HashTable(1); // force all keys to collide
ht2.set('a', 1);
ht2.set('b', 2);
ht2.set('c', 3);
assertArrayEqual(ht2.get('a'), [1], "Collision: get 'a'");
assertArrayEqual(ht2.get('b'), [2], "Collision: get 'b'");
assertArrayEqual(ht2.get('c'), [3], "Collision: get 'c'");
assertArrayEqual(ht2.keys().sort(), ['a', 'b', 'c'].sort(), "Collision: keys");
assertArrayEqual(ht2.values().sort(), [1, 2, 3].sort(), "Collision: values");

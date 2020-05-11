let _ = {
  clamp(currentValue, lowerBound, upperBound) {
    let l = Math.max(currentValue, lowerBound);
    let u = Math.min(currentValue, upperBound);
    return Math.min(l, upperBound);
  },
  inRange(number, start, end) {
    if(end === undefined) {
      let end = start;
      let start = 0;
    }
    if(start > end) {
      let temp = end;
      let end = start;
      let start = temp;
    }
    let isInRange = () =>
      start <= number && number < end ? true : false;
      return isInRange();
  },
  words(string) {
    return string.split(' ')
  },
  pad(string, length) {
    if(length <= string.length) {
      return string;
    }
    let addToFrontPadding = (Math.floor((length - string.length)/2));
    let addToBackPadding = (length - string.length - addToFrontPadding);
    let paddedVersion = ' '.repeat(addToFrontPadding) + string + ' '.repeat(addToBackPadding);
    return paddedVersion
  },
  has(object, key) {
    let hasValue = object[key]
    if(hasValue != undefined) {
      return true;
    } return false;
  },
  invert(object) {
    let invertObejct = {};
    for(let key in object) {
      let originalValue = object[key];
      invertedObject = {originalValue: key}
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for(let key in object) {
      let p = predicate(object[key]);
      if(p === true) {
        return key;
      }
    }
    return undefined;
  },
  drop(array, number) {
    if(number === undefined) {
      let number = 1;
      return array.slice(number)
    }
    let droppedArray = array.slice(number)
    return droppedArray;
  },
  dropWhile(array, predicate) {
    let cb = (element, index) => {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size=1) {
    let arrayChunks = [];
    for(let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
}





// // Do not write or modify code below this line.
module.exports = _;

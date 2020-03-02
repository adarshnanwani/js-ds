function mySet() {
  const collection = [];

  this.add = function(item) {
    if (collection.indexOf(item) === -1) {
      collection.push(item);
      return true;
    }
    return false;
  };

  this.has = function(item) {
    if (collection.indexOf(item) !== -1) {
      return true;
    }
    return false;
  };

  this.size = function() {
    return collection.length;
  };

  this.values = function() {
    return collection;
  };

  this.remove = function(item) {
    const index = collection.indexOf(item);
    if (index !== -1) {
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.union = function(otherSet) {
    const thisValues = this.values();
    const otherValues = otherSet.values();
    const unionSet = new Set();
    thisValues.forEach(item => unionSet.add(item));
    otherValues.forEach(item => unionSet.add(item));
    return unionSet;
  };

  this.intersection = function(otherSet) {
    const thisValues = this.values();
    const otherValues = otherSet.values();
    const intersectionSet = new Set();
    otherValues.forEach(item => {
      if (thisValues.has(item)) {
        intersectionSet.add(item);
      }
    });
    return intersectionSet;
  };

  this.subset = function(otherSet) {
    const firstSet = this.values();
    return firstSet.every(item => otherSet.has(item));
  };
}

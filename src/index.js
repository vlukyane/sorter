  class Sorter {
    constructor() {
      this.arr = [];
      this.compare_function = undefined;
    }

    add(element) {
      this.arr.push(element);
    }

    at(index) {
      return this.arr[index];
    }

    get length() {
      return this.arr.length;
    }

    toArray() {
      return this.arr;
    }

    sort(indexes) {
      indexes.sort(comp);
      var temp_arr = [];
      for (var i = 0; i<indexes.length; i++){
        temp_arr.push(this.arr[indexes[i]]);
      }

      function comp(a, b) {
          if (a > b) return 1;
          if (a < b) return -1;
      }
      if (this.compare_function === undefined){
        temp_arr.sort(comp);
      }
      else temp_arr.sort(this.compare_function);

      for (i = 0; i<indexes.length; i++){
        this.arr[indexes[i]] = temp_arr[i];
      }

      return this.arr;

    }

    setComparator(compareFunction) {
      this.compare_function = compareFunction;
    }
  }

  sorter = new Sorter();
  sorter.add(6);
  sorter.add(5);
  sorter.sort([0, 1]);
  sorter.add(2);
  sorter.add(1);
  sorter.sort([1, 0]);

module.exports = Sorter;
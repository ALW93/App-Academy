# **Notes**

## **Sorting Algorithms**

## **Bubble Sort**

- The first major sorting algorithm one learns in introductory programming courses.
- Gives an intro on how to convert unsorted data into sorted data.
- It's almost never used in production code because:
  - It's not efficient
  - It's not commonly used
  - There is stigma attached to it
- **`Bubbling Up`** : Term that infers that an item _is in motion_, _moving in some direction_, and _has some final resting destination_.

- Bubble sort, sorts an array of integers by bubbling the largest integer to the top.
  ![bubble](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/bubble_sort/images/BubbleSort.gif)

```js
// Bubble Sort
function bubble(array) {
  let sorted = true;
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    let num2 = array[i + 1];
    if (num1 > num2) {
      array[i + 1] = num1;
      array[i] = num2;
      sorted = false;
    }
  }
  if (sorted) {
    return array;
  } else {
    return bubble(array);
  }
}
```

---

## **Selection Sort**

- Selection sort organizes the smallest elements to the start of the array.
  ![selection](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/selection_sort/images/SelectionSort.gif)
- Summary of how Selection Sort should work:
  1. Set MIN to location 0
  2. Search the minimum element in the list.
  3. Swap with value at location Min
  4. Increment Min to point to next element.
  5. Repeat until list is sorted.

```js
let selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};
```

---

## **Insertion Sort**

![insert](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/insertion_sort/images/InsertionSort.gif)

- Works by building a larger and larger sorted region at the left-most end of the array.
- Steps:
  1. If it is the first element, and it is already sorted; return 1.
  2. Pick next element.
  3. Compare with all elements in the sorted sub list
  4. Shift all the elemnts in the sorted sub list that is greater than the value to be sorted.
  5. Insert the value
  6. Repeat until list is sorted.

```js
let insertionSort = (inputArr) => {
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
};
```

---

## **Merge Sort**

![merge](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/efficient_sorting_algorithms/merge_sort/images/MergeSort.gif)

- Merge sort is nlogn time.
- We need a function for merging and a function for sorting.
- Steps:
  1. If there is only one element in the list, it is already sorted; return the array.
  2. Otherwise, divide the list recursively into two halves until it can no longer be divided.
  3. Merge the smallest lists into new list in a sorted order.

```js
const merge = (arr1, arr2) => {
  let sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
  }

  return sorted.concat(arr1.slice().concat(arr2.slice()));
};
```

```js
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
    left = mergeSort(arr.slice(0, mid)),
    right = mergeSort(arr.slice(mid));

  return merge(left, right);
};
```

---

## **Quick Sort**

- QS is another Divide and Conquer strategy.
- Some key ideas to keep in mind:
  - It is easy to sort elements of an array relative to a particular target value.
  - An array of 0 or 1 elements is already trivially sorted.
    ![quicksort](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/efficient_sorting_algorithms/quick_sort/images/QuickSort.gif)

```js
function quick_Sort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }

    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}
```

**binary search**

```js
const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(target === array[middleIndex) {
      return console.log("Target was found at index " + middleIndex);
    }
    if(target > array[middleIndex]) {
      console.log("Searching the right side of Array")
      startIndex = middleIndex + 1;
    }
    if(target < array[middleIndex]) {
      console.log("Searching the left side of array")
      endIndex = middleIndex - 1;
    }
    else {
      console.log("Not Found this loop iteration. Looping another iteration.")
    }
  }

  console.log("Target value not found in array");
}
```

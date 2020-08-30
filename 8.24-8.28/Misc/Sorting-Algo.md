# **Sorting Algorithms**

## **Bubble Sort**

**`Time Complexity`**: Quadratic O(n^2)

- The inner for-loop contributes to O(n), however in a worst case scenario the while loop will need to run n times before bringing all n elements to their final resting spot.

**`Space Complexity`**: O(1)

- Bubble Sort will always use the same amount of memory regardless of n.

![bubble](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/bubble_sort/images/BubbleSort.gif)
![bub](https://www.w3resource.com/w3r_images/bubble-short.png)

> Class Solution

```js
function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

function bubbleSort(array) {
  let swapped = false;
  while (!swapped) {
    swapped = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = false;
      }
    }
  }
  return array;
}
```

> Alt Solution

```js
function bubbleSort(array) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = arr[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return array;
}
```

---

## **Selection Sort**

**`Time Complexity`**: Quadratic O(n^2)

- Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n^2);

**`Space Complexity`**: O(1)

- Selection Sort will always use the same amount of memory regardless of n.

![selection](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/selection_sort/images/SelectionSort.gif)
![se](https://www.w3resource.com/w3r_images/selection-short.png)

> Class Solution

```js
function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx2]];
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (list[j] < list[lowest]) {
        lowest = j;
      }
    }
    if (place !== i) {
      swap(array, i, lowest);
    }
  }
}
```

> Alt Solution

```js
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[i]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      let temp = array[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  }
  return array;
}
```

---

## **Insertion Sort**

**`Time Complexity`**: Quadratic O(n^2)

- Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n^2);

**`Space Complexity`**: O(n)

- Because we are creating a subArray for each element in the original input, our Space Comlexity becomes linear.

![insertion](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/insertion_sort/images/InsertionSort.gif)
![insert](https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png)

> Class Solution

```js
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let value = list[i];
    let hole = i;
    while (hole > 0 && list[hole - 1] > value) {
      list[hole] = list[hole - 1];
      hole--;
    }
    list[hole] = value;
  }
  return array;
}
```

> Alt Solution

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
```

---

## **Merge Sort**

**`Time Complexity`**: Log Linear O(nlog(n))

- Since our array gets split in half every single time we contribute O(log(n)). The while loop contained in our helper merge function contributes O(n) therefore our time complexity is O(nlog(n));
  **`Space Complexity`**: O(n)
- We are linear O(n) time because we are creating subArrays.
  ![nmer](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/efficient_sorting_algorithms/merge_sort/images/MergeSort.gif)
  ![dmwio](https://www.geeksforgeeks.org/wp-content/uploads/Merge-Sort-Tutorial.png)

> Class Solution

```js
function merge(arr1, arr2) {
  let result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return [...result, ...arr1, ...arr2];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```

---

## **Quick Sort**

**`Time Complexity`**: Quadratic O(n^2)

- Even though the average time complexity O(nLog(n)), the worst case scenario is always quadratic.

**`Space Complexity`**: O(n)

- Our space complexity is linear O(n) because of the partition arrays we create.
  ![quick](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/efficient_sorting_algorithms/quick_sort/images/QuickSort.gif)
  ![qs](https://www.w3resource.com/w3r_images/quick-sort-part-1.png)

```js
function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();

  let left = array.filter((x) => x < pivot);
  let right = array.filter((x) => x >= pivot);

  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
}
```

---

## **Binary Search**

**`Time Complexity`**: Log Time O(log(n))

**`Space Complexity`**: O(1)
![bin](https://www.geeksforgeeks.org/wp-content/uploads/Binary-Search.png)

> Recursive Solution

```js
function binarySearch(array, target) {
  if (array.length === 0) return false;

  let midPt = Math.floor(array.length / 2);

  if (array[midPt] === target) {
    return true;
  } else if (list[midPt] > target) {
    return binarySearch(list.slice(0, mid), target);
  } else {
    return binarySearch(list.slice(midPt + 1), target);
  }
}
```

> Min Max Solution

```js
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let midpoint = Math.floor((start + end) / 2);

    if (target === array[midpoint]) {
      return midpoint;
    }

    if (target > array[midpoint]) {
      start = midpoint + 1;
    }

    if (target < array[midpoint]) {
      end = midpoint - 1;
    }
  }
  return -1;
}
```

---

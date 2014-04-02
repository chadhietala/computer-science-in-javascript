/**
 * One of the worst sorting algorithms you could use. It's commonly known as
 * stupid sort or slowsort. Basically you keep randomizing the array until
 * it's in order.
 *
 * Worst case complexity: O(n)
 *
 */


// Fisher-Yates Shuffle
function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;
}

function isSorted (arr) {
  for(var i=1; i < arr.length; i++) {
    if (arr[i-1] > arr[i]) {
      return false;
    }
  }
  return true;
}

function bogoSort (arr) {
  var sorted = false;
  while(sorted === false) {
    arr = shuffle(arr);
    sorted = isSorted(arr);
  }
}


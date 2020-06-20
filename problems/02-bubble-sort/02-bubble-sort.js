/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  for (let index = 0; index<numArray.length-1; index++){
    let count =0
    for(let index1 = 0; index1<numArray.length-1; index1++){
        if (numArray[index1+1]<numArray[index1]){
            let temp = numArray[index1];
            numArray[index1] = numArray[index1+1]
            numArray[index1+1] = temp
            count++;
        }
    }
    if (count == 0)
        break;
  }
  return numArray;
}

console.log(bubbleSort([0,-2,3, -1]));

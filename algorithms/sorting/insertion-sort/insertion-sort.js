/**
 * Checks each element in a given array and places
 * them in the right order.
 * @param {Array} values The array that will be sorted
 */

function insertionSort(values){
	var length = values.length;
	for(var i = 1; i < length; ++i){

		var temp = values[i], // The current value
			lastValue = i - 1; // The previous value
			
		for(; lastValue >= 0 && values[lastValue] > temp; --lastValue){
			values[lastValue + 1] = temp;
		} 
	}
}
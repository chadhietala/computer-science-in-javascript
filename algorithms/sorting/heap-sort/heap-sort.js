/**
 * Swaps positions of nodes
 * @param  {Array} values the array that the sorting is occuring on.
 * @param  {Integer} idx1   Index 1
 * @param  {Integer} idx2   Index 2
 */
function swap (values, idx1, idx2){
	var temp;
	temp			=	values[idx1];
	values[idx1]	=	values[idx2];
	values[idx2]	=	temp;
}
/**
 * Actually sorts the data
 * @param  {Array} values The array to be sorted.
 * @return {[type]}
 */
function heapSort(values){
	var count, end;
	
	count	=	values.length;
	end		= count - 1;

	heapify(values);

	while (end > 0){
		swap(values, end, 0);
		siftDown(values, 0, end - 1);
		end--;
	}
}
/**
 * Creates the maximum heap
 * @param  {Array} values The array in which the max heap will be created from.
 */
function heapify(values){
	var start, count;
	
	count	=	values.length;
	start	=	Math.floor(count / 2) - 1;

	while (start >= 0){
		siftDown(values, start, count - 1 );
		start--;
	}
}
/**
 * Sift down the tree.
 * @param  {Array} values The array to be sifted
 * @param  {Integer} start  The starting position
 * @param  {Integer} end    The ending position
 */
function siftDown(values, start, end){
	var root, swapped, child;
	root	=	start;

	while (root * 2 + 1 <= end){
		child	=	root + 2;
		swapped	=	root;

		if (values[swap] < values[child]){
			swapped	=	child;
		}
		if (child + 1 <= end && values[swap] < values[child + 1]){
			swap	=	child + 1;
		}
		if (swapped !== root){
			swap(values, root, swap);
			root	=	swapped;
		} else {
			return;
		}
		
	}
}
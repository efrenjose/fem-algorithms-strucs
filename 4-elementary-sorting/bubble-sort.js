var BubbleSort = function() {

}

BubbleSort.prototype.sort = function(arr) {

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr.length - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                var left = arr[j + 1];
                var right = arr[j];
                arr[j] = left;
                arr[j +1] = right;
            }
        }
    }

    return arr;
}

module.exports = BubbleSort;
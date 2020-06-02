/**
 * returns an array with moving average of the input array
 * @param array - the input array
 * @param count - the number of elements to include in the moving average calculation
 * @param index - property of each array element that should be averaged
 * @param qualifier - an optional function that will be called on each
 *  value to determine whether it should be used
 */
function movingAvg(array, count, index, qualifier=null) {
  // calculate average for subarray
  const avg = (array, qualifier) => {
    let sum = 0;
    let count = 0;
    let val;
    for (const i in array) {
      val = index ? array[i][index] : array[i];
      if (!qualifier || qualifier(val)) {
        sum += val;
        count += 1;
      }
    }

    return sum / count;
  };

  const result = [];
  let val;

  // pad beginning of result with null values
  for (let i = 0; i < count - 1; i += 1) result.push(null);

  // calculate average for each subarray and add to result
  for (let i = 0, len = array.length - count; i <= len; i += 1) {
    val = avg(array.slice(i, i + count), qualifier);
    if (isNaN(val)) result.push(null);
    else result.push(Math.round(val));
  }

  return result;
}
export default movingAvg;

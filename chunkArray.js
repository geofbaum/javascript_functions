function chunkArrayInGroups(arr, size) {
  var chunks = [], i = 0, n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += size));
  }
  return chunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// output = [["a", "b"], ["c", "d"]]

var arr = [1, 2, 3];

// 在数组的末尾追加新元素
// arr.push(4, 'pink');
console.log(arr.push(4, 'pink')); // 在数组的末尾追加两个元素，返回的是 新数组的长度
console.log(arr); // 原数组发生了变化，返回的结果为 [1,2,3,4,'pink']

// 在数组的开头追加元素

// arr.unshift('holiday', '7天小长假');
console.log(arr.unshift('holiday', '7天小长假')); // 返回的是追加后的数组长度 7
console.log(arr);

// 删除数组的最后一个元素
// arr.pop();
console.log(arr.pop()); // 返回删除的最后一个数组元素
console.log(arr);

// 删除数组的第一个元素
// arr.shift();
console.log(arr.shift()); // 返回删除的第一个数组元素
console.log(arr);
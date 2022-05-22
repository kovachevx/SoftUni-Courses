function sumFirstLast(nums) {
    let first = Number(nums.shift());
    let last = Number(nums.pop())
    console.log(first + last)
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);

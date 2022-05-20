function NxNMatrix(num) {

    let horizontal = '';

    function horizontalPrint(num) {
        for (let i = 1; i <= num; i++) {
            horizontal += num + ' '
        }
        return horizontal;
    }
    horizontalPrint(num);

    function verticalPrint(num) {
        for (let i = 1; i <= num; i++) {
            console.log(horizontal)
        }
    }
    verticalPrint(num);
}
NxNMatrix(3);
NxNMatrix(7);
NxNMatrix(5);

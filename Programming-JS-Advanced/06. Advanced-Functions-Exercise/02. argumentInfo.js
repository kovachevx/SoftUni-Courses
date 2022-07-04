function argumentInfo(...params) {
    const arguments = {}
    for (let arg of params) {
        if (!arguments.hasOwnProperty(typeof arg)) {
            arguments[typeof arg] = 1;
        } else {
            arguments[typeof arg] += 1;
        }
    }
    params.forEach(p => console.log(`${typeof p}: ${p}`));
    let sorted = Object.entries(arguments).sort((a, b) => b[1] - a[1]);
    for (let [type, count] of sorted) {
        console.log(`${type} = ${count}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
console.log('------');
argumentInfo({ name: 'bob' }, 3.333, 9.999);
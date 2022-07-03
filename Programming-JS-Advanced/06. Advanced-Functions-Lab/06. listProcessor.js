function listProcessor(input) {
    let result = [];
    let methods = {
        add: (string) => result.push(string),
        remove: (string) => result = result.filter(x => x !== string),
        print: () => console.log(result.join(','))
    }
    for (let line of input) {
        let [method, string] = line.split(' ');
        methods[method](string);
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log('-----');
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
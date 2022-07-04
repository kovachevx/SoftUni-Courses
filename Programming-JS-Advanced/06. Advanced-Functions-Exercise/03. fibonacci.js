function fibonacci() {
    let a = 0;
    let b = 1;
    return () => {
        let c = a + b;
        a = b;
        b = c;
        return a;
    }
}
console.log(fibonacci());
console.log(fibonacci());
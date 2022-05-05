function echoType(a) {

    console.log(typeof (a));

    if (typeof (a) !== 'string' && typeof (a) !== "number") {
        console.log('Parameter is not suitable for printing');
    } else {
        console.log(a);
    }

}
echoType(1);
function cutAndReverse(input) {
    let firstHalf = input.substring(0, input.length / 2);
    firstHalf = firstHalf.split('').reverse().join('');
    let secondHalf = input.substring(input.length / 2);
    secondHalf = secondHalf.split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
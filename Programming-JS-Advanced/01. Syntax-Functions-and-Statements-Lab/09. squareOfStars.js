function sqareOfStars(num = 5) {
    for (let i = 0; i < num; i++) {
        console.log('* '.repeat(num).trimEnd());
    }
}
sqareOfStars(1);
sqareOfStars(2);
sqareOfStars();
sqareOfStars(7);
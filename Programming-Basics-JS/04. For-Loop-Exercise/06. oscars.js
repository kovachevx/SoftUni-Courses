function oscars(input) {

    let index = 0;
    let actorName = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let juryCount = Number(input[index]);
    index++;
    let totalPoints = 0;
    
    for (let i = 1; i <= juryCount; i++) {
        let juryName = input[index];
        index++;
        let juryPoints = Number(input[index]);
        index++;
        totalPoints += juryName.length * juryPoints / 2;
        if (totalPoints + academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(totalPoints + academyPoints).toFixed(1)}!`)
            break;
        }
    }

    let diff = Math.abs(1250.5 - (totalPoints + academyPoints));

    if (totalPoints + academyPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock", 340, 5, "Robert De Niro", 50, "Julia Roberts", 40.5, "Daniel Day-Lewis", 39.4, "Nicolas Cage", 29.9, "Stoyanka Mutafova", 33]);
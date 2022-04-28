function bestPlayer(input) {

    let index = 0;
    let name = input[index];
    index++;
    let goals = Number(input[index]);

    let footballer = '';
    let goalsScored = 0;

    while (name !== "END") {
        let command = name;
        if (goals >= 10) {
            goalsScored = goals;
            footballer = command;
            break;
        }
        if (goals > goalsScored) {
            goalsScored = goals;
            footballer = command;
        }
        index++;
        name = input[index];
        index++;
        goals = input[index];
    }
    console.log(`${footballer} is the best player!`);
    if (goalsScored < 3) {
        console.log(`He has scored ${goalsScored} goals.`);
    } else {
        console.log(`He has scored ${goalsScored} goals and made a hat-trick !!!`);
    }
}
bestPlayer(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"])
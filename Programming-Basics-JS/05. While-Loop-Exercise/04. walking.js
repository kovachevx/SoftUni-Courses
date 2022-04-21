function walking(input) {

    let index = 0;
    let goal = 10000;
    let action = input[index];
    index++
    let stepCounter = 0;

    while (action !== "Going home") {
        let steps = Number(action);
        stepCounter += steps;

        if (stepCounter >= goal) {
            let diff = Math.abs(goal - stepCounter);
            console.log("Goal reached! Good job!");
            console.log(`${diff} steps over the goal!`);
            break;
        }
        action = input[index];
        index++;

    }
    if (action === "Going home") {
        let steps = Number(input[index]);
        stepCounter += steps;
        let diff = Math.abs(goal - stepCounter);
        if (stepCounter >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${diff} steps over the goal!`);
        } else {
            console.log(`${diff} more steps to reach goal.`);
        }
    }
}
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"]);
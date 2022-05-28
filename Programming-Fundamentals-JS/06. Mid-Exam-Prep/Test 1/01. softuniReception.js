function softuniReception(input) {

    let employee1 = Number(input[0]);
    let employee2 = Number(input[1]);
    let employee3 = Number(input[2]);
    let students = Number(input[3]);
    let efficiency = employee1 + employee2 + employee3;
    let time = 0;

    while (students > 0) {
        time++;
        if (time % 4 === 0) {
            continue;
        }
        students -= efficiency;
    }

    console.log(`Time needed: ${time}h.`);
}
softuniReception(['5', '6', '4', '20']);
softuniReception(['1', '2', '3', '45']);
softuniReception(['3', '2', '5', '40']);
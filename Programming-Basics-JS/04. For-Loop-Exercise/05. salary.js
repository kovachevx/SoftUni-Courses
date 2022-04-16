function salary(input) {

    let index = 0;
    let tabCount = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    for (let i = 0; i <= tabCount; i++) {
        let site = input[index];
        switch (site) {
            case "Facebook": salary = salary - 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }
        index++;
    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(`${salary}`);
    }
}

salary([10, 500, "Facebook", "Dev.bg", "Softuni.com", "Instagram"]);
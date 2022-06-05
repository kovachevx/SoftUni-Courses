function companyUsers(input) {
    let companies = new Map();
    for (let lines of input) {
        let [company, users] = lines.split(' -> ');
        if (companies.has(company) === false) {
            companies.set(company, []);
        }
    
        let existing = companies.get(company);

        if (existing.includes(users) === false) {
            existing.push(users);
        }
    }

    let sorted = Array.from(companies);
    sorted.sort();

    for (let item of sorted) {
        let cp = item.shift()
        console.log(cp);

        for (let el of item) {
            console.log(`-- ${el.join('\n-- ')}`)
        }
}
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);
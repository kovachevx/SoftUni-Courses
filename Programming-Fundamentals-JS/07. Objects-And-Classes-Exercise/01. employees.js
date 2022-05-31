function employees(input) {
    nameList = {};
    for (let element of input) {
        nameList.name = element;
        nameList.personalNumber = element.length;
        console.log(`Name: ${nameList.name} -- Personal Number: ${nameList.personalNumber}`);
    }
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);
function phonebook(input) {
    let phonebook = {};
    for (let i = 0; i < input.length; i++) {
        let segment = input[i].split(' ');
        let name = segment[0];
        let phoneNumber = segment[1];
        phonebook[name] = phoneNumber;
    }
    for (let person in phonebook) {
        console.log(`${person} -> ${phonebook[person]}`);
    }
}
phonebook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
phonebook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);
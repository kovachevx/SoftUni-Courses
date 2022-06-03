function oddOccurrences(input) {
    let words = input.split(' ');
    let result = {};
    for (let word of words) {
     word = word.toLocaleLowerCase();
     if (result.hasOwnProperty(word)){
         result[word]++;
     } else {
         result[word] = 1;
     }
    }
    let finalRes = [];
    
    for (let key in result) {
        if (result[key] % 2 !== 0) {
                finalRes.push(key)
        }
    }
    console.log(finalRes.join(' '))
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
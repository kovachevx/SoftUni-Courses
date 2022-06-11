function thePianist(input) {
    let songs = {};
    let commands = {
        Add,
        Remove,
        ChangeKey
    }
    let n = Number(input.shift())
    for (let i = 0; i < n; i++) {
        let [song, composer, key] = input.shift().split('|');
        let piece = {
            composer,
            key
        }
        songs[song] = piece;
    }

    while (input[0] !== 'Stop') {
        let [command, p1, p2, p3] = input.shift().split('|');
        commands[command](p1, p2, p3);
    }

    function Add(song, composer, key) {
        if (songs.hasOwnProperty(song)) {
            console.log(`${song} is already in the collection!`);
        } else {
            songs[song] = { composer, key };
            console.log(`${song} by ${composer} in ${key} added to the collection!`);
        }
        return;
    }

    function Remove(song) {
        if (songs.hasOwnProperty(song)) {
            delete songs[song];
            console.log(`Successfully removed ${song}!`);
        } else {
            console.log(`Invalid operation! ${song} does not exist in the collection.`);
        }
        return;
    }

    function ChangeKey(song, newKey) {
        if (songs.hasOwnProperty(song)) {
            songs[song].key = newKey;
            console.log(`Changed the key of ${song} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${song} does not exist in the collection.`);
        }
        return;
    }

    for (let song in songs) {
        console.log(`${song} -> Composer: ${songs[song].composer}, Key: ${songs[song].key}`);
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
console.log('-----');
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);


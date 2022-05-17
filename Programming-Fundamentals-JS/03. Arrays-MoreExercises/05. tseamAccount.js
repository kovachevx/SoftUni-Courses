function tseamAccount(arr) {

    let index = 0;
    let games = arr[index].split(' ');
    index++;
    let command = arr[index];

    while (command !== 'Play!') {
        let action = command.split(' ');
        switch (action[0]) {
            case 'Install':
                if (games.includes(action[1])) {
                    continue;
                } else {
                    games.push(action[1])
                } break;
            case 'Uninstall':
                if (games.includes(action[1])) {
                    let position = games.indexOf(action[1]);
                    games.splice(position, 1);
                } break;
            case 'Update':
                if (games.includes(action[1])) {
                    let position = games.indexOf(action[1]);
                    games.splice(position, 1);
                    games.push(action[1]);
                } break;
            case 'Expansion':
                let expandedGame = action[1].split('-');
                if (games.includes(expandedGame[0])) {
                    let position = games.indexOf(expandedGame[0]);
                    let gameExpansion = expandedGame.join(':');
                    games.splice(position + 1, 0, gameExpansion);
                } break;
        }
        index++;
        command = arr[index];
    }
    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);

function songs(inputArray) {
    class Song {
        constructor(type, songName, time) {
            this.type = type;
            this.songName = songName;
            this.time = time;
        }
    }
    let songs = [];
    let numOfSongs = Number(inputArray.shift());
    let playlist = inputArray.pop();

    for (let i = 0; i < numOfSongs; i++) {
        let [type, songName, time] = inputArray[i].split('_');
        let song = new Song(type, songName, time);
        songs.push(song);
    }

    if (playlist === 'all') {
        songs.forEach((i) => console.log(i.songName));
    } else {
        let filtered = songs.filter((i) => i.type === playlist);
        filtered.forEach((i) => console.log(i.songName));
    }
}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);

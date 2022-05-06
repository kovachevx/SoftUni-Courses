function gramophone(band, album, song) {
    let duration = (band.length * album.length) * (song.length / 2);
    console.log(`The plate was rotated ${Math.ceil(duration / 2.5)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');

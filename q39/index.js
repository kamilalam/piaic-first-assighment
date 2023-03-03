"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("The Beatles", "Abbey Road"));
console.log(make_album("Radiohead", "OK Computer", 12));
console.log(make_album("Kendrick Lamar", "To Pimp a Butterfly", 16));

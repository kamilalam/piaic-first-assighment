type Album = {
    artist: string;
    title: string;
    tracks?: number;
  };
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
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
  
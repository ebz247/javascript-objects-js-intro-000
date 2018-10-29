var playlist = {
  artist: "songTitle"
}

function updatePlaylist(obj, artist, song){
  obj[artist] = song
  return obj
}

function removeFromPlaylist(playlistOther, artistName){
  playlist.playlistOther = artistName;
  delete playlistOther.playlistOther

  return playlist
}

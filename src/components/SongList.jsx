import { useState } from 'react';

function SongList(){

    const [songs, setSongs] = useState([]);
    
    const [playSongs, setPlaySongs] = useState([]);

    const [inputSong, setInputSong] = useState("");
    
    const handleChange = (event) => {
        setInputSong(event.target.value)
    }

    const handleSubmitSong =  (event) => {
        event.preventDefault();
        inputSong === "" ? alert("You must input song.") : addSongToList(inputSong);
        setInputSong("");
    }

    function addSongToList(name){
        
        var i = 0;
        songs.forEach(s => {
            i++;
        });
        setSongs(songs => [...songs, {id: i, songName: name}]);
    }

    const handleAddToPlaylist = (song) => {

        var i = 0;
        playSongs.forEach(s => {
            i++;
        });
        setPlaySongs([...playSongs, {id: i, songName: song.songName}]);
        console.log(playSongs[i - 1]);
      };
    
    return(
        <>
            <form>
                <input type='text' value={ inputSong } onChange={ handleChange } />
                <input type="submit" value='Dodaj pesmu' onClick={ handleSubmitSong }/>
            </form>
            <h2>Available Songs</h2>
            <div>
                <ul>
                    {songs.map((song) =><li key = {song.id} onClick={() => handleAddToPlaylist(song)}> {song.songName} </li>)}
                </ul>
            </div>
            <h2>Playlist</h2>
            <div>
                <ul>
                    {playSongs.map((song) => <li key = {song.id}> {song.songName} </li>)}
                </ul>
            </div>
        </>
    )
}

export default SongList;
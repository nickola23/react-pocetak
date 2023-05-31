import { useState } from 'react';
import "./playlist.css";

var i = 0;

function Playlist(){

    const [songs, setSongs] = useState([]);
    
    const [playlist, setPlaylist] = useState([]);

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
        setSongs(songs => [...songs, {id: i++, songName: name}]);
    }

    const handleAddToPlaylist = (song) => {
        setPlaylist([...playlist, {id: song.id, songName: song.songName}]);
        setSongs(songs.filter((s) => s !== song));
      };

    function handleAddSongToList(song){
        setSongs(songs => [...songs, {id: song.id, songName: song.songName}]);
        setPlaylist(playlist.filter((s) => s !== song));
    }
    
    return(
        <>
            <div className='playlistMain'>
                <div className='songList'>
                <h2>Available Songs</h2>
                    <div className='playlistUl'>
                        {songs.map((song, index) =><div className='song' key = {index} onClick={() => handleAddToPlaylist(song)}><span className='songName'>{song.songName}</span><span className='songDesc'>Song id in playlist is: {song.id}</span></div>)}
                    </div>
                </div>
                <div className='playlistForm'>
                <h2>Add your favorite song</h2>
                    <form>
                        <input type='text' value={ inputSong } onChange={ handleChange } />
                        <input type="submit" value='Add' onClick={ handleSubmitSong }/>
                    </form>
                </div>
                <div className='playlist'>
                <h2>Playlist</h2>
                    <div className='playlistUl'>
                        {playlist.map((song, index) => <div className='song' key = {index} onClick={() => handleAddSongToList(song)}><span className='songName'>{song.songName}</span><span className='songDesc'>Song id in playlist is: {song.id}</span></div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playlist;
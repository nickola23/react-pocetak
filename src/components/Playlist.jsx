import { useState } from 'react';
import "./playlist.css";

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
        
        var i = 0;
        songs.forEach(s => {
            i++;
        });
        setSongs(songs => [...songs, {id: i, songName: name}]);
    }

    const handleAddToPlaylist = (song) => {

        var i = 0;
        playlist.forEach(s => {
            i++;
        });
        setPlaylist([...playlist, {id: i, songName: song.songName}]);
        setSongs(songs.filter((s) => s !== song));
      };

    function handleAddSongToList(song){
        
        var i = 0;
        songs.forEach(s => {
            i++;
        });
        setSongs(songs => [...songs, {id: i, songName: song.songName}]);
        setPlaylist(playlist.filter((s) => s !== song));
    }
    
    return(
        <>
            <div className='playlistMain'>
                <div className='songList'>
                <h2>Available Songs</h2>
                    <div className='playlistUl'>
                        {songs.map((song) =><div className='song' key = {song.id} onClick={() => handleAddToPlaylist(song)}><span className='songName'>{song.songName}</span><span className='songDesc'>Song id in playlist is: {song.id}</span></div>)}
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
                        {playlist.map((song) => <div className='song' key = {song.id} onClick={() => handleAddSongToList(song)}><span className='songName'>{song.songName}</span><span className='songDesc'>Song id in playlist is: {song.id}</span></div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playlist;
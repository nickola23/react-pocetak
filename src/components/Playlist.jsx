import { useState } from 'react';
import axios from 'axios';
import { FaPlus, FaTrash, FaMinus } from 'react-icons/fa';
import "./playlist.css";

var i = 0;
const API_KEY = "AIzaSyCxuk4KI5l5VwlJW9QPjqX-fEIRT1w3CoM";
var videoTitle;
var thumbnail;

function Playlist(){

    const [songs, setSongs] = useState([]);
    
    const [playlist, setPlaylist] = useState([]);

    const [inputSong, setInputSong] = useState("");
    
    const handleChange = (event) => {
        setInputSong(event.target.value)
    }

    function search(){
        videoSearch(API_KEY, inputSong, 1);
        addSongToList(videoTitle, thumbnail);
        setInputSong("");
    }

    const handleSubmitSong =  (event) => {
        event.preventDefault();
        inputSong === "" ? alert("You must input song.") : search();
    }

    function addSongToList(name, thumbnail){
        setSongs(songs => [...songs, {id: i++, songName: name, songThumbnail: thumbnail}]);
    }

    const handleAddToPlaylist = (song) => {
        setPlaylist([...playlist, {id: song.id, songName: song.songName, songThumbnail: song.songThumbnail}]);
        setSongs(songs.filter((s) => s !== song));
      };

    function handleAddSongToList(song){
        setSongs(songs => [...songs, {id: song.id, songName: song.songName, songThumbnail: song.songThumbnail}]);
        setPlaylist(playlist.filter((s) => s !== song));
    }

    const handleDeleteSong = (song) =>{
        setPlaylist(playlist.filter((s) => s !== song));
    }

    const videoSearch = (key, search, maxResults) => {
        axios
          .get(
            `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${maxResults}&q=${search}`
          )
          .then((response) => {
            videoTitle = response.data.items[0].snippet.title;
            thumbnail = response.data.items[0].snippet.thumbnails.default.url;
            console.log(thumbnail);
          })
          .catch((error) => {
            console.error("Request failed:", error);
          });
      };
    return(
        <>
            <div className='playlistMain'>
                <div className='songList'>
                <h2>Available Songs</h2>
                    <div className='playlistUl'>
                        {songs.map((song, index) =>
                        <div className='song' key = {index} onClick={() => handleAddToPlaylist(song)}>
                            <img src = { song.songThumbnail } className="songThumbnail" alt="Song thumbnail"/>
                            <div className='songProps'>
                                <span className='songName'>{song.songName}</span>
                                <span className='songDesc'>Song id in playlist is: {song.id}</span>
                            </div>
                            <div className='songOptions'>
                                <div className='sOption'>
                                    <FaPlus />
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
                <div className='playlistForm'>
                <h2>Add your favorite song</h2>
                    <form id='songForm'>
                        <input id='search' type='text' value={ inputSong } onChange={ handleChange } />
                        <input type="submit" value='Add' onClick={ handleSubmitSong }/>
                    </form>
                </div>
                <div className='playlist'>
                <h2>Playlist</h2>
                    <div className='playlistUl'>
                        {playlist.map((song, index) => 
                        <div className='song' key = {index}>
                            <div className='songProps' onClick={() => handleAddSongToList(song)}>
                                <span className='songName'>{song.songName}</span>
                                <span className='songDesc'>Song id in playlist is: {song.id}</span>
                            </div>
                            <div className='songOptions'>
                                <div className='sOption'>
                                    <FaTrash onClick={ () => handleDeleteSong(song) }/>
                                </div>
                                <div className='sOption'>
                                    <FaMinus onClick={() => handleAddSongToList(song)}/>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playlist;
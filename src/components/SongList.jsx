import { useState } from 'react';

function SongList(){

    const [songs, setSongs] = useState([]);
    
    const [playSongs, setPlaySongs] = useState([]);

    const [inputSong, setInputSong] = useState("");

    function Song(props){
        return(
        <li>
            { props.songName }
        </li>
        )
    }
    
    const handleChange = (event) => {
        setInputSong(event.target.value)
    }

    const handleSubmitSong =  (event) => {
        event.preventDefault();
        addSongToList(inputSong);
    }

    function addSongToList(name){
        
        var i = 0;
        songs.forEach(s => {
            i++;
        });
        setSongs(songs => [...songs, {id: i, songName: name}]);
        console.log(songs);
    }
    
    return(
        <>
            <form>
                <input type='text' value={ inputSong } onChange={ handleChange } />
                <input type="submit" value='Dodaj pesmu' onClick={ handleSubmitSong }/>
            </form>
            <div>
                <ul>
                    {songs.map((song) => <Song key={song.id} songName={song.songName} />)}
                </ul>
            </div>
        </>
    )
}

export default SongList;
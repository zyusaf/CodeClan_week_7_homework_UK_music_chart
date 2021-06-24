import { useState, useEffect } from "react";
import SongList from '../components/SongList';

const SongBox = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs))
    }

    return(
        <div>
            <SongList songs={songs} />
        </div>
    )

}

export default SongBox;
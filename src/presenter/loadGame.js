import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import {MovieStateContext} from "../context/activeMovieContext";
import Game from "./game";


function LoadGame({token, database}) {

    const [loadingTracks, setLoadingTracks] = useState(true);
    const [loadingAlbum, setLoadingAlbum] = useState(true);
    const [trackData, setTrackData] = useState('')
    const [trackTitles, setTrackTitles] = useState('');
    const {movie} = useContext(MovieStateContext);


    const fetchAllSongInfo = () => {
        const validTracks = movie.questions.filter(question => question.spotifyid);
        const tracks = validTracks.map(question => question.spotifyid).join();
        axios(`https://api.spotify.com/v1/tracks?ids=${tracks}`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then((tracksResponse) => {
            if (tracksResponse.status === 200) {
                setTrackData(tracksResponse.data.tracks);
                setLoadingTracks(false);
            }
        });
    };

    const fetchAlbumInfo = () => {
        axios(`https://api.spotify.com/v1/albums/${movie.spotifyid}/tracks`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then((tracksResponse) => {
            if (tracksResponse.status === 200) {
                setTrackTitles(tracksResponse.data.items.map(track => track.name.split('-')[0]));
                setLoadingAlbum(false);
            }
        });
    };


    useEffect(() => {
        fetchAllSongInfo();
        fetchAlbumInfo();
    }, []);

    if (loadingAlbum || loadingTracks) {
        return (
            <div>Is loading</div>)
    } else return (
        <Game trackData={trackData} trackTitles={trackTitles}/>);
}

export default LoadGame;

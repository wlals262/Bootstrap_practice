import React, {useEffect, useRef, useState} from 'react';
import {Player, BigPlayButton, LoadingSpinner, ControlBar} from 'video-react';
import 'video-react/dist/video-react.css';

const VideoPlayer = ({ src, onPlayerChange = () => {}, onChange = () => {}, startTime = undefined }) => { //src를 받아 이 주소를 가지고 비디오 플레이어에 출력시키는 구조
    const [player, setPlayer] = useState();
    const [playerState, setPlayerState] = useState(undefined);
    const [source, setSource] = useState();

    useEffect(() => {
        setSource(URL.createObjectURL(src))
    }, [src]); //src 변화 시 source를 변경하게 만들면 정상적으로 비디오가 출력된다.

    useEffect(() => {
        if(playerState) {
            onChange(playerState)
        }
    }, [playerState]); //플레이어가 변경될경우 change

    useEffect(() => {
        onPlayerChange(player);

        if(player) {
            player.subscribeToStateChange(setPlayerState);
        }
    }, [player]); //player가 있을경우 해당 함수 수행

    return (
        <div className={'video-player'}>
            <Player
                ref={(player) => {
                    setPlayer(player)
                }}
                startTime={startTime}
                src={source}
            >
                <source src={source} />
                <BigPlayButton position='center'/>
                <LoadingSpinner />
                <ControlBar disableCompletely></ControlBar>
            </Player>
        </div>
    )
}

export default VideoPlayer;
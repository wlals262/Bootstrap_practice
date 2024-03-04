import React, {useState, useRef, useEffect} from 'react';
import styles from './VideoEditor.module.css';
import {Button, Modal, Spinner, Toast, ToastContainer} from 'react-bootstrap';
import { createFFmpeg } from '@ffmpeg/ffmpeg';

import video_placeholder from '../../assets/images/editor/video_placeholder.png';
import VideoPlayer from './VideoPlayer';
import MultiRangeSlider from '../../components/MultiRangeSlider';
import VideoConversionButton from './VideoConversionButton';
import { sliderValueToVideoTime } from '../../utils/utils';

import useDeviceType from '../../hooks/useDeviceType';
import useUserAgent from '../../hooks/useUserAgent';

const ffmpeg = createFFmpeg({ log: true });

const VideoEditor = () => {
    const device = useDeviceType();
    const agent = useUserAgent();
    const uploadFile = useRef('');
    const [ffmpegLoaded, setFFmpegLoaded] = useState(false);
    const [sliderValues, setSliderValues] = useState([0, 100]);
    const [videoPlayerState, setVideoPlayerState] = useState();
    const [videoPlayer, setVideoPlayer] = useState();
    const [videoFile, setVideoFile] = useState();
    const [processing, setProcessing] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        ffmpeg.load().then(() => {
            setFFmpegLoaded(true);
        })
    }, [])

    useEffect(() => {
        console.log(agent);
    }, [agent])

    useEffect(() => {
        const min = sliderValues[0]

        if(min !== undefined && videoPlayerState && videoPlayer ) {
            videoPlayer.seek(sliderValueToVideoTime(videoPlayerState.duration, min));
        }
    }, [sliderValues]) //슬라이더 값이 변경했을때

    useEffect(() => {
        if( videoPlayer && videoPlayerState ) {
            const [min, max] = sliderValues;

            const minTime = sliderValueToVideoTime(videoPlayerState.duration, min); //이 함수는 동영상 시간을 100으로 분할하는 함수이다.
            const maxTime = sliderValueToVideoTime(videoPlayer.duration, max);

            if(videoPlayerState.currentTime < minTime) {
                videoPlayer.seek(minTime);
            }
            if(videoPlayerState.currentTime > maxTime) {
                videoPlayer.seek(minTime);
            }
        }
    }, [videoPlayerState]) //비디오플레이어 상태값이 변경했을때

    useEffect(() => {
        if(!videoFile) {
            setVideoPlayerState(undefined);
        }
    }, [videoFile]) //video파일이 없을 경우 undefined로 초기화

    if (!ffmpegLoaded) return <div>load</div>;

    return (
        <>
        {
            device === 'mobile' ? (
                <article className='layout' style={{padding: '56px 16px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                        <h1 className={styles.title}>Video Edit</h1>
                        {
                            videoFile && ( //비디오 파일이 존재할 시 출력
                                <div>
                                    <input 
                                        onChange={(e) => setVideoFile(e.target.files[0])}
                                        type='file'
                                        accept='video/*'
                                        style={{ display: 'none' }}
                                    />
                                    <Button
                                        className={styles.re__upload__btn}
                                        style={{ width: 'fit-content '}}
                                    >
                                        비디오 재선택
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                    <section>
                        {
                            videoFile ? (
                                <VideoPlayer 
                                    src={videoFile}
                                    onPlayerChange = {(videoPlayer) => {
                                        setVideoPlayer(videoPlayer)
                                    }}
                                    onChange={(videoPlayerState) => {
                                        setVideoPlayerState(videoPlayerState)
                                    }}
                                />
                            ) : (
                                <>
                                    <img src={video_placeholder} alt='비디오를 업로드해주세요.' style={{marginBottom: 32}} />
                                    <div>
                                        <input 
                                            onChange={(e) => setVideoFile(e.target.files[0])}
                                            type="file"
                                            accept="video/*"
                                            style={{ display: 'none' }}
                                            ref={uploadFile}
                                        />
                                        <Button 
                                            onClick={() => uploadFile.current.click()} // 클릭시 바로위의 input을 가리킴
                                            className={styles.upload__btn}
                                        >
                                            비디오 업로드하기
                                        </Button>
                                    </div>
                                </>
                            )
                        }
                        
                    </section>
                    {
                        videoFile && (
                            <>
                                <section
                                    style={{
                                        width: '100',
                                        marginTop: 30,
                                        marginBottom: 62,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <MultiRangeSlider
                                        min={0}
                                        max={100}
                                        onChange={({min, max}) => {
                                            setSliderValues([min, max]);
                                        }}
                                    />
                                </section>
                                <section>
                                    <VideoConversionButton 
                                        onConversionStart={() => {
                                            setProcessing(true);
                                        }}
                                        onConversionEnd={() => {
                                            setProcessing(false);
                                            setShow(true);
                                        }}
                                        ffmpeg={ffmpeg}
                                        videoPlayerState={videoPlayerState}
                                        sliderValues={sliderValues}
                                        videoFile={videoFile}
                                    />
                                </section>
                            </>
                        )
                    }
                </article>
            ) : (
                <article style={{padding: '56px 16px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                        <h1 className={styles.title}>Video Edit</h1>
                        {
                            videoFile && ( //비디오 파일이 존재할 시 출력
                                <div>
                                    <input 
                                        onChange={(e) => setVideoFile(e.target.files[0])}
                                        type='file'
                                        accept='video/*'
                                        style={{ display: 'none' }}
                                    />
                                    <Button
                                        className={styles.re__upload__btn}
                                        style={{ width: 'fit-content '}}
                                    >
                                        비디오 재선택
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                    <section>
                        {
                            videoFile ? (
                                <VideoPlayer 
                                    src={videoFile}
                                    onPlayerChange = {(videoPlayer) => {
                                        setVideoPlayer(videoPlayer)
                                    }}
                                    onChange={(videoPlayerState) => {
                                        setVideoPlayerState(videoPlayerState)
                                    }}
                                />
                            ) : (
                                <>
                                    <img src={video_placeholder} alt='비디오를 업로드해주세요.' style={{marginBottom: 32}} />
                                    <div>
                                        <input 
                                            onChange={(e) => setVideoFile(e.target.files[0])}
                                            type="file"
                                            accept="video/*"
                                            style={{ display: 'none' }}
                                            ref={uploadFile}
                                        />
                                        <Button 
                                            onClick={() => uploadFile.current.click()} // 클릭시 바로위의 input을 가리킴
                                            className={styles.upload__btn}
                                        >
                                            비디오 업로드하기
                                        </Button>
                                    </div>
                                </>
                            )
                        }
                        
                    </section>
                    {
                        videoFile && (
                            <>
                                <section
                                    style={{
                                        width: '100',
                                        marginTop: 30,
                                        marginBottom: 62,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <MultiRangeSlider
                                        min={0}
                                        max={100}
                                        onChange={({min, max}) => {
                                            setSliderValues([min, max]);
                                        }}
                                    />
                                </section>
                                <section style={{display:'flex', gap: 16}}>
                                    <VideoConversionButton 
                                        onConversionStart={() => {
                                            setProcessing(true);
                                        }}
                                        onConversionEnd={() => {
                                            setProcessing(false);
                                            setShow(true);
                                        }}
                                        ffmpeg={ffmpeg}
                                        videoPlayerState={videoPlayerState}
                                        sliderValues={sliderValues}
                                        videoFile={videoFile}
                                    />
                                </section>
                            </>
                        )
                    }
                </article>
            )
        }
        <ToastContainer className="p-3" position={'top-center'} style={{ zIndex: 1 }}>
                        <Toast onClose={() => setShow(false)} show={show} delay={2000} bg="dark" autohide>
                            <Toast.Header closeButton={false}>
                                <strong className="me-auto">Video Editor</strong>
                            </Toast.Header>
                            <Toast.Body>내보내기가 완료되었습니다.</Toast.Body>
                        </Toast>
                    </ToastContainer>

                    <Modal
                        show={processing}
                        onHide={() => setProcessing(false)}
                        backdrop={false}
                        keyboard={false}
                        centered
                        size="sm"
                    >
                        <div style={{ textAlign: 'center' }}>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>

                            <p style={{ marginTop: 16, fontSize: 14, fontWeight: 600, color: '#c8c8c8' }}>
                                내보내기가 진행중입니다.
                            </p>
                        </div>
                    </Modal>
        </>
        
    );
}

export default VideoEditor;
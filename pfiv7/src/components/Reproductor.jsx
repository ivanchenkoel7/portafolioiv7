import { useState, useRef, useEffect } from 'react';
import '../styles/reproductor.css'
import '../styles/reproductor_responsive.css'
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';


const Reproductor = ({ videoSrc, title, description }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleStop = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    const handleMuteUnmute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const handleFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) { // Firefox
            videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
            videoRef.current.msRequestFullscreen();
        }
    };

    const handleVolumeChange = (e) => {
        videoRef.current.volume = e.target.value;
        setVolume(e.target.value);
    };

    const handleSeekChange = (e) => {
        videoRef.current.currentTime = videoRef.current.duration * (e.target.value / 100);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        const video = videoRef.current;
        const updateTime = () => {
            setCurrentTime(video.currentTime);
            setDuration(video.duration);
        };
        video.addEventListener('timeupdate', updateTime);
        video.addEventListener('loadedmetadata', updateTime);
        return () => {
            video.removeEventListener('timeupdate', updateTime);
            video.removeEventListener('loadedmetadata', updateTime);
        };
    }, []);

    return (
        <>
                <div className="area area1rep">
                    <div className="areaone">
                        <h1 className="title__grid">{title}</h1>
                    </div>
                </div>
                <div className="reproductor">
                    <div className="reproductor__video">
                        <video
                            ref={videoRef}
                            id="video"
                            className="video__window"
                            src={videoSrc}
                        ></video>
                        <div className="reproductor__controls">
                            <button id="play-pause" className="button__play" onClick={handlePlayPause}>
                                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                            </button>
                            <button id="stop" className="button__play" onClick={handleStop}>
                                <i className="fa-solid fa-stop"></i>
                            </button>
                            <input
                                type="range"
                                className='seek__bar'
                                id="seek"
                                min="0"
                                max="100"
                                step="1"
                                value={(currentTime / duration) * 100 || 0}
                                onChange={handleSeekChange}
                            />
                            <div className="reproductor__time">
                                <span id="current-time">{formatTime(currentTime)}</span> / <span id="duration">{formatTime(duration)}</span>
                            </div>
                            <button id="mute-unmute" className="button__play" onClick={handleMuteUnmute}>
                                <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                            </button>
                            <input
                                type="range"
                                className='volume__bar'
                                id="volume"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={handleVolumeChange}
                            />
                            <button id="fullscreen" className="button__play" onClick={handleFullscreen}>
                                <i className="fa-solid fa-maximize"></i>
                            </button>
                        </div>
                    </div>
                    
                </div>

                <div className="area area3arre">
                    <div className="container__info">
                        <h2 className="info__title">Descripcion del Proyecto</h2>
                        <h3 className="info__destacado">
                            {description}
                        </h3>
                    </div>
                </div>
    </>
    );
};
Reproductor.propTypes = {
    videoSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};


export default Reproductor;
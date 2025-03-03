import { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

export function useAudioPlayer(audioUrl) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const wavesurferRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Cleanup previous instance
    if (wavesurferRef.current) {
      wavesurferRef.current.destroy();
    }

    // Create new instance
    const wavesurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#4a5568',
      progressColor: '#1DB954',
      cursorColor: '#1DB954',
      barWidth: 2,
      barRadius: 3,
      responsive: true,
      height: 40,
      barGap: 2,
      normalize: true,
    });

    wavesurferRef.current = wavesurfer;

    const handleReady = () => {
      setDuration(wavesurfer.getDuration());
    };

    const handleAudioprocess = () => {
      setCurrentTime(wavesurfer.getCurrentTime());
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    wavesurfer.on('ready', handleReady);
    wavesurfer.on('audioprocess', handleAudioprocess);
    wavesurfer.on('play', handlePlay);
    wavesurfer.on('pause', handlePause);

    // Load audio
    if (audioUrl) {
      try {
        wavesurfer.load(audioUrl);
      } catch (error) {
        console.error('Error loading audio:', error);
      }
    }

    // Cleanup
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [audioUrl]);

  const togglePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  return {
    isPlaying,
    duration,
    currentTime,
    containerRef,
    togglePlayPause,
  };
}
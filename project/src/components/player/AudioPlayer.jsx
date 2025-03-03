import { memo } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';
import { useAudioPlayer } from './useAudioPlayer';
import { formatTime } from '../../utils/formatTime';

function AudioPlayer({ audioUrl, title }) {
  const {
    isPlaying,
    duration,
    currentTime,
    containerRef,
    togglePlayPause,
  } = useAudioPlayer(audioUrl);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-lighter border-t border-dark-card p-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <PauseIcon className="h-6 w-6" />
            ) : (
              <PlayIcon className="h-6 w-6" />
            )}
          </button>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-text-primary mb-2">{title}</h3>
            <div ref={containerRef} className="mb-1" />
            <div className="flex justify-between text-xs text-text-secondary">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(AudioPlayer);
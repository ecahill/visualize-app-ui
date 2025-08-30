import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, RotateCcw, Headphones, Sparkles } from 'lucide-react';

const Visualization = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(68);
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const tracks = [
    {
      title: "Abundance Meditation",
      description: "Attract wealth and prosperity",
      color: "from-emerald-400 to-green-500",
      affirmation: "I am a magnet for abundance and prosperity"
    },
    {
      title: "Love & Relationships",
      description: "Manifest your soulmate connection",
      color: "from-rose-400 to-pink-500",
      affirmation: "I am worthy of deep, unconditional love"
    },
    {
      title: "Career Success",
      description: "Visualize your dream career",
      color: "from-blue-400 to-cyan-500",
      affirmation: "I am successful and fulfilled in my career"
    },
    {
      title: "Self-Worth & Confidence",
      description: "Embody your highest self",
      color: "from-amber-400 to-yellow-500",
      affirmation: "I am confident, powerful, and radiant"
    },
    {
      title: "Health & Vitality",
      description: "Visualize perfect health",
      color: "from-purple-400 to-violet-500",
      affirmation: "My body is healthy, strong, and vibrant"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsPlaying(false);
            setIsComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, timeRemaining]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setTimeRemaining(68);
    setIsComplete(false);
  };

  const handleTrackChange = (index: number) => {
    setSelectedTrack(index);
    handleReset();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = ((68 - timeRemaining) / 68) * 100;
  const currentTrack = tracks[selectedTrack];

  if (isComplete) {
    return (
      <div className="min-h-screen px-6 py-8 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className={`bg-gradient-to-r ${currentTrack.color} p-8 rounded-full w-fit mx-auto mb-6 animate-pulse`}>
            <Sparkles className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Visualization Complete! ✨</h1>
          <p className="text-gray-600 mb-8 text-lg">
            You've planted powerful seeds in your subconscious mind. Trust that your manifestations are on their way.
          </p>
          <div className="space-y-4">
            <button
              onClick={handleReset}
              className={`w-full bg-gradient-to-r ${currentTrack.color} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200`}
            >
              Visualize Again
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200 border-2 border-gray-200"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800">Visualization</h1>
            <p className="text-gray-600 text-sm">68-second meditation</p>
          </div>
          <div className="w-10" />
        </div>

        {/* Track Selection */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Choose Your Focus</h2>
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {tracks.map((track, index) => (
              <button
                key={index}
                onClick={() => handleTrackChange(index)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                  selectedTrack === index
                    ? `bg-gradient-to-r ${track.color} text-white shadow-lg scale-105`
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:scale-102'
                }`}
              >
                <h3 className="font-semibold mb-1">{track.title}</h3>
                <p className={`text-sm ${selectedTrack === index ? 'text-white/80' : 'text-gray-600'}`}>
                  {track.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Affirmation Banner */}
        <div className={`bg-gradient-to-r ${currentTrack.color} rounded-2xl p-6 mb-8 text-center`}>
          <Sparkles className="w-6 h-6 text-white mx-auto mb-3" />
          <p className="text-white font-semibold text-lg leading-relaxed">
            {currentTrack.affirmation}
          </p>
        </div>

        {/* Timer Display */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center mb-8">
          <div className={`w-32 h-32 bg-gradient-to-r ${currentTrack.color} rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
            <Headphones className="w-16 h-16 text-white" />
            {isPlaying && (
              <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentTrack.title}</h3>
          <div className="text-4xl font-bold text-gray-800 mb-6 font-mono">
            {formatTime(timeRemaining)}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div 
              className={`bg-gradient-to-r ${currentTrack.color} h-3 rounded-full transition-all duration-1000 ease-linear`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleReset}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <RotateCcw className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={handlePlayPause}
              className={`p-4 rounded-full bg-gradient-to-r ${currentTrack.color} text-white shadow-lg hover:scale-110 transition-transform duration-200`}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-800 mb-3">How to Visualize</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Close your eyes and take deep breaths</p>
            <p>• Visualize your desire as already fulfilled</p>
            <p>• Feel the emotions of having what you want</p>
            <p>• Stay in this feeling for the full 68 seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualization;
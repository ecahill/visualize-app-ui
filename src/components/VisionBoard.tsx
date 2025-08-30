import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Image, Zap, Sparkles, Upload, Check } from 'lucide-react';

const VisionBoard = () => {
  const navigate = useNavigate();
  const [hasVisionBoard, setHasVisionBoard] = useState(false);
  const [creationStep, setCreationStep] = useState<'affirmation' | 'images' | 'complete'>('affirmation');
  const [selectedAffirmation, setSelectedAffirmation] = useState('');
  const [customAffirmation, setCustomAffirmation] = useState('');
  const [uploadedImages, setUploadedImages] = useState<any[]>([]);
  const [flashMode, setFlashMode] = useState(false);
  const [currentFlashIndex, setCurrentFlashIndex] = useState(0);

  const predefinedAffirmations = [
    'I am living my dream life abundantly',
    'Everything I desire is flowing to me now',
    'I am worthy of all my heart desires',
    'My vision board is manifesting perfectly',
    'I attract all that I visualize with ease',
    'My dreams are becoming my reality',
    'I am grateful for my abundant life',
    'The universe conspires to help me succeed'
  ];

  // Mock images for demo (in real app, these would be user uploads)
  const mockImages = [
    { id: 1, title: 'Dream Home', url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, title: 'Success', url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, title: 'Travel', url: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, title: 'Love', url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, title: 'Wellness', url: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, title: 'Abundance', url: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const finalAffirmation = customAffirmation || selectedAffirmation;
  const images = hasVisionBoard ? mockImages : uploadedImages;

  const handleCreateVisionBoard = () => {
    setCreationStep('affirmation');
  };

  const handleAffirmationNext = () => {
    if (selectedAffirmation || customAffirmation) {
      setCreationStep('images');
    }
  };

  const handleImagesComplete = () => {
    setHasVisionBoard(true);
    setCreationStep('complete');
    // In demo, use mock images
    setUploadedImages(mockImages);
  };

  const handleFlashNext = () => {
    setCurrentFlashIndex((prev) => (prev + 1) % images.length);
  };

  const handleFlashBack = () => {
    setCurrentFlashIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Flash Mode View
  if (flashMode && hasVisionBoard) {
    const currentImage = images[currentFlashIndex];
    
    return (
      <div className="min-h-screen px-6 py-8 bg-black relative">
        <div className="max-w-md mx-auto h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 relative z-10">
            <button
              onClick={() => setFlashMode(false)}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-200"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <div className="text-center">
              <h1 className="text-xl font-bold text-white">Flash Mode</h1>
              <p className="text-white/80 text-sm">{currentFlashIndex + 1} of {images.length}</p>
            </div>
            <div className="w-10" />
          </div>

          {/* Affirmation Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 mx-6 text-center">
              <Sparkles className="w-8 h-8 text-white mx-auto mb-4" />
              <p className="text-white font-bold text-xl leading-relaxed">
                {finalAffirmation}
              </p>
            </div>
          </div>

          {/* Image Display */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={currentImage.url} 
                alt={currentImage.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 space-y-4 relative z-10">
            <div className="flex space-x-4">
              <button
                onClick={handleFlashBack}
                className="flex-1 bg-white/20 backdrop-blur-sm text-white py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-200"
              >
                Previous
              </button>
              <button
                onClick={handleFlashNext}
                className="flex-1 bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-200"
              >
                Next ⚡
              </button>
            </div>
            
            <div className="flex space-x-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                    index === currentFlashIndex
                      ? 'bg-white'
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Creation Flow - Affirmation Selection
  if (!hasVisionBoard && creationStep === 'affirmation') {
    return (
      <div className="min-h-screen px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-200"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-800">Create Vision Board</h1>
              <p className="text-gray-600 text-sm">Step 1: Choose Affirmation</p>
            </div>
            <div className="w-10" />
          </div>

          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-rose-400 to-purple-500 p-4 rounded-full w-fit mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Affirmation</h2>
              <p className="text-gray-600">This will appear with your vision board</p>
            </div>

            <div className="space-y-3">
              {predefinedAffirmations.map((affirmation, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedAffirmation(affirmation);
                    setCustomAffirmation('');
                  }}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                    selectedAffirmation === affirmation
                      ? 'bg-gradient-to-r from-rose-100 to-purple-100 border-2 border-purple-300 text-purple-800'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:scale-102'
                  }`}
                >
                  <p className="font-medium">{affirmation}</p>
                </button>
              ))}
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Or write your own:</h3>
              <textarea
                value={customAffirmation}
                onChange={(e) => {
                  setCustomAffirmation(e.target.value);
                  setSelectedAffirmation('');
                }}
                placeholder="I am worthy of all my dreams coming true..."
                className="w-full h-24 p-3 border-2 border-rose-200 rounded-xl focus:border-rose-400 focus:outline-none resize-none text-gray-700"
              />
            </div>

            <button
              onClick={handleAffirmationNext}
              disabled={!selectedAffirmation && !customAffirmation}
              className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:hover:scale-100"
            >
              Next: Add Images
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Creation Flow - Image Upload
  if (!hasVisionBoard && creationStep === 'images') {
    return (
      <div className="min-h-screen px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCreationStep('affirmation')}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-200"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-800">Create Vision Board</h1>
              <p className="text-gray-600 text-sm">Step 2: Add Images</p>
            </div>
            <div className="w-10" />
          </div>

          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-purple-400 to-violet-500 p-4 rounded-full w-fit mx-auto mb-4">
                <Image className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Add Your Vision Images</h2>
              <p className="text-gray-600">Upload photos that represent your dreams</p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 text-center border-2 border-dashed border-purple-300">
              <Upload className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold text-purple-800 mb-2">Upload Images</h3>
              <p className="text-purple-600 text-sm mb-4">Add photos from your gallery or camera</p>
              <button className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-200">
                Choose Images
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Preview:</h3>
              <div className="text-center text-gray-500 py-8">
                <Image className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p className="text-sm">Your images will appear here</p>
              </div>
            </div>

            <button
              onClick={handleImagesComplete}
              className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200"
            >
              Create Vision Board ✨
            </button>
          </div>
        </div>
      </div>
    );
  }

  // No Vision Board - Initial State
  if (!hasVisionBoard) {
    return (
      <div className="min-h-screen px-6 py-8 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <button
            onClick={() => navigate('/')}
            className="absolute top-8 left-6 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div className="bg-gradient-to-r from-purple-400 to-violet-500 p-8 rounded-full w-fit mx-auto mb-8">
            <Image className="w-16 h-16 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Create Your Vision Board</h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Visualize your dreams with powerful images and affirmations. Your vision board will help manifest your desires into reality.
          </p>
          
          <button
            onClick={handleCreateVisionBoard}
            className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-xl"
          >
            Create a Vision Board ✨
          </button>
        </div>
      </div>
    );
  }

  // Vision Board Gallery View
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
            <h1 className="text-xl font-bold text-gray-800">Vision Board</h1>
            <p className="text-gray-600 text-sm">Your dreams visualized</p>
          </div>
          <button
            onClick={() => setFlashMode(true)}
            className="p-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <Zap className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Affirmation Banner */}
        <div className="bg-gradient-to-r from-rose-400 via-purple-400 to-amber-400 rounded-2xl p-6 mb-8 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <Sparkles className="w-6 h-6 text-white mx-auto mb-3" />
            <p className="text-white font-bold text-lg leading-relaxed">
              {finalAffirmation}
            </p>
          </div>
        </div>

        {/* Flash Button */}
        <div className="mb-6">
          <button
            onClick={() => setFlashMode(true)}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center"
          >
            <Zap className="w-6 h-6 mr-3" />
            Flash Mode ⚡
          </button>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-1">
          {images.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden group hover:scale-105 transition-transform duration-200">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-lg"
                />
            </div>
          ))}
        </div>

        {/* Add More Images */}
        <div className="mt-8">
          <button className="w-full bg-white/80 backdrop-blur-sm text-gray-700 py-4 rounded-xl font-semibold border-2 border-dashed border-gray-300 hover:scale-105 transition-transform duration-200 flex items-center justify-center">
            <Plus className="w-5 h-5 mr-2" />
            Add More Images
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisionBoard;
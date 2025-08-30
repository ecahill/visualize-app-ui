import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Calendar, Sparkles, Heart, Star } from 'lucide-react';

const Journal = () => {
  const navigate = useNavigate();
  const [currentEntry, setCurrentEntry] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [showPrompts, setShowPrompts] = useState(true);

  const prompts = [
    {
      category: 'Gratitude',
      icon: Heart,
      color: 'from-rose-400 to-pink-500',
      prompts: [
        "I am so grateful that today...",
        "Three amazing things that happened to me are...",
        "I feel blessed because...",
        "The universe showed me love today by..."
      ]
    },
    {
      category: 'Manifestation',
      icon: Sparkles,
      color: 'from-purple-400 to-violet-500',
      prompts: [
        "I am living my dream life where...",
        "It feels amazing to have already achieved...",
        "I am so happy and grateful now that...",
        "My ideal day looks like this..."
      ]
    },
    {
      category: 'Abundance',
      icon: Star,
      color: 'from-amber-400 to-yellow-500',
      prompts: [
        "Money flows to me because...",
        "I deserve abundance because...",
        "I am wealthy and it feels...",
        "My bank account reflects..."
      ]
    }
  ];

  const mockEntries = [
    {
      id: 1,
      date: '2024-01-15',
      preview: 'I am so grateful that today I woke up feeling energized and excited about my future...',
      mood: 'grateful'
    },
    {
      id: 2,
      date: '2024-01-14',
      preview: 'I am living my dream life where I wake up every morning in my beautiful home...',
      mood: 'excited'
    },
    {
      id: 3,
      date: '2024-01-13',
      preview: 'Money flows to me because I am aligned with abundance and open to receiving...',
      mood: 'abundant'
    }
  ];

  const handlePromptSelect = (prompt: string) => {
    setSelectedPrompt(prompt);
    setCurrentEntry(prompt + ' ');
    setShowPrompts(false);
  };

  const handleSave = () => {
    if (currentEntry.trim()) {
      // In a real app, this would save to database
      setCurrentEntry('');
      setSelectedPrompt('');
      // Show success feedback
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
            <h1 className="text-xl font-bold text-gray-800">Scripting Journal</h1>
            <p className="text-gray-600 text-sm">Write your reality</p>
          </div>
          <button
            onClick={handleSave}
            disabled={!currentEntry.trim()}
            className="p-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 shadow-lg hover:scale-110 transition-transform duration-200 disabled:opacity-50 disabled:hover:scale-100"
          >
            <Save className="w-6 h-6 text-white" />
          </button>
        </div>

        {showPrompts ? (
          <div className="space-y-6">
            {/* Prompts Selection */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Focus</h2>
              <p className="text-gray-600">Select a prompt to guide your scripting</p>
            </div>

            {prompts.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="space-y-3">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${category.color} p-2 rounded-full mr-3`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{category.category}</h3>
                  </div>
                  
                  {category.prompts.map((prompt, promptIndex) => (
                    <button
                      key={promptIndex}
                      onClick={() => handlePromptSelect(prompt)}
                      className="w-full p-4 bg-white/80 backdrop-blur-sm rounded-xl text-left hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      <p className="text-gray-700 font-medium">{prompt}</p>
                    </button>
                  ))}
                </div>
              );
            })}

            <button
              onClick={() => {
                setShowPrompts(false);
                setCurrentEntry('');
              }}
              className="w-full p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl text-center hover:scale-105 transition-transform duration-200 border-2 border-dashed border-purple-300"
            >
              <p className="text-purple-700 font-semibold">✨ Free Writing</p>
              <p className="text-purple-600 text-sm">Start with a blank page</p>
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Writing Area */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">
                    {formatDate(new Date().toISOString().split('T')[0])}
                  </span>
                </div>
                <button
                  onClick={() => setShowPrompts(true)}
                  className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors duration-200"
                >
                  Change Prompt
                </button>
              </div>

              <textarea
                value={currentEntry}
                onChange={(e) => setCurrentEntry(e.target.value)}
                placeholder={selectedPrompt || "Start writing your reality..."}
                className="w-full h-80 p-4 border-2 border-rose-200 rounded-xl focus:border-rose-400 focus:outline-none resize-none text-gray-700 bg-transparent"
                autoFocus
              />
              
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500 text-sm">
                  {currentEntry.length} characters
                </p>
                <div className="text-right">
                  <p className="text-gray-600 text-sm italic">
                    "Whatever you assume to be true will be."
                  </p>
                  <p className="text-gray-500 text-xs">— Neville Goddard</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleSave}
              disabled={!currentEntry.trim()}
              className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:hover:scale-100"
            >
              Save Entry ✨
            </button>
          </div>
        )}

        {/* Recent Entries */}
        {!showPrompts && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Entries</h3>
            <div className="space-y-3">
              {mockEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-gray-500 font-medium">
                      {formatDate(entry.date)}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      entry.mood === 'grateful' ? 'bg-rose-100 text-rose-600' :
                      entry.mood === 'excited' ? 'bg-purple-100 text-purple-600' :
                      'bg-amber-100 text-amber-600'
                    }`}>
                      {entry.mood}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-2">
                    {entry.preview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;
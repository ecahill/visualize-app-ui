import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Heart, Copy, Sparkles, DollarSign, Briefcase, Users, Smile } from 'lucide-react';

const AffirmationLibrary = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([1, 5, 9]);
  const [showAddNew, setShowAddNew] = useState(false);
  const [newAffirmation, setNewAffirmation] = useState('');
  const [newCategory, setNewCategory] = useState('custom');

  const categories = [
    { id: 'all', name: 'All', icon: Sparkles, color: 'from-purple-400 to-violet-500' },
    { id: 'money', name: 'Abundance', icon: DollarSign, color: 'from-emerald-400 to-green-500' },
    { id: 'career', name: 'Career', icon: Briefcase, color: 'from-blue-400 to-cyan-500' },
    { id: 'relationships', name: 'Love', icon: Users, color: 'from-rose-400 to-pink-500' },
    { id: 'self-esteem', name: 'Self-Love', icon: Smile, color: 'from-amber-400 to-yellow-500' },
    { id: 'custom', name: 'Custom', icon: Heart, color: 'from-indigo-400 to-purple-500' }
  ];

  const affirmations = [
    { id: 1, text: "I am worthy of all the abundance flowing into my life", category: "money" },
    { id: 2, text: "Money flows to me easily and effortlessly from multiple sources", category: "money" },
    { id: 3, text: "I am confident, capable, and unstoppable in my career", category: "career" },
    { id: 4, text: "I attract opportunities that align with my highest good", category: "career" },
    { id: 5, text: "I am deeply loved and cherished exactly as I am", category: "self-esteem" },
    { id: 6, text: "I radiate confidence and attract positive people into my life", category: "self-esteem" },
    { id: 7, text: "My soulmate and I are drawing closer to each other every day", category: "relationships" },
    { id: 8, text: "I am surrounded by loving, supportive relationships", category: "relationships" },
    { id: 9, text: "I am grateful for all the blessings flowing into my life", category: "custom" },
    { id: 10, text: "Everything I need comes to me at the perfect time", category: "custom" },
    { id: 11, text: "I trust the universe to guide me to my highest good", category: "custom" },
    { id: 12, text: "My bank account reflects my abundant mindset", category: "money" },
    { id: 13, text: "I am the CEO of my own successful company", category: "career" },
    { id: 14, text: "I love and accept myself completely", category: "self-esteem" },
    { id: 15, text: "I attract healthy, loving relationships effortlessly", category: "relationships" }
  ];

  const filteredAffirmations = selectedCategory === 'all' 
    ? affirmations 
    : affirmations.filter(aff => aff.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  const handleAddNew = () => {
    if (newAffirmation.trim()) {
      // In a real app, this would save to database
      setNewAffirmation('');
      setShowAddNew(false);
    }
  };

  if (showAddNew) {
    return (
      <div className="min-h-screen px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setShowAddNew(false)}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-200"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-800">Create Affirmation</h1>
            </div>
            <div className="w-10" />
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-rose-400 to-purple-500 p-4 rounded-full w-fit mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Personal Affirmation</h2>
                <p className="text-gray-600">Write something that resonates with your soul</p>
              </div>

              <textarea
                value={newAffirmation}
                onChange={(e) => setNewAffirmation(e.target.value)}
                placeholder="I am worthy of all my heart desires..."
                className="w-full h-32 p-4 border-2 border-rose-200 rounded-xl focus:border-rose-400 focus:outline-none resize-none text-gray-700"
              />

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full p-3 border-2 border-rose-200 rounded-xl focus:border-rose-400 focus:outline-none text-gray-700"
                >
                  <option value="custom">Custom</option>
                  <option value="money">Abundance</option>
                  <option value="career">Career</option>
                  <option value="relationships">Love</option>
                  <option value="self-esteem">Self-Love</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleAddNew}
              disabled={!newAffirmation.trim()}
              className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:hover:scale-100"
            >
              Save Affirmation ✨
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
            <h1 className="text-xl font-bold text-gray-800">Affirmations</h1>
            <p className="text-gray-600 text-sm">Speak your truth</p>
          </div>
          <button
            onClick={() => setShowAddNew(true)}
            className="p-2 rounded-full bg-gradient-to-r from-rose-400 to-purple-500 shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <Plus className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="mb-6">
          <div className="flex overflow-x-auto pb-2 space-x-3 scrollbar-hide">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 flex items-center px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : 'bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white/80'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Affirmations List */}
        <div className="space-y-4">
          {filteredAffirmations.map((affirmation) => (
            <div
              key={affirmation.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:scale-102 transition-transform duration-200"
            >
              <p className="text-gray-800 font-medium mb-4 leading-relaxed">
                {affirmation.text}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {categories.find(cat => cat.id === affirmation.category)?.name || affirmation.category}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => copyToClipboard(affirmation.text)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Copy className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => toggleFavorite(affirmation.id)}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      favorites.includes(affirmation.id)
                        ? 'bg-rose-100 text-rose-500 scale-110'
                        : 'bg-gray-100 text-gray-400 hover:bg-rose-50 hover:text-rose-400'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(affirmation.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Favorites Count */}
        {favorites.length > 0 && (
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-rose-100 to-purple-100 rounded-xl p-4">
              <p className="text-gray-700">
                <Heart className="w-4 h-4 inline text-rose-500 fill-current mr-2" />
                You have {favorites.length} favorite affirmation{favorites.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AffirmationLibrary;
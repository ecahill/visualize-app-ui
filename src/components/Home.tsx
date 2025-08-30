import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Image, Headphones, Sparkles, Play, Sun, ArrowRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Journal',
      description: 'Script your reality with guided prompts',
      icon: BookOpen,
      color: 'from-rose-400 to-pink-500',
      path: '/journal'
    },
    {
      title: 'Vision Board',
      description: 'Visualize your dreams with images',
      icon: Image,
      color: 'from-purple-400 to-violet-500',
      path: '/vision-board'
    },
    {
      title: 'Visualization',
      description: '68-second guided meditations',
      icon: Headphones,
      color: 'from-amber-400 to-yellow-500',
      path: '/visualization'
    },
    {
      title: 'Affirmations',
      description: 'Powerful statements for abundance',
      icon: Sparkles,
      color: 'from-emerald-400 to-green-500',
      path: '/affirmations'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-8 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-rose-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-6 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"></div>
        
        <div className="relative px-6 pt-16 pb-8">
          <div className="max-w-md mx-auto text-center">
            {/* Logo/Icon */}
            <div className="mb-8">
              <div className="relative">
                <div className="bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 p-6 rounded-3xl shadow-2xl mx-auto w-fit">
                  <Sun className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 rounded-3xl blur opacity-20 animate-pulse"></div>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                  Good Morning,
                </span>
                <br />
                <span className="text-gray-800">Beautiful</span>
              </h1>
              <p className="text-gray-600 text-lg font-medium">
                Ready to manifest your dreams today?
              </p>
            </div>

            {/* Daily Ritual CTA */}
            <div className="mb-16">
              <button
                onClick={() => navigate('/daily-ritual')}
                className="group relative w-full bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 text-white rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl active:scale-95 overflow-hidden"
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-purple-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-white/20 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold">Daily Ritual</h3>
                      <p className="text-white/90 text-sm font-medium">Start your guided journey</p>
                    </div>
                    <ArrowRight className="w-6 h-6 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 pb-12">
        <div className="max-w-md mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Manifestation Tools</h2>
            <p className="text-gray-600">Choose your practice</p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigate(feature.path)}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white active:scale-95"
                >
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 mb-2 text-base leading-tight px-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="px-6 pb-16">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <blockquote className="text-gray-700 text-lg font-medium italic mb-4 leading-relaxed">
                  "Assume the feeling of your wish fulfilled."
                </blockquote>
                <cite className="text-gray-500 font-semibold">— Neville Goddard</cite>
              </div>
            </div>
            
            {/* Decorative blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-200/20 via-purple-200/20 to-amber-200/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
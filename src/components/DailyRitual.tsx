import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Image, Headphones, Sparkles, CheckCircle } from 'lucide-react';

const DailyRitual = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [journalEntry, setJournalEntry] = useState('');
  const [selectedAffirmation, setSelectedAffirmation] = useState('I am worthy of all the abundance flowing into my life');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      title: 'Scripting Journal',
      icon: BookOpen,
      color: 'from-rose-400 to-pink-500',
      prompt: "Write about your ideal day as if it's already happening..."
    },
    {
      title: 'Vision Board',
      icon: Image,
      color: 'from-purple-400 to-violet-500',
      prompt: "Visualize your dreams through images"
    },
    {
      title: 'Visualization Audio',
      icon: Headphones,
      color: 'from-amber-400 to-yellow-500',
      prompt: "68-second guided meditation"
    },
    {
      title: 'Affirmations',
      icon: Sparkles,
      color: 'from-emerald-400 to-green-500',
      prompt: "Speak your truth into existence"
    }
  ];

  const affirmations = [
    "I am worthy of all the abundance flowing into my life",
    "Money flows to me easily and effortlessly",
    "I am confident, capable, and unstoppable",
    "I attract opportunities that align with my highest good",
    "I am grateful for all the blessings in my life"
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    } else {
      setCompletedSteps([...completedSteps, currentStep]);
      // Ritual complete
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isLastStep = currentStep === steps.length - 1;
  const isComplete = completedSteps.length === steps.length;

  const renderStepContent = () => {
    const step = steps[currentStep];
    const IconComponent = step.icon;

    switch (currentStep) {
      case 0: // Journal
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className={`bg-gradient-to-r ${step.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.prompt}</p>
            </div>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="I am so grateful that today I woke up feeling..."
              className="w-full h-48 p-4 border-2 border-rose-200 rounded-2xl focus:border-rose-400 focus:outline-none resize-none text-gray-700 bg-white/80 backdrop-blur-sm"
            />
          </div>
        );

      case 1: // Vision Board
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className={`bg-gradient-to-r ${step.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.prompt}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-purple-200">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <Image className="w-12 h-12 text-purple-400" />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-200">
                  Flash Mode ⚡
                </button>
              </div>
            </div>
          </div>
        );

      case 2: // Visualization
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className={`bg-gradient-to-r ${step.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.prompt}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-amber-200 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Abundance Meditation</h3>
              <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200">
                ▶ Play (68s)
              </button>
            </div>
          </div>
        );

      case 3: // Affirmations
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className={`bg-gradient-to-r ${step.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.prompt}</p>
            </div>
            <div className="space-y-4">
              {affirmations.map((affirmation, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAffirmation(affirmation)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                    selectedAffirmation === affirmation
                      ? 'bg-gradient-to-r from-emerald-100 to-green-100 border-2 border-emerald-300'
                      : 'bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-emerald-200'
                  }`}
                >
                  <p className="text-gray-700 font-medium">{affirmation}</p>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen px-6 py-8 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-400 to-green-500 p-6 rounded-full w-fit mx-auto mb-6">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Ritual Complete! ✨</h1>
          <p className="text-gray-600 mb-8 text-lg">
            You've planted the seeds of your manifestations. Trust the process and watch your dreams unfold.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200"
          >
            Return Home
          </button>
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
            <h1 className="text-xl font-bold text-gray-800">Daily Ritual</h1>
            <p className="text-gray-600 text-sm">Step {currentStep + 1} of {steps.length}</p>
          </div>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex space-x-2 mb-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  index < currentStep
                    ? 'bg-emerald-400'
                    : index === currentStep
                    ? 'bg-gradient-to-r from-rose-400 to-purple-400'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex space-x-4">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 bg-white/80 backdrop-blur-sm text-gray-700 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:scale-105 transition-transform duration-200"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="flex-1 bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center"
          >
            {isLastStep ? 'Complete Ritual' : 'Next'}
            {!isLastStep && <ArrowRight className="w-5 h-5 ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyRitual;
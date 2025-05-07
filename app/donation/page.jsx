"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GetDirections from '../components/GetDirections/GetDirections';

const Donation = () => {
  const [activeTab, setActiveTab] = useState('guide');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [bloodTypeAvailability, setBloodTypeAvailability] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Add useEffect for client-side random generation with animation
  useEffect(() => {
    const generateAvailability = () => {
      const availability = {};
      ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].forEach(type => {
        availability[type] = {
          percentage: Math.floor(Math.random() * 100),
          units: Math.floor(Math.random() * 50)
        };
      });
      setBloodTypeAvailability(availability);
      setIsLoading(false);
    };

    // Initial generation
    generateAvailability();

    // Update every 5 seconds
    const interval = setInterval(generateAvailability, 5000);

    return () => clearInterval(interval);
  }, []);

  const [bloodTypeGame, setBloodTypeGame] = useState({
    isPlaying: false,
    score: 0,
    selectedTypes: [],
    correctPairs: [
      { donor: 'O-', recipient: 'O-' },
      { donor: 'O+', recipient: 'O+' },
      { donor: 'A-', recipient: 'A-' },
      { donor: 'A+', recipient: 'A+' },
      { donor: 'B-', recipient: 'B-' },
      { donor: 'B+', recipient: 'B+' },
      { donor: 'AB-', recipient: 'AB-' },
      { donor: 'AB+', recipient: 'AB+' }
    ],
    matchedPairs: [],
    showFeedback: false,
    feedbackMessage: '',
    feedbackType: ''
  });

  const [donationJourney, setDonationJourney] = useState({
    currentStep: 0,
    completed: false,
    questions: [
      {
        step: 0,
        question: "What documents do you need for registration?",
        options: ["ID Card", "Medical History", "Both", "None"],
        correct: "Both"
      },
      {
        step: 1,
        question: "What tests are performed during screening?",
        options: ["Blood Pressure", "Hemoglobin", "Both", "None"],
        correct: "Both"
      },
      {
        step: 2,
        question: "How long does the donation process take?",
        options: ["5-10 minutes", "15-20 minutes", "30 minutes", "1 hour"],
        correct: "15-20 minutes"
      },
      {
        step: 3,
        question: "What should you do after donation?",
        options: ["Rest", "Exercise", "Both", "None"],
        correct: "Rest"
      }
    ],
    answers: []
  });

  const [quickQuiz, setQuickQuiz] = useState({
    currentQuestion: 0,
    score: 0,
    questions: [
      {
        question: "How often can you donate blood?",
        options: ["Every 2 weeks", "Every 2 months", "Every 3 months", "Every 6 months"],
        correct: "Every 3 months"
      },
      {
        question: "What is the minimum age to donate blood?",
        options: ["16 years", "18 years", "21 years", "25 years"],
        correct: "18 years"
      },
      {
        question: "How much blood is typically donated?",
        options: ["250ml", "350ml", "450ml", "550ml"],
        correct: "450ml"
      },
      {
        question: "Which blood type is the universal donor?",
        options: ["A+", "B+", "AB+", "O-"],
        correct: "O-"
      },
      {
        question: "How long does it take to replace donated blood?",
        options: ["24 hours", "48 hours", "1 week", "2 weeks"],
        correct: "48 hours"
      }
    ],
    answers: []
  });

  const [achievements, setAchievements] = useState({
    firstDonation: { completed: true, progress: 100 },
    knowledgeMaster: { completed: false, progress: 60 },
    communityHero: { completed: false, progress: 30 }
  });

  // Game Handlers
  const handleBloodTypeSelect = (type) => {
    if (!bloodTypeGame.isPlaying) return;

    const newSelectedTypes = [...bloodTypeGame.selectedTypes, type];
    setBloodTypeGame(prev => ({
      ...prev,
      selectedTypes: newSelectedTypes,
      showFeedback: false
    }));

    if (newSelectedTypes.length === 2) {
      const [type1, type2] = newSelectedTypes;
      const isCorrect = bloodTypeGame.correctPairs.some(
        pair => (pair.donor === type1 && pair.recipient === type2) ||
          (pair.donor === type2 && pair.recipient === type1)
      );

      if (isCorrect) {
        setBloodTypeGame(prev => ({
          ...prev,
          score: prev.score + 1,
          matchedPairs: [...prev.matchedPairs, type1, type2],
          showFeedback: true,
          feedbackMessage: 'Correct match!',
          feedbackType: 'success'
        }));
      } else {
        setBloodTypeGame(prev => ({
          ...prev,
          showFeedback: true,
          feedbackMessage: 'Try again!',
          feedbackType: 'error'
        }));
      }

      setTimeout(() => {
        setBloodTypeGame(prev => ({
          ...prev,
          selectedTypes: [],
          showFeedback: false
        }));
      }, 1500);
    }
  };

  const handleJourneyAnswer = (answer) => {
    const currentQuestion = donationJourney.questions[donationJourney.currentStep];
    const isCorrect = answer === currentQuestion.correct;

    setDonationJourney(prev => ({
      ...prev,
      answers: [...prev.answers, { question: currentQuestion.question, answer, isCorrect }]
    }));

    if (donationJourney.currentStep < donationJourney.questions.length - 1) {
      setDonationJourney(prev => ({
        ...prev,
        currentStep: prev.currentStep + 1
      }));
    } else {
      setDonationJourney(prev => ({
        ...prev,
        completed: true
      }));
    }
  };

  const handleQuickQuizAnswer = (answer) => {
    const currentQuestion = quickQuiz.questions[quickQuiz.currentQuestion];
    const isCorrect = answer === currentQuestion.correct;

    setQuickQuiz(prev => ({
      ...prev,
      answers: [...prev.answers, { question: currentQuestion.question, answer, isCorrect }],
      score: isCorrect ? prev.score + 1 : prev.score
    }));

    if (quickQuiz.currentQuestion < quickQuiz.questions.length - 1) {
      setQuickQuiz(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    }
  };

  const startBloodTypeGame = () => {
    setBloodTypeGame(prev => ({
      ...prev,
      isPlaying: true,
      score: 0,
      selectedTypes: [],
      matchedPairs: [],
      showFeedback: false
    }));
  };

  const startDonationJourney = () => {
    setDonationJourney(prev => ({
      ...prev,
      currentStep: 0,
      completed: false,
      answers: []
    }));
  };

  const startQuickQuiz = () => {
    setQuickQuiz(prev => ({
      ...prev,
      currentQuestion: 0,
      score: 0,
      answers: []
    }));
  };

  const quizQuestions = [
    {
      id: 'weight',
      question: 'Is your weight at least 50kg?',
      type: 'boolean'
    },
    {
      id: 'anemia',
      question: 'Do you have anemia or low iron levels?',
      type: 'boolean'
    },
    {
      id: 'medication',
      question: 'Have you taken any medications in the last 48 hours?',
      type: 'boolean'
    },
    {
      id: 'surgery',
      question: 'Have you had any surgery in the last 6 months?',
      type: 'boolean'
    },
    {
      id: 'pregnancy',
      question: 'Are you pregnant or have you given birth in the last 6 months?',
      type: 'boolean'
    }
  ];

  const handleQuizAnswer = (answer) => {
    setQuizAnswers({ ...quizAnswers, [quizQuestions[quizStep].id]: answer });
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(quizQuestions.length);
    }
  };

  const isEligible = () => {
    return !Object.values(quizAnswers).includes(false);
  };

  return (
    <section className="min-h-screen text-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Remove background decorative elements */}
      <div className="max-w-7xl mx-auto relative">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-8">
            Donate Blood, Save Lives
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our mission to save lives through blood donation. Every drop counts.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-red-400 mb-2">50K+</div>
            <div className="text-gray-300">Lives Saved</div>
          </div>
          <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-red-400 mb-2">100+</div>
            <div className="text-gray-300">Donation Centers</div>
          </div>
          <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
            <div className="text-gray-300">Emergency Support</div>
          </div>
          <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-red-400 mb-2">10K+</div>
            <div className="text-gray-300">Active Donors</div>
          </div>
        </div>

        {/* How to Donate Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">How to Donate Blood</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">1. Register</h3>
              <p className="text-gray-300 text-center">
                Complete the registration form and provide necessary identification documents.
              </p>
            </div>
            <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">2. Screening</h3>
              <p className="text-gray-300 text-center">
                Undergo a quick health screening to ensure you're eligible to donate.
              </p>
            </div>
            <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">3. Donate</h3>
              <p className="text-gray-300 text-center">
                The donation process takes about 8-10 minutes. Relax and save a life!
              </p>
            </div>
          </div>
        </div>

        {/* Donor Records Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Donor Records</h2>
          <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="p-4">Name</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Blood Type</th>
                    <th className="p-4">Donations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="p-4">John Doe</td>
                    <td className="p-4">Cairo</td>
                    <td className="p-4">O+</td>
                    <td className="p-4">5</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4">Jane Smith</td>
                    <td className="p-4">Alexandria</td>
                    <td className="p-4">A-</td>
                    <td className="p-4">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105">
              Add Your Donation
            </button>
          </div>
        </div>

        {/* Donation Guide Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Donation Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Quick Guide</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400">1</span>
                  </div>
                  <p className="text-gray-300">Eat a healthy meal before donating</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400">2</span>
                  </div>
                  <p className="text-gray-300">Stay hydrated</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400">3</span>
                  </div>
                  <p className="text-gray-300">Get plenty of rest the night before</p>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Download Guide</h3>
              <p className="text-gray-300 mb-6">
                Get our comprehensive guide to blood donation, including detailed information about the process, eligibility criteria, and post-donation care.
              </p>
              <button className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105">
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Donation Readiness Quiz */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Are You Ready to Donate?</h2>
          <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
            {!showQuiz ? (
              <div className="text-center">
                <p className="text-gray-300 mb-8">
                  Take our quick quiz to check if you're eligible to donate blood today.
                </p>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105"
                >
                  Start Quiz
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {quizStep < quizQuestions.length ? (
                  <>
                    <h3 className="text-2xl font-semibold mb-6">{quizQuestions[quizStep].question}</h3>
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleQuizAnswer(true)}
                        className="bg-green-500/50 hover:bg-green-600/50 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-500"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(false)}
                        className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-500"
                      >
                        No
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-6">
                      {isEligible() ? 'You are eligible to donate!' : 'You are not eligible to donate at this time.'}
                    </h3>
                    <p className="text-gray-300 mb-8">
                      {isEligible()
                        ? 'Thank you for your willingness to donate. Please proceed to the nearest donation center.'
                        : 'Please review our eligibility criteria and try again when you meet the requirements.'}
                    </p>
                    <button
                      onClick={() => {
                        setShowQuiz(false);
                        setQuizStep(0);
                        setQuizAnswers({});
                      }}
                      className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-500"
                    >
                      Start Over
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Hospitals and Blood Banks Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Hospitals & Blood Banks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cairo Blood Bank */}
            <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 group hover:border-red-500/50 transition-all duration-500">
              <div className="h-16 w-16 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Cairo Blood Bank</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">123 Medical District, Cairo</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Open 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+20 123 456 7890</span>
                </div>
              </div>
              <div className="mt-6">
                <GetDirections location="123 Medical District, Cairo" className="w-full" />
              </div>
            </div>

            {/* Alexandria Medical Center */}
            <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 group hover:border-red-500/50 transition-all duration-500">
              <div className="h-16 w-16 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Alexandria Medical Center</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">45 Health Street, Alexandria</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Open 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+20 123 456 7891</span>
                </div>
              </div>
              <div className="mt-6">
                <GetDirections location="45 Health Street, Alexandria" className="w-full" />
              </div>
            </div>

            {/* Giza Blood Center */}
            <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 group hover:border-red-500/50 transition-all duration-500">
              <div className="h-16 w-16 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Giza Blood Center</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">78 Medical Complex, Giza</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Open 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+20 123 456 7892</span>
                </div>
              </div>
              <div className="mt-6">
                <GetDirections location="78 Medical Complex, Giza" className="w-full" />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Blood Bank Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 Emergency Blood Supply</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Blood Type Testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Donor Health Screening</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Operating Hours</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Emergency Services: 24/7</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Regular Donations: 8 AM - 8 PM</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Appointments Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Alexandria Map Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Find Blood Banks in Alexandria</h2>

          {/* Search and Filter Section */}
          <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search locations..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50"
                />
                <svg className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50">
                <option value="">Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50">
                <option value="">Operating Hours</option>
                <option value="24/7">24/7</option>
                <option value="day">Day Only</option>
                <option value="night">Night Only</option>
              </select>
              <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50">
                <option value="">Services</option>
                <option value="emergency">Emergency</option>
                <option value="testing">Blood Testing</option>
                <option value="storage">Blood Storage</option>
              </select>
            </div>
          </div>

          <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            {/* Blood Type Availability Tracker */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Blood Type Availability</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                  <div
                    key={type}
                    className="backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-semibold">{type}</span>
                      <div className={`h-2 w-2 rounded-full ${bloodTypeAvailability[type]?.percentage > 50 ? 'bg-green-500' : 'bg-yellow-500'} transition-colors duration-500`}></div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500/50 rounded-full transition-all duration-1000 ease-in-out"
                        style={{
                          width: isLoading ? '0%' : `${bloodTypeAvailability[type]?.percentage || 0}%`,
                          opacity: isLoading ? 0 : 1
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Available Units: {isLoading ? '...' : bloodTypeAvailability[type]?.units || 0}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Map Container */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218354.9803839706!2d29.8157346!3d31.224361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1647881234567!5m2!1sen!2seg"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Locations List with Enhanced Features */}
              <div className="space-y-6">
                <div className="backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-500 group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Alexandria Medical Center</h3>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm">Open</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm">Emergency</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-300">45 Health Street, Alexandria</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">Open 24/7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-300">+20 123 456 7891</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-500 transform hover:scale-105">
                      Get Directions
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Similar enhanced cards for other locations */}
                {/* ... existing location cards with enhanced features ... */}
              </div>
            </div>

            {/* Donor Stories Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Donor Stories</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-xl">JD</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-sm text-gray-400">Regular Donor</p>
                    </div>
                  </div>
                  <p className="text-gray-300">"Donating blood has become a regular part of my life. Knowing that I can help save lives is incredibly rewarding."</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm">5 Donations</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm">O+</span>
                  </div>
                </div>

                <div className="backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-xl">AS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Ahmed Samir</h4>
                      <p className="text-sm text-gray-400">Emergency Donor</p>
                    </div>
                  </div>
                  <p className="text-gray-300">"When I received the emergency call, I didn't hesitate. Being able to help in critical situations is a privilege."</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm">3 Donations</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm">A-</span>
                  </div>
                </div>

                <div className="backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-xl">MS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Mariam Said</h4>
                      <p className="text-sm text-gray-400">First-time Donor</p>
                    </div>
                  </div>
                  <p className="text-gray-300">"My first donation experience was amazing. The staff was professional and made me feel comfortable throughout."</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm">1 Donation</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm">B+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Dashboard */}
            <div className="mt-24">
              <h2 className="text-4xl font-bold mb-12 text-center">Live Statistics</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Today's Donations</h3>
                    <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-green-400 mb-2">127</div>
                  <p className="text-gray-400">+12% from yesterday</p>
                </div>

                <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Active Donors</h3>
                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">2,543</div>
                  <p className="text-gray-400">+5% this month</p>
                </div>

                <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Blood Units</h3>
                    <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-red-400 mb-2">8,721</div>
                  <p className="text-gray-400">Available units</p>
                </div>

                <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Emergency Requests</h3>
                    <div className="h-12 w-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">23</div>
                  <p className="text-gray-400">Active requests</p>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="mt-24">
              <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-red-500/20 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-red-400">15</span>
                      <span className="text-sm text-red-400">MAR</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Blood Drive</h3>
                      <p className="text-gray-400">Alexandria Medical Center</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">Join us for our monthly blood drive. Free health check-up and refreshments provided.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">9:00 AM - 5:00 PM</span>
                    <button className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-500">
                      Register
                    </button>
                  </div>
                </div>

                <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-red-500/20 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-red-400">22</span>
                      <span className="text-sm text-red-400">MAR</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Donor Workshop</h3>
                      <p className="text-gray-400">El-Maamoura Hospital</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">Learn about blood donation and its impact on healthcare. Open to all interested donors.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">2:00 PM - 4:00 PM</span>
                    <button className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-500">
                      Register
                    </button>
                  </div>
                </div>

                <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-red-500/20 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-red-400">29</span>
                      <span className="text-sm text-red-400">MAR</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Community Day</h3>
                      <p className="text-gray-400">Alexandria Blood Bank</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">Celebrate our donors and raise awareness about blood donation in the community.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">10:00 AM - 8:00 PM</span>
                    <button className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-500">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Section */}
            <div className="mt-24">
              <h2 className="text-4xl font-bold mb-12 text-center">Join Our Community</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <h3 className="text-2xl font-semibold mb-6">Donor Rewards</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Health Benefits</h4>
                        <p className="text-gray-400">Free health check-ups and blood tests</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Recognition</h4>
                        <p className="text-gray-400">Special badges and certificates</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Community</h4>
                        <p className="text-gray-400">Join our donor community events</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500">
                  <h3 className="text-2xl font-semibold mb-6">Newsletter</h3>
                  <p className="text-gray-300 mb-6">Stay updated with our latest news, events, and blood donation campaigns.</p>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50"
                    />
                    <button className="w-full bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-500">
                      Subscribe
                    </button>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <button className="h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-500">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-500">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </button>
                    <button className="h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-500">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259-.012 3.668-.069 4.948-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.072-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Game Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Learn While You Play</h2>
          <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Blood Type Matching Game */}
              <div className="backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-500 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold mb-6">Blood Type Match</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => {
                    const isSelected = bloodTypeGame.selectedTypes.includes(type);
                    const isMatched = bloodTypeGame.matchedPairs.includes(type);
                    return (
                      <button
                        key={type}
                        onClick={() => handleBloodTypeSelect(type)}
                        disabled={isMatched || !bloodTypeGame.isPlaying}
                        className={`
                          h-16 rounded-xl transition-all duration-500 text-xl font-semibold transform
                          ${isMatched
                            ? 'bg-green-500/50 border-green-500/50 cursor-not-allowed opacity-50'
                            : isSelected
                              ? 'bg-red-500/50 border-red-500/50 animate-pulse'
                              : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 hover:scale-105'
                          }
                          ${!bloodTypeGame.isPlaying && !isMatched ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
                {bloodTypeGame.showFeedback && (
                  <div className={`text-center mb-4 p-2 rounded-lg transition-all duration-500 ${bloodTypeGame.feedbackType === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                    {bloodTypeGame.feedbackMessage}
                  </div>
                )}
                <p className="text-gray-300 mb-4">Match blood types with their compatible donors and recipients!</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Score: {bloodTypeGame.score}/8</span>
                    {bloodTypeGame.score === 8 && (
                      <span className="text-sm text-green-400 animate-pulse">Perfect!</span>
                    )}
                  </div>
                  <button
                    onClick={startBloodTypeGame}
                    className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                  >
                    {bloodTypeGame.isPlaying ? 'Restart Game' : 'Start Game'}
                  </button>
                </div>
              </div>

              {/* Donation Journey Game */}
              <div className="backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-500 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold mb-6">Donation Journey</h3>
                <div className="relative h-48 mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-1 bg-white/10">
                      <div
                        className="h-full bg-red-500/50 transition-all duration-1000 ease-in-out"
                        style={{ width: `${(donationJourney.currentStep / (donationJourney.questions.length - 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex justify-between items-center">
                    {['Register', 'Screen', 'Donate', 'Recover'].map((step, index) => (
                      <div key={step} className="flex flex-col items-center">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center mb-2 transition-all duration-500 transform hover:scale-110 ${index <= donationJourney.currentStep ? 'bg-red-500/50 animate-pulse' : 'bg-red-500/20'
                          }`}>
                          <span className="text-red-400">{index + 1}</span>
                        </div>
                        <span className="text-sm text-gray-400">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {!donationJourney.completed ? (
                  <>
                    <p className="text-gray-300 mb-4 animate-fade-in">{donationJourney.questions[donationJourney.currentStep].question}</p>
                    <div className="space-y-2 mb-4">
                      {donationJourney.questions[donationJourney.currentStep].options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleJourneyAnswer(option)}
                          className="w-full text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] hover:translate-x-2"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center animate-fade-in">
                    <p className="text-gray-300 mb-4">Congratulations! You've completed the donation journey!</p>
                    <button
                      onClick={startDonationJourney}
                      className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                    >
                      Play Again
                    </button>
                  </div>
                )}
              </div>

              {/* Quick Quiz */}
              <div className="backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-500 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold mb-6">Quick Quiz</h3>
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 animate-fade-in">
                    <p className="text-gray-300 mb-3">{quickQuiz.questions[quickQuiz.currentQuestion].question}</p>
                    <div className="space-y-2">
                      {quickQuiz.questions[quickQuiz.currentQuestion].options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleQuickQuizAnswer(option)}
                          className="w-full text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] hover:translate-x-2"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Question {quickQuiz.currentQuestion + 1}/5</span>
                  <span className="text-sm text-gray-400">Score: {quickQuiz.score}/5</span>
                </div>
              </div>

              {/* Achievement Board */}
              <div className="backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-500 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold mb-6">Your Achievements</h3>
                <div className="space-y-4">
                  {Object.entries(achievements).map(([key, achievement]) => (
                    <div key={key} className="flex items-center gap-4 transform hover:scale-[1.02] transition-all duration-500">
                      <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center transform hover:scale-110 transition-all duration-500">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="text-sm text-gray-400">+{key === 'firstDonation' ? '100' : key === 'knowledgeMaster' ? '50' : '200'} points</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-500/50 rounded-full transition-all duration-1000 ease-in-out"
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-24 mt-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+20 123 456 7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">contact@nabdmasr.com</span>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Emergency Support</h3>
              <p className="text-gray-300 mb-6">
                For emergency blood requirements, please contact our 24/7 support line.
              </p>
              <button className="bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-500">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;    
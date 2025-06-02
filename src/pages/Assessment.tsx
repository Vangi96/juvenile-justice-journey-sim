
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "Do you know Ankita?",
      options: ["Yes", "No"],
      correctAnswer: "No"
    },
    {
      question: "Do you know Ramesh (victim's father)?",
      options: ["Yes", "No"],
      correctAnswer: "Yes, he's from the same village"
    },
    {
      question: "Were you friends with Ankita?",
      options: ["Yes", "No", "Sometimes"],
      correctAnswer: "No"
    },
    {
      question: "Can you tell the time?",
      options: ["Yes", "No", "Sometimes"],
      correctAnswer: "Yes, it's currently 2 PM"
    },
    {
      question: "Can you count?",
      options: ["Yes, till 10", "Yes, till 50", "Yes, till 100"],
      correctAnswer: "Yes, till 50"
    },
    {
      question: "How many 10 Rs notes are there in 100 Rs?",
      options: ["5", "10", "20"],
      correctAnswer: "10"
    },
    {
      question: "If someone hits you or fights with you, will you retaliate?",
      options: ["Yes", "No", "Maybe"],
      correctAnswer: "Yes"
    },
    {
      question: "If someone hits you, will you get angry?",
      options: ["Yes", "No", "Sometimes"],
      correctAnswer: "No"
    },
    {
      question: "If someone hurts you or fights with you, will you also fight?",
      options: ["Yes", "No", "Depends"],
      correctAnswer: "Yes"
    },
    {
      question: "What do you do if someone gets hurt?",
      options: ["Ignore them", "Take them to the doctor", "Call someone"],
      correctAnswer: "Take them to the doctor"
    }
  ];

  const selectAnswer = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/results');
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8 text-center">
          <h1 className="text-4xl font-light mb-2">Juvenile Justice Interactive Scenario</h1>
          <p className="text-lg opacity-90 italic">An Educational Simulation About Preliminary Assessment Under Section 15 of the JJ Act</p>
        </div>

        <div className="p-10">
          <div className="bg-gray-200 h-2 rounded-full mb-5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-600 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg mb-5">
            <h2 className="text-xl font-medium">JJB Preliminary Assessment Questions</h2>
          </div>

          <p className="mb-6 italic text-gray-600">The JJB member kindly tells you to answer honestly, as it will help your case. Remember, you believe this is about school admission.</p>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 mb-4 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
            <div className="font-semibold text-slate-800 mb-4 text-lg">
              Q{currentQuestion + 1}: {questions[currentQuestion].question}
            </div>
            <div className="flex flex-wrap gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(option)}
                  className={`px-5 py-3 border-2 rounded-full cursor-pointer transition-all duration-300 text-sm min-w-20 text-center hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:-translate-y-1 ${
                    selectedAnswers[currentQuestion] === option
                      ? 'bg-green-500 text-white border-green-600'
                      : 'bg-gray-100 border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-5 border-t-2 border-gray-200">
            <button 
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="px-8 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider font-medium disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none"
            >
              Previous
            </button>
            
            <button 
              onClick={nextQuestion}
              disabled={!selectedAnswers[currentQuestion]}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider font-medium disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none"
            >
              {currentQuestion === questions.length - 1 ? 'View Results' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;

import React, { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [textAnswer, setTextAnswer] = useState('');

  const questions = [
    {
      id: 'q1',
      text: 'What does your giftee like to do?',
      options: [
        { value: 'eat', label: 'eat' },
        { value: 'drink', label: 'drink' },
        { value: 'sleep', label: 'sleep' },
        { value: 'game', label: 'game' },
        { value: 'repeat', label: 'repeat'}
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedOption,
      textAnswer
    });
  };

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Quick Survey</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {questions.map((question) => (
              <div key={question.id} className="space-y-4">
                <label className="text-lg font-medium">{question.text}</label>
                <div className="space-y-2">
                  {question.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={option.value}
                        name="language"
                        value={option.value}
                        checked={selectedOption === option.value}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="form-radio"
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <label htmlFor="feedback" className="text-lg font-medium block">
              Please provide any additional feedback:
            </label>
            <textarea
              id="feedback"
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              className="w-full h-32 p-2 border rounded"
              placeholder="Type your answer here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
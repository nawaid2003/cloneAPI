import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Snips: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState('curl');

  const codeSnippet = `curl -X 'POST' \\
'https://www.toingg.com/api/make_toingg?apiKey=apiKeyStringValue' \\
-H 'accept: application/json' \\
-H 'Content-Type: application/json' \\
-d '{
  "campaign": "Campaign name",
  "language": "Language like hindi or english",
  "name": "Call receiver name",
  "phoneNumber": "Call receiver phone number"
}'`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-8">
      <h1 className="text-5xl font-bold text-orange-300 mb-16">Easy ways to Toinggg</h1>
    
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full mb-16">
        <div className="flex">
          <div className="w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">
              Explore TOINGGG in <span className="text-orange-500">GPT store</span>
            </h2>
            <ul className="list-disc pl-5 mb-6">
              <li className="mb-2">Interactive Communication: Engage in single or batch calls using TOINGG GPT.</li>
              <li className="mb-2">Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</li>
              <li className="mb-2">Data Export: Conveniently export call logs to CSV.</li>
              <li className="mb-2">Enhanced Usability: Tailored for users familiar with CSV functionalities.</li>
            </ul>
            <button className="bg-orange-400 text-white px-4 py-2 rounded flex items-center">
              Explore more
              <ChevronRight className="ml-2" />
            </button>
          </div>
          <div className="w-1/2">
            
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              Chat Interface Placeholder
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-2">Build your own voice agent</h2>
        <p className="text-gray-600 mb-4">in just a few lines of code</p>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex mb-2">
            {['curl', 'python', 'javascript'].map((lang) => (
              <button
                key={lang}
                className={`mr-2 px-3 py-1 rounded ${currentLanguage === lang ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setCurrentLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <pre className="text-green-400 whitespace-pre-wrap text-sm">
            {codeSnippet}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Snips;
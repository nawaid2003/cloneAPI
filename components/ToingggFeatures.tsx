"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";


type Language = 'curl' | 'python' | 'javascript' | 'php' | 'ruby';

const ToingggFeatures: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('curl');

  const codeSnippets = {
    curl: `# cURL code
curl -X POST "https://www.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue" \\
-H "accept: application/json" \\
-H "Content-Type: application/json" \\
-d '{
  "campaign": "Campaign name",
  "language": "Language like hindi or english",
  "name": "Call receiver name",
  "phoneNumber": "Call receiver phone number"
}'`,

    python: `# Python code
import requests

headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
}

params = {
    'apiKey': 'apiKeyStringValue',
}

json_data = {
    'campaign': 'Campaign name',
    'language': 'Language like hindi or english',
    'name': 'Call receiver name',
    'phoneNumber': 'Call receiver phone number',
}

response = requests.post('https://www.toingg.com/api/make_toingg/',
                          params=params, headers=headers, json=json_data)`,

    javascript: `// JavaScript code
fetch('https://www.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue', {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'campaign': 'Campaign name',
    'language': 'Language like hindi or english',
    'name': 'Call receiver name',
    'phoneNumber': 'Call receiver phone number'
  })
});`,

    php: `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://www.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'accept: application/json',
    'Content-Type: application/json',
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\\n  \\"campaign\\": \\"Campaign name\\",\\n  \\"language\\": \\"Language like hindi or english\\",\\n  \\"name\\": \\"Call receiver name\\",\\n  \\"phoneNumber\\": \\"Call receiver phone number\\n}");

$response = curl_exec($ch);

curl_close($ch);`,

    ruby: `# Ruby code
require 'net/http'
require 'json'

uri = URI('https://www.toingg.com/api/make_toingg/')
params = {
  :apiKey => 'apiKeyStringValue',
}
uri.query = URI.encode_www_form(params)

req = Net::HTTP::Post.new(uri)
req.content_type = 'application/json'
req['accept'] = 'application/json'

req.body = {
  'campaign': 'Campaign name',
  'language': 'Language like hindi or english',
  'name': 'Call receiver name',
  'phoneNumber': 'Call receiver phone number'
}.to_json

req_options = {
  use_ssl: uri.scheme == 'https'
}
res = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
  http.request(req)
end`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[currentLanguage])
      .then(() => alert('Code copied to clipboard!'))
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-orange-50 py-16">
      <h1 className="text-5xl font-bold text-orange-300 mb-16">
        Easy ways to Toinggg
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full mb-16">
        <div className="flex">
          <div className="w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">
              Explore TOINGGG in{" "}
              <span className="text-orange-500">GPT store</span>
            </h2>
            <ul className="list-disc pl-5 mb-6">
              <li className="mb-2">
                Interactive Communication: Engage in single or batch calls using
                TOINGG GPT.
              </li>
              <li className="mb-2">
                Advanced Features: Leverage GPT for real-time sentiment analysis
                during calls.
              </li>
              <li className="mb-2">
                Data Export: Conveniently export call logs to CSV.
              </li>
              <li className="mb-2">
                Enhanced Usability: Tailored for users familiar with CSV
                functionalities.
              </li>
            </ul>
            <a
              href="https://chatgpt.com/g/g-MzBcmDH7g-toingg-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-400 text-white px-4 py-2 rounded inline-flex items-center"
            >
              Explore more
              <ChevronRight className="ml-2" />
            </a>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <img
                src="./snips.png" alt="Chat Interface" className="object-cover h-full w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
      <h2 className="text-2xl font-bold mb-2">Build your own voice agent</h2>
      <p className="text-gray-600 mb-4">in just a few lines of code</p>
      <div className="bg-gray-900 rounded-lg p-4 relative">
        <div className="absolute top-2 left-2 flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex mb-2 mt-6">
        {(Object.keys(codeSnippets) as Language[]).map((lang) => (
            <button
              key={lang}
              className={`mr-2 px-3 py-1 rounded text-xs ${
                currentLanguage === lang
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800 text-gray-400"
              }`}
              onClick={() => setCurrentLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        <pre className="text-green-400 whitespace-pre-wrap text-sm mt-2">
          {codeSnippets[currentLanguage]}
        </pre>
      </div>
    </div>
    </div>
  );
};

export default ToingggFeatures;

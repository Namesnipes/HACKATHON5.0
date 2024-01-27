import React, { useState } from 'react';
import { getSentiment } from '../utils/natural';

const SentimentAnalysis = () => {
  const [text, setText] = useState('');
  const [sentimentScore, setSentimentScore] = useState(null);

  const analyzeSentiment = () => {
    const score = getSentiment(text);
    setSentimentScore(score);
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={analyzeSentiment}>Analyze Sentiment</button>
      {sentimentScore !== null && (
        <div>
          <p>Sentiment Score: {sentimentScore}</p>
          {/* You can add more details or actions based on the sentiment score */}
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
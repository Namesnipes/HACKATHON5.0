// utils/natural.js
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

export const getSentiment = (text) => {
  const sentiment = new natural.SentimentAnalyzer();
  return sentiment.getSentiment(tokenizer.tokenize(text));
};
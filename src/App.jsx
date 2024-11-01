import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
      setAdvice("Error loading advice.");
    }
    setIsLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">ADVICE</h2>
        {isLoading ? (
          <p className="advice">Loading...</p>
        ) : (
          <p className="advice">{advice || "Press the button to get advice."}</p>
        )}
        <button className="button" onClick={fetchAdvice}>
          Get Advice
        </button>
      </div>
    </div>
  );
}

export default App;

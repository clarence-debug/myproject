import React, { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState("");

  const questionHandler = () => {
     fetch('https://opentdb.com/api.php?amount=1')
     .then(response => response.json())
     .then(resData => setQuestion(resData.results[0].question))
   };

  return (
    <div className="App">
      <div>
        <h1>Random Question Generator</h1>
        <h3>{question}</h3>
        <br />
        <button onClick={questionHandler}>New question</button>
      </div>
    </div>
  );
}

export default App;
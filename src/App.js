import './index.css';
import React, { useState } from 'react';
import { questions } from './questions';
import Quiz from './components/Quiz';
import Results from './components/Results';


function Header() {
  return (
    <div className="title">
      <h1>My Quiz</h1>
    </div>
  );
}

function App() {
  
  const [progress, setProgress] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[progress]

  const onClickVariant = (index) => {
    setProgress(progress + 1)

    if(index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <>
      <Header />
      <div className="App">
        {
          progress !== questions.length
          ? <Quiz question={question} onClickVariant={onClickVariant} progress={ progress }/>
          : <Results correct={correct}/>
        }
      </div>
    </>

  );
}

export default App;

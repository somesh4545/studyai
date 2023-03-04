import React, {useState} from 'react'

const QuizForm = () => {

    const [answers, setAnswers] = useState({});

    const [score, setScore] = useState(0);
  
    const [scoreboard, setscoreboard] = useState(false);
    
    const questions = [
      {
        question: "What is the capital of France?",
        options: [
          "Paris is the capital of France",
          "Berlin is the capital of France",
          "Rome is the capital of France",
          "Madrid is the capital of France",
        ],
        correctOption: "Paris is the capital of France",
      },
      {
        question: "What is the largest country in the world?",
        options: [
          "Canada is the largest country in the world",
          "Russia is the largest country in the world",
          "China is the largest country in the world",
          "Australia is the largest country in the world",
        ],
        correctOption: "Russia is the largest country in the world",
      },
      {
        question: "What is the currency of Japan?",
        options: [
          "Yuan is the currency of Japan",
          "Yen is the currency of Japan",
          "Dollar is the currency of Japan",
          "Euro is the currency of Japan",
        ],
        correctOption: "Yen is the currency of Japan",
      },
    ];
  
    const handleOptionClick = (questionIndex, option) => {
      setAnswers({ ...answers, [questionIndex]: option });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let score = 0;
      questions.forEach((question, index) => {
        if (answers[index] === question.correctOption) {
          score++;
        }
      });
      setScore(score);
      setscoreboard(true);
    };
  return (
    <div>
    <h1>Quiz</h1>
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={index}><br/>
          <p>{question.question}</p>
          {question.options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleOptionClick(index, option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-10" type="submit">Submit</button>
    </form>
    
    {scoreboard === true && <p>Your score is : {score}</p>}

    </div>
  )
}

export default QuizForm;
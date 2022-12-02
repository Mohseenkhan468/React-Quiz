import React, { useEffect, useState } from "react";
import './quiz.css'
import axios from "axios";
export default function Quiz() {
  const [post, setPost] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [click, setClick] = useState(false);
  const [prevQ,setPrevQ]=useState(0);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple"
      );
      setPost(response.data.results);
    }
    getData();
  }, []);
  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (post.length > nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleAnswerClick = (option, correct) => {
    
    // console.log('prev',prevQ,'current',currentQuestion)
    if (option === correct && click === false) {
      setScore(score + 1);
      setPrevQ(prevQ+1)
      if(prevQ!==currentQuestion){
        setClick(true);
      }
    }
    console.log(option,correct)
    console.log(score)
  };
  if (!post) return "No more post";
  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {post.length}{" "}
        </div>
      ) : (
        <div >
          <div className="quiz-question">
            <h1>{post[currentQuestion].question}</h1>
          </div>
          <div className="quiz-option-container">
            {[
              ...post[currentQuestion].incorrect_answers,
              post[currentQuestion].correct_answer,
            ].map((option, index) => (
              <button
               className='quiz-option'
              
                key={index}
                onClick={() =>
                  handleAnswerClick(
                    option,
                    post[currentQuestion].correct_answer,
                    
                  )
                }
              >
                {option}
              </button>
            ))}
          </div>
          <button className="quiz-button" onClick={() => handleNextQuestion()}>Next Question</button>
        </div>
      )}
    </div>
  );
}

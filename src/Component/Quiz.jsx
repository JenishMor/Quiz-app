import React, { useState } from 'react';
import './Quiz.css';

const Quiz = (props) => {
    // console.log(props.data);

    // Here we using state
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const resetClick = () => {
        setShowScore(false);
        setScore(0);
        setCurrentQuestion(0);
    }

    const answerClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < props.data.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }

    return (
        <div className="container">
            {showScore ? (
                <div className='final-section'>
                    <div className="score-section">You scored {score} out of {props.data.length}</div>
                    <button onClick={resetClick} className='btn btn-reset'>Reset Quiz</button>
                </div>
            )
                :
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{props.data.length}
                        </div>
                        <div className="question">
                            {props.data[currentQuestion].questionText}
                        </div>
                    </div>
                    <div className="answer-section">
                        {/* Note: Here return keyword is neccessary to inject into react dom*/}
                        {props.data[currentQuestion].options.map((item, pos) => {
                            return <button onClick={() => answerClick(item.isCorrect)} key={pos} className='btn'>{item.text}</button>
                        })}
                    </div>
                </>
            }
        </div>
    )
}

export default Quiz;
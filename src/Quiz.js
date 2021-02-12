import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'
import { stat } from 'fs';
//Vad är stat?? samt fs. Staistik antar jag, men verkar inte funka eller?
//Quiz.js. Importerar från alla de andra filerna. Men vart skickas infon från Quiz.js?
//Längst ner exporteras ju från denna filen också. Vart då? Till App.js såklart!

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }
    showNextQuestion() {
        this.setState((state) => {
            return { quiz_position: state.quiz_position + 1 }
        })
    }
    handleResetClick() {
        this.setState({ quiz_position: 1 })
    }
    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
        return (
            <div>
                {isQuizEnd ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />}
            </div>
        )
    }
}
//Är det Classen Quiz som exporteras nedan!? Antar det!! Varför är det alltid Default??
export default Quiz
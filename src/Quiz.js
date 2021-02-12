import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'
import { stat } from 'fs';
//Vad �r stat?? samt fs
//Quiz.js. Importerar fr�n alla de andra filerna. Men vart skickas infon fr�n Quiz.js?
//L�ngst ner exporteras ju fr�n denna filen ocks�. Vart d�? Till App.js s�klart!
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
    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
        return (
            <div>
                {isQuizEnd ? <QuizEnd /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />}
            </div>
        )
    }
}
//�r det Classen Quiz som exporteras nedan!? Antar det!! Varf�r �r det alltid Default??
export default Quiz
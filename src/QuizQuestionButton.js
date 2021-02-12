import React, { Component } from 'react'
//Varför måste vi importera React i varje fil?
class QuizQuestionButton extends Component {
    handleClick() {
        this.props.clickHandler(this.props.button_text)
    }
    render() {
        return (
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        )
    }
}
//Ok, denna exporten sker till QuizQuestion. Verkar normalt!
export default QuizQuestionButton
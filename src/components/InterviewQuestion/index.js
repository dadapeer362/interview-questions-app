// Write you Code here
import './index.css'
import {Component} from 'react'

class InterviewQuestion extends Component {
  state = {
    isAnswerHidden: false,
  }

  renderAnswer = () => {
    const {question} = this.props
    const {answerText} = question
    const {isAnswerHidden} = this.state

    if (isAnswerHidden) {
      return <p className="answer-text"> {answerText} </p>
    }
    return null
  }

  onToggleAnswer = () => {
    this.setState(prevState => ({
      isAnswerHidden: !prevState.isAnswerHidden,
    }))
  }

  render() {
    const {question} = this.props
    const {questionText, answerText, language, difficultyLevel} = question
    const {isAnswerHidden} = this.state
    const imgUrl = isAnswerHidden
      ? 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
      : 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'
    const altText = isAnswerHidden ? 'up arrow' : 'down arrow'
    return (
      <div className="questions-container">
        <div className="question-container-2">
          <span className={`lang-level-border level-${difficultyLevel}`}>
            {difficultyLevel}
          </span>
          <span className={`lang-level-border language-${language}`}>
            {language}
          </span>
          <h1 className="question-style">{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.onToggleAnswer}
          >
            {isAnswerHidden ? 'Hide' : 'Show'}
            <img className="image" src={imgUrl} alt={altText} />
          </button>
          {this.renderAnswer()}
        </div>
      </div>
    )
  }
}

export default InterviewQuestion

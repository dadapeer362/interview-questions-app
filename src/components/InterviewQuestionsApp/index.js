// Write you Code here
import './index.css'
import {Component} from 'react'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'

let filteredData

class InterviewQuestionsApp extends Component {
  state = {language: 'ALL', levelIs: 'ALL'}

  onShowQuestionCategory = category => {
    const {language} = this.state
    this.setState({language: category})
  }

  onShowQuestionLevel = level => {
    const {levelIs} = this.state
    this.setState({levelIs: level})
  }

  getTheQuestions() {
    const {questionsData} = this.props
    const {language, levelIs} = this.state
    if (language === 'ALL' && levelIs === 'ALL') {
      filteredData = questionsData
    } else if (language === 'ALL' && levelIs !== 'ALL') {
      filteredData = questionsData.filter(
        eachQuestion => eachQuestion.difficultyLevel === levelIs,
      )
    } else if (language !== 'ALL' && levelIs === 'ALL') {
      filteredData = questionsData.filter(
        eachQuestion => eachQuestion.language === language,
      )
    } else {
      filteredData = questionsData.filter(
        eachQuestion =>
          eachQuestion.language === language &&
          eachQuestion.difficultyLevel === levelIs,
      )
    }
    return filteredData
  }

  render() {
    const filteredQuestionsData = this.getTheQuestions()
    const {questionsData, levelsData, categoryData} = this.props
    const {language, levelIs} = this.state
    return (
      <div>
        <div className="bg-container">
          <h1 className="interview-heading">30 Seconds of Interviews</h1>
          <img
            className="img-style"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="interview-questions"
          />
        </div>
        <div className="filters-container">
          <Filters
            levelsData={levelsData}
            categoryData={categoryData}
            onShowQuestionCategory={this.onShowQuestionCategory}
            onShowQuestionLevel={this.onShowQuestionLevel}
          />
        </div>
        {filteredQuestionsData.map(eachQuestion => (
          <InterviewQuestion question={eachQuestion} />
        ))}
      </div>
    )
  }
}

export default InterviewQuestionsApp

// Write you Code here
import './index.css'
import {Component} from 'react'

class Filters extends Component {
  onSelectCategory = event => {
    const {onShowQuestionCategory} = this.props
    const {value} = event.target
    onShowQuestionCategory(value)
  }

  onSelectLevel = event => {
    const {onShowQuestionLevel} = this.props
    const {value} = event.target
    onShowQuestionLevel(value)
  }

  render() {
    const {levelsData, categoryData, onShowQuestion} = this.props
    return (
      <>
        <div className="label-dropdown-container">
          <label htmlFor="language" className="heading-dropdown">
            LANGUAGE
          </label>
          <select
            className="category-container"
            onChange={event => this.onSelectCategory(event)}
          >
            {categoryData.map(eachCategory => (
              <option
                className="option"
                value={eachCategory.language}
                key={eachCategory.id}
              >
                {eachCategory.language}
              </option>
            ))}
          </select>
        </div>
        <div className="label-dropdown-container">
          <label htmlFor="difficulty-level" className="heading-dropdown">
            DIFFICULTY LEVEL
          </label>
          <select
            className="level-container"
            onChange={event => this.onSelectLevel(event)}
          >
            {levelsData.map(eachLevel => (
              <option
                className="option"
                value={eachLevel.level}
                key={eachLevel.id}
              >
                {eachLevel.level}
              </option>
            ))}
          </select>
        </div>
      </>
    )
  }
}

export default Filters

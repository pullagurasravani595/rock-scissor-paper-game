import {Component} from 'react'
import PopupElement from '../PopupElement'
import ListButton from '../ListButton'
import ResultsView from '../ResultsView'
import {
  ScoreCard,
  Heading,
  ScoreContainer,
  ScoreValue,
  UnOrderList,
  PopupBtn,
} from './styledComponents'

class PlayingView extends Component {
  constructor(props) {
    super(props)
    const {choicesList} = this.props
    this.state = {activeImageUrl: choicesList[0].imageUrl, showResults: false}
  }

  ShowResultsView = () => {
    const {activeImageUrl} = this.state
    const {choicesList} = this.props
    return (
      <ResultsView
        activeImageUrl={activeImageUrl}
        choicesList={choicesList}
        changePlayBtn={this.changePlayBtn}
      />
    )
  }

  changeYourChoice = imageUrl => {
    this.setState({activeImageUrl: imageUrl, showResults: true})
  }

  changePlayBtn = () => {
    this.setState({showResults: false})
  }

  render() {
    const {choicesList} = this.props
    const {activeImageUrl, showResults} = this.state
    console.log(activeImageUrl)

    return (
      <>
        <ScoreCard>
          <Heading color="#ffffff">
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </Heading>
          <ScoreContainer>
            <Heading color="#223a5f">Score</Heading>
            <ScoreValue>0</ScoreValue>
          </ScoreContainer>
        </ScoreCard>
        {showResults ? (
          this.ShowResultsView()
        ) : (
          <UnOrderList>
            {choicesList.map(eachItem => (
              <ListButton
                itemDetails={eachItem}
                key={eachItem.id}
                changeYourChoice={this.changeYourChoice}
              />
            ))}
          </UnOrderList>
        )}
        <PopupBtn>
          <PopupElement />
        </PopupBtn>
      </>
    )
  }
}

export default PlayingView

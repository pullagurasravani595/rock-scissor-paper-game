import {
  ResultsContainer,
  SecondContainer,
  You,
  ChoiceImg,
  RequiredContainer,
  Status,
  PlayBtn,
} from './styledComponents'

const ResultsView = props => {
  const {activeImageUrl, choicesList} = props
  const randomIndex = Math.floor(Math.random() * choicesList.length)
  console.log(randomIndex)

  return (
    <>
      <ResultsContainer>
        <RequiredContainer>
          <SecondContainer>
            <You>You</You>
            <ChoiceImg src={activeImageUrl} alt="you" />
          </SecondContainer>
          <SecondContainer>
            <You>OPPONENT</You>
            <ChoiceImg src={choicesList[randomIndex].imageUrl} alt="you" />
          </SecondContainer>
        </RequiredContainer>
        <Status>YOU WON</Status>
        <PlayBtn>PLAY AGAIN</PlayBtn>
      </ResultsContainer>
    </>
  )
}

export default ResultsView

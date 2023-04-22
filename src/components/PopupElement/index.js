import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  TriggerButton,
  MainContainer,
  CloseBtn,
  BottomContainer,
  RulesImage,
} from './styledComponents'

const PopupElement = () => (
  <Popup modal trigger={<TriggerButton type="button">Rules</TriggerButton>}>
    {close => (
      <MainContainer>
        <CloseBtn type="button">
          <RiCloseLine onClick={() => close()} />
        </CloseBtn>
        <BottomContainer>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </BottomContainer>
      </MainContainer>
    )}
  </Popup>
)

export default PopupElement

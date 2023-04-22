import {ListElement, ImageBtn, ListImage} from './styledComponents'

const ListButton = props => {
  const {itemDetails, changeYourChoice} = props
  const {id, imageUrl} = itemDetails
  const changeBtnImg = () => {
    changeYourChoice(imageUrl)
  }

  return (
    <ListElement key={id}>
      <ImageBtn type="button" onClick={changeBtnImg}>
        <ListImage src={imageUrl} />
      </ImageBtn>
    </ListElement>
  )
}

export default ListButton

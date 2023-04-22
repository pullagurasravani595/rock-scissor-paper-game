import styled from 'styled-components'

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 27px;
`
export const You = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 700;
`

export const ChoiceImg = styled.img`
  width: 120px;
  height: 120px;
`
export const RequiredContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 90px;
  }
`
export const Status = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
`
export const PlayBtn = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Bree Serif';
  border-radius: 4px;
  border-width: 0px;
  height: 30px;
`

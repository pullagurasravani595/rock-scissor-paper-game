import styled from 'styled-components'

export const ScoreCard = styled.div`
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20vh;
  width: 65%;
  padding-left: 28px;
  padding-right: 20px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-family: 'Bree serif';
  font-size: 18px;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 17vh;
  padding-bottom: 4px;
  width: 100px;
`
export const ScoreValue = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Bree serif';
`

export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  flex-wrap: wrap;
  margin-top: 40px;
`
export const PopupBtn = styled.div`
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    margin-left: 900px;
  }
`

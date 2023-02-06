import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: ${props => props.bgColor};
`
export const BannerImgContainer = styled.div`
  background-image: url('');
  background-size: cover;
  display: ${props => props.display};
  flex-direction: row;
  width: 80%;
  height: 40vh;
  padding: 50px;
`

export const GetItNowBtn = styled.button`
  color: #181818;
  background-color: transparent;
  height: 30px;
  width: 100px;
  margin: 20px;
  border-color: #181818;
  border-style: solid;
  text-align: center;
`

export const BannerImage = styled.img`
  object-fit: fill;
  width: 250px;
`

export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`

export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`

export const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

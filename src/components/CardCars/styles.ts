import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  width: 60vw;
  flex-flow: row wrap;
  background-color: #fff;
  border: 1.5px solid #cfd9e6;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  .container-price {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
`
export const ContainerImage = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  img {
    width: 20vw;
    height: 14vw;
    min-height: max-content;
    border-radius: 5px;
    padding: 5px 5px 5px 5px;

    @media (max-width: 1024px) {
      min-width: 57vw;
      min-height: 35vw;
      padding: 5px 5px 5px 5px;
    }
  }
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  color: #686f79;
  padding: 10px 0 0 15px;
  div {
    display: grid;
    grid-template-columns: 15px 1fr;
    justify-content: space-around;
    flex-flow: row wrap;
    align-items: center;
    padding: 10px;
    gap: 1.5vh;

    p {
      flex-wrap: wrap;
      font-size: 1rem;
      color: #000000;
    }
  }
`
export const CarName = styled.p`
  flex-wrap: wrap;
  font-size: 1.7rem;
  font-weight: 500;
  color: #000000;
`

export const CarDescription = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`

export const CarPrice = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #000000;
`

export const Line = styled.div`
  display: flex;
  margin: auto;
  margin-left: 15%;
  min-height: 13vw;
  border: 0.5px solid red;

  @media (max-width: 1200px) {
    border: 0.5px solid white;
    margin: auto;
  }
`

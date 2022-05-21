import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: max-content;
  background-color: white;
`
export const ContainerInfo = styled.div`
  display: flex;
  background-color: #fff;
  flex-flow: column wrap;
  padding-top: 40px;
  margin: 0 auto;

  h1 {
    color: rgb(0, 0, 0);
    font-size: 40px;
    text-align: center;
  }

  p {
    font-size: 20px;
    color: rgb(0, 0, 0);
    text-align: justify;
    padding: 20px 50px 50px 50px;
  }
`

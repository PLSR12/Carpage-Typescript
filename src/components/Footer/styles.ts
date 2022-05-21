import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #000;
  margin-top: 0 auto;

  .mais-info {
    width: fit-content;
    height: fit-content;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 50px 0px;
    word-break: break-word;
    flex-wrap: wrap;
  }
  .mais-info h1 {
    text-align: center;
    font-size: 20px;
    padding: 15px 0px;
    color: #ccc;
    word-break: break-word;
    flex-wrap: wrap;
  }
  .mais-info svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 50px;
    width: 50px;
  }
  .mais-info p,
  .mais-info a {
    color: white;
    line-height: 1.5;
    text-decoration: none;
    word-break: break-word;
    flex-wrap: wrap;
    gap: 10px;
  }
  .redes {
    display: flex;
    justify-content: center;
  }
  .horario {
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 1.5;
  }
  .redes svg {
    height: 20px;
    width: 20px;
    color: white;
    margin: 0px 10px;
    cursor: pointer;
  }
  footer,
  h3 {
    font-size: 15px;
    color: #ccc;
    text-align: center;
    padding-bottom: 20px;
    line-height: 10px;
    word-break: break-word;
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    .mais-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
    }
    .mais-info svg {
      height: 50px;
      width: 50px;
    }
    .redes {
      display: flex;
      justify-content: center;
    }
    .redes svg {
      padding-top: 0px;
      margin-bottom: 40px;
      height: 20px;
      width: 20px;
    }
    .caixa-text p {
      font-size: 19px;
      text-align: center;
      color: #fff;
      max-width: 400px;
    }
  }
  @media (max-width: 548px) {
    .mais-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
    }
    .mais-info svg {
      height: 50px;
      width: 50px;
    }
    .redes {
      display: flex;
      justify-content: center;
    }
    .redes svg {
      padding-top: 0px;
      margin-bottom: 40px;
      height: 20px;
      width: 20px;
    }
    .caixa-text p {
      font-size: 19px;
      text-align: center;
      color: #fff;
      max-width: 400px;
    }
  }
  @media (max-width: 364px) {
    .mais-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
    }
    .mais-info svg {
      height: 50px;
      width: 50px;
    }
    .redes {
      display: flex;
      justify-content: center;
    }
    .redes svg {
      padding-top: 0px;
      margin-bottom: 40px;
      height: 20px;
      width: 20px;
    }
    .caixa-text p {
      font-size: 19px;
      text-align: center;
      color: #fff;
      max-width: 400px;
    }
  }
`

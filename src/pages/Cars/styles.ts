import styled from 'styled-components'

type ActiveBrandProps = {
  border?: any
  coloring?: any
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`

export const BrandsMenu = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5vw;
  margin-top: 5vh;
`

export const BrandButton = styled.button<ActiveBrandProps>`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props: ActiveBrandProps) =>
    props.border && '2px solid red'};
  color: ${(props: ActiveBrandProps) => (props.coloring ? 'red' : '#000')};
  font-size: 1rem;
`

export const CarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  padding: 3vw;
`

import { useHistory, Link } from 'react-router-dom'

import Logo from '../../assets/logo_super_carros.png'

import paths from '../../constants/paths'

import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  Line,
} from './styles'

export default function Header() {
  const {
    push,
    location: { pathname },
  } = useHistory()

  return (
    <Container>
      <ContainerLeft>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </ContainerLeft>
      <ContainerRight>
        <PageLink
          onClick={() => push(paths.PageCars)}
          isActive={pathname === '/carros'}
        >
          Carros
        </PageLink>
        <Line> </Line>
        <PageLink
          onClick={() => push(paths.PageMotors)}
          isActive={pathname === '/motos'}
        >
          Motos
        </PageLink>
        <Line> </Line>
        <PageLink
          onClick={() => push(paths.PageTrucks)}
          isActive={pathname === '/caminhoes'}
        >
          Caminhões
        </PageLink>
      </ContainerRight>
    </Container>
  )
}

import Routes from './routes'
import GlobalStyle from './styles/global'
import Modal from 'react-modal';

Modal.setAppElement('#root')

export default function App () {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  )
}

import Routes from './routes'
import GlobalStyle from './styles/global'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'

Modal.setAppElement('#root')

export default function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={2000} theme="colored" />
      <GlobalStyle />
    </>
  )
}

import AddCircleIcon from '@mui/icons-material/AddCircle'
import paths from '../../constants/paths'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

const listLinks = [
  {
    id: 1,
    label: 'Listar Caminhões',
    link: paths.Trucks,
    icon: LocalShippingIcon
  },
  {
    id: 2,
    label: 'Novo Caminhão',
    link: paths.NewTruck,
    icon: AddCircleIcon
  },

]

export default listLinks

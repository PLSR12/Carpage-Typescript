import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import paths from '../../constants/paths'
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';


const listLinks = [
  {
    id: 1,
    label: 'Listar Carros',
    link: paths.Cars,
    icon: DirectionsCarIcon
  },
  {
    id: 2,
    label: 'Novo Carro',
    link: paths.NewCar,
    icon: AddCircleIcon
  }, 
  {
    id: 3,
    label: 'Nova Marca',
    link: paths.NewBrand,
    icon: BrandingWatermarkIcon
  }
]

export default listLinks

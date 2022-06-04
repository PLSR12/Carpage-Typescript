import AddCircleIcon from '@mui/icons-material/AddCircle'
import paths from '../../constants/paths'
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler'
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';

const listLinks = [
  {
    id: 1,
    label: 'Listar Motos',
    link: paths.Motors,
    icon: TwoWheelerIcon
  },
  {
    id: 2,
    label: 'Nova Moto',
    link: paths.NewMotor,
    icon: AddCircleIcon
  },
]

export default listLinks

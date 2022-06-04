import { Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Motors from './pages/Motors'
import Trucks from './pages/Trucks'
import AdminCar from './pages/AdminCar'
import AdminMotors from './pages/AdminMotor'
import AdminTrucks from './pages/AdminTruck'

import paths from './constants/paths'

export default function Routes() {
  return (
    <Switch>
      <Route exact path={paths.Cars} component={AdminCar} />
      <Route exact path={paths.NewCar} component={AdminCar} />
      <Route exact path={paths.EditCar} component={AdminCar} />
      <Route exact path={paths.NewBrand} component={AdminCar} />
      
      <Route exact path={paths.Motors} component={AdminMotors} />
      <Route exact path={paths.NewMotor} component={AdminMotors} />
      <Route exact path={paths.EditMotor} component={AdminMotors} />
      <Route exact path={paths.NewBrand} component={AdminMotors} />

      
      <Route exact path={paths.Trucks} component={AdminTrucks} />
      <Route exact path={paths.NewTruck} component={AdminTrucks} />
      <Route exact path={paths.EditTruck} component={AdminTrucks} />
      <Route exact path={paths.NewBrand} component={AdminTrucks} />


      <Layout>
        <Route path={paths.Home} exact component={Home} />
        <Route path={paths.PageCars} exact component={Cars} />
        <Route path={paths.PageMotors} exact component={Motors} />
        <Route path={paths.PageTrucks} exact component={Trucks} />
      </Layout>
    </Switch>
  )
}

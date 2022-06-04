import { Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Motors from './pages/Motors'
import Trucks from './pages/Trucks'
import Admin from './pages/AdminCar'

import paths from './constants/paths'

export default function Routes() {
  return (
    <Switch>
      <Route exact path={paths.Cars} component={Admin} />
      <Route exact path={paths.NewCar} component={Admin} />
      <Route exact path={paths.EditCar} component={Admin} />
      <Route exact path={paths.NewBrand} component={Admin} />
      <Layout>
        <Route path={paths.Home} exact component={Home} />
        <Route path={paths.PageCars} exact component={Cars} />
        <Route path={paths.PageMotors} exact component={Motors} />
        <Route path={paths.PageTrucks} exact component={Trucks} />
      </Layout>
    </Switch>
  )
}

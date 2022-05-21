import { Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Motors from './pages/Motors'
import Trucks from './pages/Trucks'

import paths from './constants/paths'

export default function Routes() {
  return (
    <Switch>
      <Layout>
        <Route path={paths.Home} exact component={Home} />
        <Route path={paths.PageCars} exact component={Cars} />
        <Route path={paths.PageMotors} exact component={Motors} />
        <Route path={paths.PageTrucks} exact component={Trucks} />
      </Layout>
    </Switch>
  )
}

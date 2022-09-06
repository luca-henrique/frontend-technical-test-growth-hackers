import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const SignIn = lazy(() =>
  import('src/pages/SignIn').then(module => ({
    default: module.SignIn,
  })),
)
const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

export const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}

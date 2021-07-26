import { Home } from './components/Home'
import { ClientForm } from './components/ClientForm'
import { ProductForm } from './components/ProductForm'
import { Container } from './Global'
import { Switch, Route, BrowserRouter } from 'react-router-dom'


export function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/cadastrar-cliente">
            <ClientForm/>
          </Route>
          <Route path="/cadastrar-produto">
            <ProductForm/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

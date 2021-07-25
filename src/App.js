import { Home } from './components/Home'
import { ClientForm } from './components/ClientForm'
import { ProductForm } from './components/ProductForm'
import { Container } from './Global'


export function App() {
  return (
    <Container>
      <Home/>
      <ClientForm/>
      <ProductForm/>
    </Container>
  );
}

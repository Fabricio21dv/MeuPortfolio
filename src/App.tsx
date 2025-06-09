import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

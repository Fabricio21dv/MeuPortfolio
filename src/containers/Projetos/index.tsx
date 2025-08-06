import {
  Projeto,
  Projeto2,
  Projeto3,
  Projeto4,
  Projeto5,
  Projeto6,
  Projeto7
} from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto2 />
      </li>
      <li>
        <Projeto3 />
      </li>
      <li>
        <Projeto4 />
      </li>
      <li>
        <Projeto5 />
      </li>
      <li>
        <Projeto6 />
      </li>
      <li>
        <Projeto7 />
      </li>
    </Lista>
  </section>
)

export default Projetos

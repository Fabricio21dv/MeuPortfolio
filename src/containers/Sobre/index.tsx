import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet,
      pariatur alias ipsum ab delectus voluptate. Explicabo, laboriosam alias.
      Tempore culpa sapiente illo esse, atque repudiandae voluptas sunt libero
      porro.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Fabricio21dv&show_icons=true&theme=transparent&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Fabricio21dv&layout=compact&langs_count=7&theme=transparent" />
    </GithubSecao>
  </section>
)

export default Sobre

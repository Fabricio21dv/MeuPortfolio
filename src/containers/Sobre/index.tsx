import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Me chamo Fabricio, e sou mestre em Ciências Biológicas. Porém, desde 2024
      entrei de cabeça no mundo da tecnologia em busca de novos ares. Ainda
      estou no início mas estou desenvolvendo minhas skills para poder trabalhar
      com equipes, porém já consigo realizar tarefas como CRUD completo, deploy
      simples, integração front-back, controle de versão e desenvolvimento
      responsivo.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Fabricio21dv&show_icons=true&theme=transparent&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Fabricio21dv&layout=compact&langs_count=7&theme=transparent" />
    </GithubSecao>
  </section>
)

export default Sobre

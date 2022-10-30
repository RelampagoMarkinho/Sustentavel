import { ConteinerView, Titulo, TituloMedium, TextoRegular, ConteinerTempo, IconTempo, ImageDemo } from './styles';


export function Vidro() {
  return (
    <ConteinerView>
      <Titulo>Vidro</Titulo>

      <ConteinerTempo>
        <IconTempo source={require('../../assets/tempo.png')} />
        <TextoRegular>Tempo de composição do VIDRO é de 4.000 anos</TextoRegular>
      </ConteinerTempo>

      <TituloMedium>COMO APROVEITAR O VIDRO?</TituloMedium>
      <TextoRegular>
        Existe ferramentas que fazem corte perfeito no vidro que transformam o mesmo em decorações
        realmente lindo para ambiente externos ou internos de residencias ou lugares comerciais,
        trabalhando bem com esse material com vidro a certeza de uma renda extra se torna real.
      </TextoRegular>


      <TituloMedium>DESCARTE CORRETO</TituloMedium>
      <TextoRegular>
        Geralmente existe lugares que na qual contém recipientes de coleta resíduos reclicaveis como o VIDRO, é muito importante
        a separação e tratamento do vidro pela demora da decoposição e também quando quebrado
        se torna um objeto cortante.
      </TextoRegular>
    </ConteinerView>
  )
};
import { ConteinerView, Titulo, TituloMedium, TextoRegular, ConteinerTempo, IconTempo, ImageDemo } from './styles';




export function Organico() {
  return (
    <ConteinerView>
      <Titulo>Orgânico</Titulo>

      <ConteinerTempo>
        <IconTempo source={require('../../assets/tempo.png')} />
        <TextoRegular>Tempo de composição de resíduos é de dias</TextoRegular>
      </ConteinerTempo>

      <TituloMedium>COMO DESCARTAR CORRETAMENTE O LIXO ORGÂNICO?</TituloMedium>
      <TextoRegular>A maneira mais eficiente e sustentável de reciclar o lixo orgânico é por meio da compostagem, processo que o transforma em adubo. Além disso, é possível transformar os resíduos em húmus, adubo orgânico de alta qualidade, e em pesticida natural. Assim, você reutiliza tudo de maneira ecologicamente correta e ainda consegue obter legumes e verduras mais saudáveis.</TextoRegular>

    </ConteinerView>
  )
};
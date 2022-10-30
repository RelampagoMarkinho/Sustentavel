import { ConteinerView, Titulo, TituloMedium, TextoRegular, ConteinerTempo, IconTempo } from './styles';

export function Metal() {
  return (
    <ConteinerView>
      <Titulo>Metal</Titulo>

      <ConteinerTempo>
        <IconTempo source={require('../../assets/tempo.png')} />
        <TextoRegular>Tempo de composição do Metal é de 10 anos</TextoRegular>
      </ConteinerTempo>

      <TituloMedium>OQUE É FEITO COM METAL?</TituloMedium>
      <TextoRegular>m alguns casos, os metais são triturados. A trituração é feita para promover o processo de fusão, já que os pedaços pequenos de metais triturados possuem grande relação superfície/volume. Assim, eles podem ser derretidos usando menos energia. Normalmente, o alumínio se transforma em pequenas folhas e o aço é transformado em blocos de aço.</TextoRegular>


      <TituloMedium>DESCARTE CORRETO GARANTE O FUTURO DO NOSSO PLANETA!!</TituloMedium>

    </ConteinerView>
  )
};
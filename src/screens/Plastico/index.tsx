import { ConteinerView, Titulo, TituloMedium, TextoRegular, ConteinerTempo, IconTempo, ImageDemo } from './styles';

import { StatusBar } from 'expo-status-bar';

export function Plastico() {
  return (
    <ConteinerView>
      <Titulo>Plastico</Titulo>

      <ConteinerTempo>
        <IconTempo source={require('../../assets/tempo.png')} />
        <TextoRegular>Tempo de composição do plástico é de 450 anos</TextoRegular>
      </ConteinerTempo>

      <TituloMedium>POR QUE A RECICLAGEM DE PLÁSTICO É IMPORTANTE?</TituloMedium>
      <TextoRegular>Ao jogar os utensílios de plástico no lixo comum, eles acabam indo para aterros sanitários. Esta solução, apesar de econômica, não é sustentável. Primeiro porque o plástico demora de seis meses a 100 anos para se decompor (a depender do tipo).

        Por essa razão, é tão importante a destinação adequada para cada tipo diferente de plástico, já que, caso sejam descartados indevidamente, eles irão poluir mares, rios e matas por meses, décadas e até séculos. Daí a importância da reciclagem de plástico.</TextoRegular>


      <TituloMedium>DESCARTE CORRETO</TituloMedium>
      <TextoRegular>Para não agredir o meio ambiente, a melhor opção é separar os produtos plásticos do restante do lixo em sua casa. Para colaborar com a coleta seletiva, basta encaminhá-los até um dos Pontos de Entrega Voluntária (PEVs) e depositá-los na lixeira ou recipiente de cor azul. Também é possível verificar se alguma cooperativa realiza a coleta em seu bairro. Para isto, basta clicar aqui.</TextoRegular>
    </ConteinerView>
  )
}
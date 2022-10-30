import {
  TituloPrin, Conteiner,
  R_sView,
  R_sTextTitulo,
  TextoRegular,
  TextoSimples,
  ScrollViewConteiner,
  ImageView,
  ImageR_s

} from './styles';
import { StatusBar } from 'expo-status-bar';

export function SeteRs() {
  return (
    <ScrollViewConteiner>
      <Conteiner>
        <StatusBar style="dark" />
        <TituloPrin>Conhcendo os 7R's</TituloPrin>

        <R_sView>
          <R_sTextTitulo>R<TextoRegular>eduzir</TextoRegular></R_sTextTitulo>
        </R_sView>
        <TextoSimples>Diminua o consumo de água e de luz em sua casa reutilizando a água que sobrou do último enxágue da máquina para lavar o quintal, diminuindo o tempo de banho e trocando lâmpadas incandescentes por fluorescentes.</TextoSimples>
        <ImageView>
          <ImageR_s source={require('../../assets/Redusa.png')} />
        </ImageView>



        <R_sView>
          <R_sTextTitulo>R<TextoRegular>epensar</TextoRegular></R_sTextTitulo>
        </R_sView>
        <TextoSimples>Procure utilizar menos seu carro. Ande mais a pé, de bicicleta, use transporte coletivo ou mesmo táxi: é mais barato e você evita emissão de poluentes.</TextoSimples>
        <ImageView>
          <ImageR_s source={require('../../assets/bicicleta.png')} />
        </ImageView>


        <R_sView>
          <R_sTextTitulo>R<TextoRegular>esponsabilize-se</TextoRegular></R_sTextTitulo>
        </R_sView>
        <TextoSimples>Pergunte e pesquise sobre a origem dos produtos que você consome. Veja se os fabricantes não estão envolvidos com desmatamento ilegal e trabalho escravo, por exemplo.

          Evite o desperdício de alimentos e planeje melhor suas compras. Priorize frutas e legumes da estação e, se possível, adquira alimentos orgânicos, de preferência em feiras especializadas.</TextoSimples>
        <ImageView>
          <ImageR_s source={require('../../assets/responsavel.png')} />
        </ImageView>



        <R_sView>
          <R_sTextTitulo>R<TextoRegular>eintegre</TextoRegular></R_sTextTitulo>
        </R_sView>
        <TextoSimples>Seu lixo orgânico também pode ser reaproveitado em sua casa com a compostagem, que é uma espécie de "reciclagem dos resíduos orgânicos". Essa técnica permite a transformação de restos orgânicos (sobras de frutas e legumes e alimentos em geral, podas de jardim, trapos de tecido, serragem, etc) em adubo. É um processo biológico que acelera a decomposição do material orgânico, tendo como produto final o composto orgânico.</TextoSimples>
        <ImageView>
          <ImageR_s source={require('../../assets/organico.png')} />
        </ImageView>


        <R_sView>
          <R_sTextTitulo>R<TextoRegular>ecuse</TextoRegular></R_sTextTitulo>
        </R_sView>
        <TextoSimples>Quando for fazer compras, leve sua sacola retornável para evitar pegar as plásticas. Recuse também comprar produtos com embalagens desnecessárias - por exemplo, prefira frutas e legumes a granel do que os embalados em bandejas de isopor no supermercado.</TextoSimples>
        <ImageView>
          <ImageR_s source={require('../../assets/sacolaretornavel.png')} />
        </ImageView>



        <R_sView>
          <R_sTextTitulo>R<TextoRegular>eaproveite</TextoRegular></R_sTextTitulo>
        </R_sView>
        <TextoSimples>Na hora de construir ou reformar, avalie os produtos que utilizará e, no projeto, busque meios de facilitar reuso de água (por meio de uma cisterna, por exemplo) e avalie a possibilidade de instalar paineis de energia solar.

          Organize com amigos, familiares ou colegas de trabalho um bazar para troca de produtos que estão encostados no fundo do armário. Se você tem crianças em casa, pense também em trocar brinquedos e roupas que não servem mais.</TextoSimples>
        <ImageView>
          <ImageR_s source={require('../../assets/brecho.jpg')} />
        </ImageView>



        <R_sView>
          <R_sTextTitulo>R<TextoRegular>ecicle</TextoRegular></R_sTextTitulo>
        </R_sView>
        <TextoSimples>Separe materiais descartáveis do lixo orgânico em sua casa. Se não existir coleta seletiva em sua cidade, procure uma cooperativa de catadores para encaminhar os produtos para reciclagem.</TextoSimples>
        <ImageView>
          <ImageR_s source={require('../../assets/recicle.png')} />
        </ImageView>


      </Conteiner>
    </ScrollViewConteiner>
  )
}
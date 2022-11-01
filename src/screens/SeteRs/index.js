import { Image, ScrollView, Text, View } from "react-native";
import styles from "./styles";


export function SeteRs() {
  return (
    <ScrollView style={styles.conteiner}>
      <Text style={styles.tituloPrincipal}>
        Conhcendo os 7R's
      </Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={styles.Titulo}><Text style={styles.rTitulo}>R</Text>eduzir</Text>
      </View>

      <Text style={styles.Descricao}>Diminua o consumo de água e de luz em sua casa reutilizando a água que sobrou do último
        enxágue da máquina para lavar o quintal, diminuindo o tempo de banho e trocando lâmpadas incandescentes por fluorescentes.</Text>

      <Image style={styles.imageRs} source={require('../../assets/Redusa.png')} />


      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={styles.Titulo}><Text style={styles.rTitulo}>R</Text>epensar</Text>
      </View>

      <Text style={styles.Descricao}>Procure utilizar menos seu carro. Ande mais a pé, de bicicleta, use
        transporte coletivo ou mesmo táxi: é mais barato e você evita emissão de poluentes.</Text>

      <Image style={styles.imageRs} source={require('../../assets/bicicleta.png')} />



      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={styles.Titulo}><Text style={styles.rTitulo}>R</Text>esponsabilize-se</Text>
      </View>

      <Text style={styles.Descricao}>Pergunte e pesquise sobre a origem dos produtos que você consome. Veja se os fabricantes não estão envolvidos com desmatamento ilegal e trabalho escravo, por exemplo.

        Evite o desperdício de alimentos e planeje melhor suas compras. Priorize frutas e legumes da estação e, se possível, adquira alimentos orgânicos, de preferência em feiras especializadas.</Text>

      <Image style={styles.imageRs} source={require('../../assets/responsavel.png')} />


      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={styles.Titulo}><Text style={styles.rTitulo}>R</Text>eintegre</Text>
      </View>

      <Text style={styles.Descricao}>Seu lixo orgânico também pode ser reaproveitado em sua casa com a compostagem,
        que é uma espécie de "reciclagem dos resíduos orgânicos". Essa técnica permite
        a transformação de restos orgânicos (sobras de frutas e legumes e alimentos em geral,
        podas de jardim, trapos de tecido, serragem, etc) em adubo. É um processo biológico que
        acelera a decomposição do material orgânico, tendo como produto final o composto orgânico.</Text>

      <Image style={styles.imageRs} source={require('../../assets/organico.png')} />


      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={styles.Titulo}><Text style={styles.rTitulo}>R</Text>eaproveite</Text>
      </View>

      <Text style={styles.Descricao}>Na hora de construir ou reformar, avalie os produtos que utilizará e, no projeto,
        busque meios de facilitar reuso de água (por meio de uma cisterna, por exemplo) e
        avalie a possibilidade de instalar paineis de energia solar.Organize com amigos,
        familiares ou colegas de trabalho um bazar para troca de produtos que estão encostados
        no fundo do armário. Se você tem crianças em casa, pense também em trocar brinquedos
        e roupas que não servem mais.</Text>

      <Image style={styles.imageRs} source={require('../../assets/brecho.jpg')} />


      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={styles.Titulo}><Text style={styles.rTitulo}>R</Text>ecuse</Text>
      </View>

      <Text style={styles.Descricao}>Quando for fazer compras, leve sua sacola retornável para evitar pegar as plásticas.
        Recuse também comprar produtos com embalagens desnecessárias - por exemplo, prefira frutas e
        legumes a granel do que os embalados em bandejas de isopor no supermercado.</Text>

      <Image style={styles.imageRs} source={require('../../assets/sacolaretornavel.png')} />



      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={styles.Titulo}><Text style={styles.rTitulo}>R</Text>ecicle</Text>
      </View>

      <Text style={styles.Descricao}>Separe materiais descartáveis do lixo orgânico em sua casa.
        Se não existir coleta seletiva em sua cidade, procure uma cooperativa
        de catadores para encaminhar os produtos para reciclagem.</Text>

      <Image style={styles.imageRs} source={require('../../assets/recicle.png')} />

    </ScrollView>
  )
};
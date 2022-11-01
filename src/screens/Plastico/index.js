import React, { Image, ScrollView, Text, View } from "react-native";
import styles from "./styles";

export function Plastico() {
  return (
    <ScrollView style={styles.Conteiner}>
      <View style={styles.ViewTempodeComposicao}>

        <Image source={require('../../assets/tempo.png')} style={{ height: 50, width: 50 }} />
        <Text style={{ width: 200 }}>Tempo de composição do plástico é de 450 anos</Text>

      </View>

      <Text style={styles.Titulo}>
        POR QUE A RECICLAGEM DE PLÁSTICO É IMPORTANTE?
      </Text>
      <Text style={styles.Descricao}>
        Ao jogar os utensílios de plástico no lixo comum, eles acabam indo para aterros sanitários.
        Esta solução, apesar de econômica, não é sustentável. Primeiro porque o plástico demora de seis
        meses a 100 anos para se decompor (a depender do tipo).
      </Text>

      <Text style={styles.Descricao}>
        Por essa razão, é tão importante a destinação adequada para cada tipo diferente de plástico,
        já que, caso sejam descartados indevidamente, eles irão poluir mares, rios e matas por meses,
        décadas e até séculos. Daí a importância da reciclagem de plástico.
      </Text>

      <Text style={styles.MsgFinal}>
        DESCARTE CORRETO
      </Text>

      <Text style={{ marginTop: 10, fontSize: 14 }}>
        Para não agredir o meio ambiente, a melhor opção é separar os produtos plásticos do restante do lixo
        em sua casa. Para colaborar com a coleta seletiva, basta encaminhá-los até um dos Pontos de
        Entrega Voluntária (PEVs) e depositá-los na lixeira ou recipiente de cor azul. Também é possível verificar se
        alguma cooperativa realiza a coleta em seu bairro. Para isto, basta clicar aqui.
      </Text>


    </ScrollView>
  )
};
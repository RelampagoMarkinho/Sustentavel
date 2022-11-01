import React, { Image, Text, View } from "react-native";
import styles from "./styles";

export function Metal() {
  return (
    <View style={styles.Conteiner}>
      <View style={styles.ViewTempodeComposicao}>

        <Image source={require('../../assets/tempo.png')} style={{ height: 50, width: 50 }} />
        <Text style={{ width: 200 }}>Tempo de composição do Metal é de 10 anos</Text>

      </View>

      <Text style={styles.Titulo}>
        OQUE É FEITO COM METAL?
      </Text>
      <Text style={styles.Descricao}>
        Em alguns casos, os metais são triturados. A trituração é feita para promover o processo
        de fusão, já que os pedaços pequenos de metais triturados possuem grande relação
        superfície/volume. Assim, eles podem ser derretidos usando menos energia. Normalmente,
        o alumínio se transforma em pequenas folhas e o aço é transformado em blocos de aço.
      </Text>

      <Text style={styles.MsgFinal}>
        DESCARTE CORRETO GARANTE O FUTURO DO NOSSO PLANETA!!
      </Text>


    </View>
  )
};
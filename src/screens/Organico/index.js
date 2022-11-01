import React, { Image, ScrollView, Text, View } from "react-native";
import styles from "./styles";

export function Organico() {
  return (
    <ScrollView style={styles.Conteiner}>
      <View style={styles.ViewTempodeComposicao}>

        <Image source={require('../../assets/tempo.png')} style={{ height: 50, width: 50 }} />
        <Text style={{ width: 200 }}>Tempo de composição de resíduos é de dias</Text>

      </View>

      <Text style={styles.Titulo}>
        COMO DESCARTAR CORRETAMENTE O LIXO ORGÂNICO?
      </Text>
      <Text style={styles.Descricao}>
        A maneira mais eficiente e sustentável de reciclar o lixo orgânico é por meio da compostagem,
        processo que o transforma em adubo. Além disso, é possível transformar os resíduos em húmus,
        adubo orgânico de alta qualidade, e em pesticida natural. Assim, você reutiliza tudo de maneira
        ecologicamente correta e ainda consegue obter legumes e verduras mais saudáveis.
      </Text>

      <Text style={styles.MsgFinal}>
        A SUA HORTA OU JARDIM VAI ADORA O ADUBO.
      </Text>


    </ScrollView>
  )
};
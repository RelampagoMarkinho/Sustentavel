import React, { Image, Text, View } from "react-native";
import styles from "./styles";

export function Vidro() {
  return (
    <View style={styles.Conteiner}>
      <View style={styles.ViewTempodeComposicao}>

        <Image source={require('../../assets/tempo.png')} style={{ height: 50, width: 50 }} />
        <Text style={{ width: 200 }}>Tempo de composição do VIDRO é de 4.000 anos</Text>

      </View>

      <Text style={styles.Titulo}>
        COMO APROVEITAR O VIDRO?
      </Text>
      <Text style={styles.Descricao}>
        Existe ferramentas que fazem corte perfeito no vidro que transformam o mesmo em decorações
        realmente lindo para ambiente externos ou internos de residencias ou lugares comerciais,
        trabalhando bem com esse material com vidro a certeza de uma renda extra se torna real.
      </Text>

      <Text style={styles.MsgFinal}>
        DESCARTE CORRETO
      </Text>

      <Text style={{ fontSize: 16, textAlign: "justify", marginTop: 10 }}>
        Geralmente existe lugares que na qual contém recipientes de coleta resíduos reclicaveis como o VIDRO, é muito importante
        a separação e tratamento do vidro pela demora da decoposição e também quando quebrado
        se torna um objeto cortante.
      </Text>



    </View>
  )
};
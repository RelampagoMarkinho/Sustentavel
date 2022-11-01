import React, { Image, ScrollView, Text, View, VirtualizedList } from "react-native";
import styles from "./styles";

export function Papel() {
  return (
    <ScrollView style={styles.Conteiner}>
      <View style={styles.ViewTempodeComposicao}>

        <Image source={require('../../assets/tempo.png')} style={{ height: 50, width: 50 }} />
        <Text style={{ width: 200 }}>Tempo de composição 3 a 6 meses</Text>

      </View>

      <Text style={styles.Titulo}>
        POR QUE A RECICLAGEM DE PAPEL É IMPORTANTE?
      </Text>
      <Text style={styles.Descricao}>
        O papel comum tem como matéria prima as fibras de celulose extraídas de árvores com um alto teor de
        celulose (como pinheiro e eucalipto), então para produzir muito papel é necessario muitas árvores,
        mas com a recilcagem da pra utilizar o recursos de celulose dos papeis existentes.
      </Text>

      <Text style={styles.MsgFinal}>
        DESCARTE CORRETO
      </Text>

      <View style={{ flexDirection: "column" }}>
        <Text style={{ marginTop: 5, fontSize: 14 }}>1- papel imprensa, destinado majoritariamente à impressão de jornais, mas também inclui periódicos, revistas, listas telefônicas, suplementos e encartes promocionais.</Text>
        <Text style={{ marginTop: 5, fontSize: 14 }}>2- de imprimir e escrever.</Text>
        <Text style={{ marginTop: 5, fontSize: 14 }}>3- papelão ondulado, majoritariamente dirigido para a produção de embalagens para transporte das mais variadas mercadorias.</Text>
        <Text style={{ marginTop: 5, fontSize: 14 }}>4- papel-cartão, especialmente utilizado na produção de embalagens de bens de consumo imediato, como remédios, alimentos industrializados, cosméticos e brinquedos, entre outros.</Text>
        <Text style={{ marginTop: 5, fontSize: 14 }}>5-sanitários, cujo principal produto é o papel higiênico, mas também engloba a produção de toalhas, guardanapos e lenços, entre outros produtos.</Text>
        <Text style={{ marginTop: 5, fontSize: 14 }}>6- outros papéis para embalagens e os papéis especiais.</Text>
        <Text style={{ marginTop: 5, fontSize: 14 }}>No caso da reciclagem de papel usado ou velho ocorre um reaproveitamento destas fibras de celulose, que serão reutilizadas na produção de papel novo e poderão ser novamente disponibilizadas para diversas finalidades. Apenas os papeis que se encaixam na categoria de sanitários não são recicláveis.</Text>
      </View>


    </ScrollView>
  )
};
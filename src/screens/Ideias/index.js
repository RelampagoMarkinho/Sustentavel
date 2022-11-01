import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "./styles";
import YoutubePlayer from "react-native-youtube-iframe";

export function Ideias() {
  return (
    <ScrollView style={styles.conteiner}>

      <Text style={styles.Titulo}>Panelinha</Text>
      <Text style={styles.descricao}>
        Já Imaginou criar uma panelinha usando latas de refrigerante?.
      </Text>

      <YoutubePlayer
        height={200}
        play={false}
        videoId={"EQufne0G4cI"} />

      <Text style={styles.Titulo}>5 Brinquedos</Text>
      <Text style={styles.descricao}>
        Criar através da reciclagem é muito importante e pode ser também
        divertido, para ajuda as crianças entenderem como pode ser legal reciclar,
        criando nesse video, brinquedos para se divertir.
      </Text>

      <YoutubePlayer
        height={200}
        play={false}
        videoId={"CJKJlZOhJPE"} />

      <Text style={styles.Titulo}>Óleo em Sabão</Text>
      <Text style={styles.descricao}>
        Que tal aprender criar o seu próprio sabão usando o óleo que iria
        jogar fora? Além de economizar ainda vai está ajudando a natureza.
      </Text>

      <YoutubePlayer
        height={200}
        play={false}
        videoId={"5a-Tt9VCueE"} />

      <Text style={styles.Titulo}>Que tal uma caixa separadora de papelão?</Text>
      <Text style={styles.descricao}>
        Sei que é muito bom ter uma renda extra, mas melhor que isso
        é ter uma renda extra e ajuda o meio ambiente ao mesmo tempo.
      </Text>

      <YoutubePlayer
        height={200}
        play={false}
        videoId={"1QtB82-zBL4"} />

    </ScrollView>
  )
};
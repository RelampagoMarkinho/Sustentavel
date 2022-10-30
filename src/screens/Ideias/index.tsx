import { Container, ButtonPlay, TextTopico, TextDescri, Link } from './styled';
import React, { useRef, useState } from 'react';
import { Linking } from 'react-native';
import { View, StyleSheet, Button, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Video } from 'expo-av';

export function Ideias() {
  const video = useRef(null);
  const [status, setStatus] = useState({});


  return (
    <ScrollView style={styles.Conteiner}>


      <TextTopico>Panelinha</TextTopico>
      <TextDescri>Já Imaginou criar uma panelinha usando latas de refrigerante?.
      </TextDescri>
      <Link onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=EQufne0G4cI&feature=youtu.be') }}>
        Clique Aqui para assistir o video.</Link>



      <TextTopico>5 Brinquedos</TextTopico>
      <TextDescri>Criar através da reciclagem é muito importante e pode ser também
        divertido, para ajuda as crianças entenderem como pode ser legal reciclar,
        criando nesse video, brinquedos para se divertir.
      </TextDescri>
      <Link onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=CJKJlZOhJPE&feature=youtu.be') }}>
        Clique Aqui para assistir o video.</Link>

      <TextTopico>Óleo em Sabão</TextTopico>
      <TextDescri>Que tal aprender criar o seu próprio sabão usando o óleo que iria
        jogar fora? Além de economizar ainda vai está ajudando a natureza.
      </TextDescri>
      <Link onPress={() => { Linking.openURL('https://youtu.be/5a-Tt9VCueE') }}>
        Clique Aqui para assistir o video.</Link>

      <TextTopico>Que tal uma caixa separadora de papelão?</TextTopico>
      <TextDescri>Sei que é muito bom ter uma renda extra, mas melhor que isso
        é ter uma renda extra e ajuda o meio ambiente ao mesmo tempo.
      </TextDescri>
      <Link onPress={() => { Linking.openURL('https://youtu.be/1QtB82-zBL4') }}>
        Clique Aqui para assistir o video.</Link>




    </ScrollView>
  )

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    height: 200,
    alignSelf: 'stretch'
  },
  buttons: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  modeButtonPlay: {
    height: 30,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
    width: 50,
    borderRadius: 30,
  },
  Conteiner: {
    backgroundColor: '#fff',
    width: "100%",
    height: "100%",

  }


});
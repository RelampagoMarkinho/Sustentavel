import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export function Home({ navigation }) {
  return (
    <View style={styles.conteiner}>
      <StatusBar style='light' />
      <View style={styles.ViewReflex} >
        <Text style={styles.reflex}>O cuidado com a natureza não só preserva ela,
          mas também garante o futuro das gerações que
          viram!
        </Text>

        <Image style={styles.imagePlaneta} source={require('../../assets/iconperfilhome.png')} />

      </View>

      <TouchableOpacity style={{ width: '100%', height: 100, borderRadius: 20, marginTop: 15 }} onPress={() => navigation.navigate('SeteRs')}>
        <ImageBackground source={require('../../assets/buttonUm.jpg')} style={styles.ImageCard}>
          <Text style={styles.textCardRs}>7rs</Text>
          <View style={styles.conteinerdescri7rs}>
            <Text style={styles.textdescri7rs}>A importancia de conhecer</Text>
            <Text style={styles.textdescri7rs}>e fazer os 7'Rs</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={styles.textTitulo}>
        Tipos de Residuos:
      </Text>

      <ScrollView horizontal style={styles.srollviewcards}>

        <TouchableOpacity style={{ marginLeft: 6 }} onPress={() => navigation.navigate('Metal')}>
          <Image style={styles.imageminicard} source={require('../../assets/lataMetal.png')} />
        </TouchableOpacity>


        <TouchableOpacity style={{ marginLeft: 6 }} onPress={() => navigation.navigate('Orgânico')}>
          <Image style={styles.imageminicard} source={require('../../assets/lataOrganico.png')} />
        </TouchableOpacity>



        <TouchableOpacity style={{ marginLeft: 6 }} onPress={() => navigation.navigate('Papel')}>
          <Image style={styles.imageminicard} source={require('../../assets/lataPapel.png')} />
        </TouchableOpacity>



        <TouchableOpacity style={{ marginLeft: 6 }} onPress={() => navigation.navigate('Plastico')}>
          <Image style={styles.imageminicard} source={require('../../assets/lataPlastico.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 6 }} onPress={() => navigation.navigate('Vidro')}>
          <Image style={styles.imageminicard} source={require('../../assets/lataVidro.png')} />
        </TouchableOpacity>

      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate('Ideias')}>
        <View style={styles.ideiasView}>
          <Image source={require('../../assets/cardsIdeias.png')} style={{ height: 80, width: 60 }} />
          <Text style={{ width: 200, marginLeft: 20 }}>ideias para fazer em casa! Criar preservando é um presente que garante o futuro</Text>
        </View>
      </TouchableOpacity>


    </View>
  );
}

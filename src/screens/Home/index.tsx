import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import {
  GridViewCards,
  TextoRegularBlack,
  Container,
  ViewRowCards,
  Containerinfo,
  TextoMediumBlack,
  TextoRegular,
  Titulo,
  Containerboasvindas,
  CardView,
  ViewCardView,
  CadrViewImage,
  TituloCard,
  InfoCardView,
  TextoMedium,
  MiniCardViewImage,
  ImageMiniCardView,
  ViewIconCardView,
  ImageMiniCardViewMetal,
  ImageMiniCardViewPapel,
  ImageMiniCardViewOleo,
  ScrollViewCards
} from './styles';

export function Home({ navigation }) {
  return (
    <Container>
      <StatusBar style="light" />
      <Containerinfo>
        <Containerboasvindas>
          <Titulo>Olá!</Titulo>
          <TextoRegular>Vamos cuidar de mim?</TextoRegular>
        </Containerboasvindas>

        <Image source={require('../../assets/iconperfilhome.png')} style={{ width: 50, height: 50 }} />

      </Containerinfo>

      <CardView>
        <TouchableOpacity style={{ width: '100%', height: 100, borderRadius: 20 }} onPress={() => navigation.navigate('SeteRS')}>
          <CadrViewImage source={require('../../assets/buttonUm.jpg')}>

            <TituloCard>7R's</TituloCard>

            <InfoCardView>
              <TextoRegular>A importancia de conhecer</TextoRegular>
              <TextoRegular>e fazer os 7'Rs</TextoRegular>
            </InfoCardView>


          </CadrViewImage>
        </TouchableOpacity>
      </CardView>

      <TextoMedium>Tipos de Residuos:</TextoMedium>

      <ScrollViewCards horizontal >



        <TouchableOpacity onPress={() => navigation.navigate('Plastico')}>

          <ImageMiniCardView source={require('../../assets/lataPlastico.png')} />

        </TouchableOpacity>




        <TouchableOpacity onPress={() => navigation.navigate('Vidro')}>

          <ImageMiniCardView source={require('../../assets/lataVidro.png')} />

        </TouchableOpacity>




        <TouchableOpacity onPress={() => navigation.navigate('Papel')}>

          <ImageMiniCardView source={require('../../assets/lataPapel.png')} />

        </TouchableOpacity>



        <TouchableOpacity onPress={() => navigation.navigate('Organico')}>

          <ImageMiniCardView source={require('../../assets/lataOrganico.png')} />

        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Metal')}>

          <ImageMiniCardView source={require('../../assets/lataMetal.png')} />

        </TouchableOpacity>


      </ScrollViewCards>

      <ViewRowCards>
        <TouchableOpacity onPress={() => navigation.navigate('Ideias')}>

          <ViewCardView>
            <MiniCardViewImage source={require('../../assets/cardsIdeias.png')} />
            <View style={{ flexDirection: 'column', }}>

              <TextoMediumBlack>Ideias?</TextoMediumBlack>

              <TextoRegularBlack>ideias para fazer em casa!</TextoRegularBlack>
            </View>


          </ViewCardView>

        </TouchableOpacity>

      </ViewRowCards>



    </Container>
  );
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1F2B67',
    alignContent: 'center',
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },
  reflex: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'justify',
    width: '80%'
  },
  ViewReflex: {
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  imagePlaneta: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 20
  },
  ImageCard: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCardRs: {
    marginLeft: 20,
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  conteinerdescri7rs: {
    marginLeft: 30,
  },
  textdescri7rs: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#fff'
  },
  textTitulo: {
    marginLeft: 20,
    marginTop: 15,
    fontSize: 24,
    color: '#fff',
    fontWeight: '200',
  },
  imageminicard: {
    height: 104,
    width: 68,
    marginleft: 6
  },

  srollviewcards: {
    width: '100%',
    marginTop: 10,
  },

  ideiasView: {
    height: 120,
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 50,
    borderRadius: 20,
    alignItems: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default styles;
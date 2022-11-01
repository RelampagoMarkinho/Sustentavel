import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Conteiner: {
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%'
  },
  ViewTempodeComposicao: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  Titulo: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "800",
    marginBottom: 10,
    marginTop: 10,
  },
  Descricao: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 10,
  },
  MsgFinal: {
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center"
  }


});


export default styles;
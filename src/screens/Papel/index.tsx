import { ConteinerView, Titulo, TituloMedium, TextoRegular, ConteinerTempo, IconTempo } from "./styled"

import { StatusBar } from "expo-status-bar"

export function Papel() {
  return (
    <ConteinerView>
      <Titulo>Papel</Titulo>

      <ConteinerTempo>
        <IconTempo source={require('../../assets/tempo.png')} />
        <TextoRegular>Tempo de composição 3 a 6 meses</TextoRegular>
      </ConteinerTempo>

      <TituloMedium>POR QUE A RECICLAGEM DE PAPEL É IMPORTANTE?</TituloMedium>
      <TextoRegular>O papel comum tem como matéria prima as fibras de celulose extraídas de árvores com um alto teor de celulose (como pinheiro e eucalipto), então para produzir muito papel é necessario muitas árvores, mas com a recilcagem da pra utilizar o recursos de celulose dos papeis existentes.</TextoRegular>


      <TituloMedium>DESCARTE CORRETO</TituloMedium>
      <TextoRegular>Os papeis tem múltiplas utilizações e são classificados, geralmente, nas categorias:
        <TextoRegular>1- papel imprensa, destinado majoritariamente à impressão de jornais, mas também inclui periódicos, revistas, listas telefônicas, suplementos e encartes promocionais.</TextoRegular>
        <TextoRegular>2- de imprimir e escrever.</TextoRegular>
        <TextoRegular>3- papelão ondulado, majoritariamente dirigido para a produção de embalagens para transporte das mais variadas mercadorias.</TextoRegular>
        <TextoRegular>4- papel-cartão, especialmente utilizado na produção de embalagens de bens de consumo imediato, como remédios, alimentos industrializados, cosméticos e brinquedos, entre outros.</TextoRegular>
        <TextoRegular>5-sanitários, cujo principal produto é o papel higiênico, mas também engloba a produção de toalhas, guardanapos e lenços, entre outros produtos.</TextoRegular>
        <TextoRegular>6- outros papéis para embalagens e os papéis especiais.</TextoRegular>
        No caso da reciclagem de papel usado ou velho ocorre um reaproveitamento destas fibras de celulose, que serão reutilizadas na produção de papel novo e poderão ser novamente disponibilizadas para diversas finalidades. Apenas os papeis que se encaixam na categoria de sanitários não são recicláveis.
      </TextoRegular>
    </ConteinerView>
  )
}
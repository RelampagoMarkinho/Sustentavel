import styled from 'styled-components/native';

export const ConteinerView = styled.ScrollView`

  flex: 1;
  padding: 10px 20px 10px;

`;

export const Titulo = styled.Text`

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 32px;

`;

export const TextoRegular = styled.Text`

font-family: ${({ theme }) => theme.FONTS.REGULAR};
font-size: 18px;
text-align: justify;
  
`;

export const ConteinerTempo = styled.View`

  flex-direction: row;
  width: 100%;
  padding: 10px 20px 10px;
  justify-content: center;
  align-items: center;

`;

export const IconTempo = styled.Image`

  width: 70px;
  height: 70px;

`;

export const TituloMedium = styled.Text`

font-family: ${({ theme }) => theme.FONTS.MEDIUM};
font-size: 24px;
text-align: left;
margin-bottom: 20px;
margin-top: 5px;

`;

export const ImageDemo = styled.Image`

width: 100%;
height: 50%;

`;
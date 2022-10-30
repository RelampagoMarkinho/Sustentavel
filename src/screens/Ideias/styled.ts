import styled from 'styled-components/native';

export const Container = styled.ScrollView`

  width: 100%;
  height: 100%;
  background-color: '#fff';

`;

export const ButtonPlay = styled.View`

  width: 50px;
  height:30px;
  background-color: "#000";
`;

export const TextTopico = styled.Text`

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 18px;
  text-align: justify;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;

`;

export const TextDescri = styled.Text`

  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 16px;
  text-align: justify;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;

`;

export const Link = styled.Text`

font-family: ${({ theme }) => theme.FONTS.REGULAR};
font-size: 16px;
color: '#054f77';
margin-left: 10px;
  margin-right: 10px;

`;

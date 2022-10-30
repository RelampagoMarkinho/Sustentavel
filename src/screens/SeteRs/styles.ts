import styled from 'styled-components/native';

export const ScrollViewConteiner = styled.ScrollView`

  flex: 1;

`;

export const TituloPrin = styled.Text`

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 28px;
  color: ${({ theme }) => theme.COLORS.TEXT_BLACK};

`;

export const Conteiner = styled.View`

  flex-direction: column;
  padding-top: 20px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 8px;
  margin-right: 8px;
  
`;

export const R_sView = styled.View`

  flex-direction: row;
  justify-content: flex-start;
  margin-top: 8px;

`;

export const R_sTextTitulo = styled.Text`

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 34px;
  color:${({ theme }) => theme.COLORS.BORDER_ICON};

`;

export const TextoRegular = styled.Text`

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT_BLACK};

`;

export const TextoSimples = styled.Text`

  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 18px;
  text-align: justify;

`;

export const ImageView = styled.View`

  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;

`;

export const ImageR_s = styled.Image`

  width: 300px;
  height: 155px;
  justify-content: center;
  align-items: center;

`;
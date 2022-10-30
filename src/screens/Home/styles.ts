import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 30px 15px;

`;

export const Containerinfo = styled.View`
  justify-content: space-around;
  flex-direction: row;
`;


export const Containerboasvindas = styled.View`
  flex-direction: column;
`;

export const TextoRegular = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 16px;
  margin-top: 4px;
`;

export const TextoMedium = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 16px;
`;

export const Titulo = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 26;
`;

export const CardView = styled.View`
  margin-top: 20px;
  height: 125px;
  width: 100%;
  border-radius: 20px;
`;

export const CadrViewImage = styled.ImageBackground`
    width: 100%; 
    height: 100%; 
    border-Radius: 20px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`;

export const TituloCard = styled.Text`
  font-size: 48px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-left: 10px;
`;

export const InfoCardView = styled.View`

  flex-direction: column;
  justify-content: flex-start;
  padding-left: 10px;
  margin-bottom: -50px;

`;

export const MiniCardViewImage = styled.Image`

  width: 30%;
  height: 50%;

`;

export const ImageMiniCardView = styled.Image`

  height: 104px;
  width: 68px;
  margin-left: 6px;

`;

export const ImageMiniCardViewMetal = styled.Image`

  height: 60px;
  width: 40px;
  justify-content: center;

`;

export const ImageMiniCardViewPapel = styled.Image`

  height: 45px;
  width: 45px;
  justify-content: center;

`;

export const ImageMiniCardViewOleo = styled.Image`

  height: 60px;
  width: 40px;
  justify-content: center;

`;

export const ViewIconCardView = styled.View`

  flex-direction: column;
  height: 80px;
  width: 70px;
  align-items: center;
  margin-left: 25px;

`;

export const ScrollViewCards = styled.ScrollView`

        flex-Direction: row;
        height: 100px;
        width: 100%;
        margin-top: 5px;

`;

export const GridViewCards = styled.View`

  display: grid;
  flex-grow:1 ;
  width: 100%;
  margin-top: 20px;
  height: 170px;
  

`;

export const ViewRowCards = styled.View`

 width: 100%;
 height: 150px;
 border-top: 20px;


`;

export const ViewCardView = styled.View`

  background-color: white;
  width: 100%;
  height: 100px;
  margin-left: 3px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TextoMediumBlack = styled.Text`

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: 24px;


`;

export const TextoRegularBlack = styled.Text`

  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 14px;
  width: 150px;
  text-align: end;
  margin-right: 3px;

  

`;


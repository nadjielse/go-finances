import styled from "styled-components/native";
import THEMES from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${ THEMES.colors.backgroundGray };
`;

export const ContainerHeader = styled.View`
  width: 100%;
  height: 278px;
  background-color: ${ THEMES.colors.primary };
  padding-top: 53px;
  margin-right: 24px;
`;

export const ContainerHeaderIcone = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerUser = styled.View`
  flex: 1;
  padding-horizontal: 24px;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const Greeting = styled.Text`
  color: ${ THEMES.colors.shape };
  font-family: ${ THEMES.fonts.regular };
  font-size: ${ THEMES.fontSize.sm }px;
`;

export const Name = styled.Text`
  color: ${ THEMES.colors.shape };
  font-family: ${ THEMES.fonts.bold };
  font-size: ${ THEMES.fontSize.sm }px;
`;

export const Icone = styled.TouchableOpacity`
  margin-right: 24px;
`;

export const ResumeCards = styled.ScrollView`
  position: absolute;
  width: 100%;
  margin-top: 120px;
`;

export const TransactionsListContainer = styled.View`
  flex: 1;
  padding-horizontal: 24px;
  margin-top: 74px;
`;

export const TitleList = styled.Text`
  font-size: ${ THEMES.fontSize.lg }px;
  font-family: ${ THEMES.fonts.regular };
  margin-bottom: 15px;
`;
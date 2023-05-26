import styled from "styled-components/native";
import THEMES from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${ THEMES.colors.primary };
  align-items: center;
  padding-horizontal: 32px;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 68px;
  margin-top: 114px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${ THEMES.colors.shape };
  font-family: ${ THEMES.fonts.medium };
  font-size: ${ THEMES.fontSize.xl }px;
  margin-top: 80px;
`;
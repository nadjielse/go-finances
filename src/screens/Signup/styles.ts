import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #F0F2F5;
  flex: 1;
  position: relative;
`;

export const Name = styled.TextInput`
  font-family: "Poppins_400Regular";
  color: #969CB2;
  background-color: #fff;
  height: 50px;
  margin-top: 25px;
  margin-horizontal: 25px;
  margin-bottom: 12px;
  padding: 14px;
  border-radius: 5px;
`;

export const Price = styled.TextInput`
  font-family: Poppins_400Regular;
  color: #969CB2;
  background-color: #fff;
  height: 50px;
  margin-horizontal: 25px;
  padding: 14px;
  border-radius: 5px;
`;

export const Movementations = styled.View`
  flex-direction: row;
  margin-horizontal: 25px;
  margin-top: 20px;
`;

export const Income = styled.TouchableOpacity`
  flex-direction: row;
  border-color: #969CB2;
  border-width: 1px;
  padding: 14px;
  flex: 1;
  justify-content: center;
  border-radius: 3px;
  margin-right: 5px;
`;

export const Outcome = styled.TouchableOpacity`
  flex-direction: row;
  border-color: #969CB2;
  border-width: 1px;
  padding: 14px;
  flex: 1;
  justify-content: center;
  border-radius: 3px;
  margin-left: 5px;
`;

export const MovementationText = styled.Text`
  font-family: Poppins_400Regular;
  color: #363F5F;
  margin-left: 14px;
`;

export const Category = styled.View`
  font-family: Poppins_400Regular;
  color: #969CB2;
  background-color: #fff;
  height: 50px;
  margin-horizontal: 25px;
  padding: 14px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #FF872C;
  border-color: #000;
  border-width: 1px;
  border-radius: 3px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-horizontal: 25px;
  position: absolute;
  bottom: 25px;
  width: 88%;
`;

export const ButtonText = styled.Text`
  font-family: Poppins_500Medium;
  color: #fff;
`;
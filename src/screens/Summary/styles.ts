import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #F0F2F5;
  flex: 1;
  position: relative;
`;

export const Body = styled.View`
  margin: 25px;
`;

export const MonthView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Month = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 20px;
`;

export const List = styled.FlatList`
  margin-vertical: 25px;
`;

export const Transaction = styled.View`
  background-color: #fff;
  border-radius: 5px;
  margin-vertical: 5px;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const TransactionName = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 15px;
`;

export const TransactionPrice = styled.Text`
  font-family: Poppins_500Medium;
  font-size: 15px;
`;
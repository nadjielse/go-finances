import { View, Text, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as styled from './styles';

const transactions = [
  { id: '1', name: "Casa", price: "R$1200" },
  { id: '2', name: "Carro", price: "R$700" },
  { id: '3', name: "Alimentação", price: "R$500" },
  { id: '4', name: "Alimentação", price: "R$500" }
];

export function Summary() {
  return (
    <styled.Container>
      <styled.Body>
        <styled.MonthView>
          <AntDesign name="left" size={ 20 } color="black" />
          <styled.Month>maio, 2020</styled.Month>
          <AntDesign name="right" size={ 20 } color="black" />
        </styled.MonthView>
        <styled.List
          data={ transactions }
          keyExtractor={ (item) => item.id }
          renderItem={ ({ item }) => (
            <styled.Transaction>
              <styled.TransactionName>{ item.name }</styled.TransactionName>
              <styled.TransactionPrice>{ item.price }</styled.TransactionPrice>
            </styled.Transaction>
          )}
          ListEmptyComponent={ () => (
            <Text>Sem transações para mostrar!</Text>
          )}
        />
      </styled.Body>
    </styled.Container>
  )
}
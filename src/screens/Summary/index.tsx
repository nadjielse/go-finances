import { View, Text, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from './styles';

const transactions = [
  { id: '1', name: "Casa", price: "R$1200" },
  { id: '2', name: "Carro", price: "R$700" },
  { id: '3', name: "Alimentação", price: "R$500" },
  { id: '4', name: "Alimentação", price: "R$500" }
];

export function Summary() {
  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.title }>Resumo por categoria</Text>
      </View>

      <View style={ styles.body }>
        <View style={ styles.monthView }>
          <AntDesign name="left" size={ 20 } color="black" />
          <Text style={ styles.month }>maio, 2020</Text>
          <AntDesign name="right" size={ 20 } color="black" />
        </View>
        <FlatList 
          style={ styles.list }
          data={ transactions }
          keyExtractor={ (item) => item.id }
          renderItem={ ({ item }) => (
            <View style={ styles.transaction }>
              <Text style={ styles.transactionName }>{ item.name }</Text>
              <Text style={ styles.transactionPrice }>{ item.price }</Text>
            </View>
          )}
          ListEmptyComponent={ () => (
            <Text>Sem transações para mostrar!</Text>
          )}
        />
      </View>
    </View>
  )
}
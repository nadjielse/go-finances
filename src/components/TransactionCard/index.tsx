import { View, Text, Image } from "react-native";
import { Feather } from '@expo/vector-icons';

import { DataProps } from "../../data/transactions";

import { styles } from './styles';

interface Props {
  transaction: DataProps
};

export function TransactionCard( props: Props ) {

  function formatAmount(amount: string, type: "positive" | "negative") {
    const prefix = type === "positive" ? "" : "- ";

    return prefix + amount;
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ props.transaction.title }</Text>
      <Text style={ styles.amount }>{ props.transaction.amount }</Text>

      <View style={ styles.info }>
        <View style={ styles.category }>
          <Feather name={ props.transaction.category.icon } size={24} color="#969CB2" />
          <Text style={ styles.categoryName }>{ props.transaction.category.name }</Text>
        </View>
        <Text style={ styles.date }>{ props.transaction.date }</Text>
      </View>
    </View>
  )
}
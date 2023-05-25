import { View, Text, Image } from "react-native";
import { Feather } from '@expo/vector-icons';

import { DataProps } from "../../data/transactions";

import { styles } from './styles';

interface Props {
  transaction: DataProps
};

export function TransactionCard( props: Props ) {
  function Amount(props: Props) {
    function format() {
      let amount = props.transaction.amount;

      if(props.transaction.type === "negative") {
        amount = "- " + amount;
      }

      return amount;
    }

    function pickStyle() {
      let style = styles.amount;
      
      if(props.transaction.type === "negative") {
        style = { ...style, ...styles.negativeAmount };
      }

      return style;
    }

    return (
      <Text style={ pickStyle() }>
        { format() }
      </Text>
    )
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ props.transaction.title }</Text>
      <Amount transaction={ props.transaction }/>

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
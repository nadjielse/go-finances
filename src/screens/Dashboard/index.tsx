import { FlatList, Image, ScrollView, Text, View,TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';

import { ResumeCard } from "../../components/ResumeCard";
import { TransactionCard } from "../../components/TransactionCard";

import {transactionsArray} from '../../data/transactions';

import {styles} from './styles';

export function Dashboard(){

  const navigation = useNavigation();
  function handleGoBackHome(){
    navigation.goBack(); //
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderIcone}>
          <View style={styles.containerUser}>
            <Image 
              style={styles.image}
              source={{uri:'https://github.com/fabioabrantes.png'}}
            />

            <View style={styles.containerGreeting}>
              <Text style={styles.greeting}>Olá</Text>
              <Text style={styles.name}>Fábio</Text>
            </View>
          </View>

          <TouchableOpacity 
            onPress={handleGoBackHome} 
            style={styles.icone}
          >
            <AntDesign name="poweroff" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        style={styles.resumeCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:10}}
      >
        <ResumeCard
          type="entry"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 03 de abril"
          nameIcon="arrow-up-circle"
        />

        <ResumeCard
          type="out"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 04 de abril"
          nameIcon="arrow-down-circle"
        />

        <ResumeCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 04 de abril"
          nameIcon="dollar-sign"
        />
      </ScrollView>

      <View style={styles.transactionsListContainer}>
        <Text style={styles.titleList}>Listagem</Text>
        
        <FlatList 
          data={transactionsArray}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item)=>item.id}
          renderItem={ ({ item }) => (
            <TransactionCard transaction={ item }/>
          )}
          ListEmptyComponent={ () => (
            <Text>Sem transações para mostrar!</Text>
          )}
        />

      </View>
    </View>
  )
}
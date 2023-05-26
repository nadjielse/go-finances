import { FlatList, Image, ScrollView, Text, View,TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';

import { ResumeCard } from "../../components/ResumeCard";
import { TransactionCard } from "../../components/TransactionCard";

import {transactionsArray} from '../../data/transactions';

import * as styled from './styles';

export function Dashboard(){

  const navigation = useNavigation();
  function handleGoBackHome(){
    navigation.goBack(); //
  }

  return (
    <styled.Container>
      <styled.ContainerHeader>
        <styled.ContainerHeaderIcone>
          <styled.ContainerUser>
            <styled.Image
              source={{uri:'https://github.com/fabioabrantes.png'}}
            />

            <View>
              <styled.Greeting>Olá</styled.Greeting>
              <styled.Name>Fábio</styled.Name>
            </View>
          </styled.ContainerUser>

          <styled.Icone 
            onPress={handleGoBackHome}
          >
            <AntDesign name="poweroff" size={24} color="white" />
          </styled.Icone>
        </styled.ContainerHeaderIcone>
      </styled.ContainerHeader>

      <styled.ResumeCards
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
      </styled.ResumeCards>

      <styled.TransactionsListContainer>
        <styled.TitleList>Listagem</styled.TitleList>
        
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

      </styled.TransactionsListContainer>
    </styled.Container>
  )
}
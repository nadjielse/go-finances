import { Image, Text, View } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { Button } from "../../components/Button";

import Finance from '../../assets/Finance.png';

import {styles} from './styles';

export function Home(){

  const navigation = useNavigation();
  
  function handleGoScreenDashboard(){
    navigation.navigate("RoutesBottomTab");
  }
  return (
    <View style={styles.container}>
      <Image source={Finance} style={styles.logo}/>
      
      <Text style ={styles.title}>
      Controle suas {'\n'} finanças de forma {'\n'}
      muito simples
      </Text>

      <Button 
        title="Clica aqui para entrar" 
        onPress={handleGoScreenDashboard}
      />
    </View>
  )
}
import { Image, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import {styles} from './styles';

export function Dashboard(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerUser}>
          <Image source={{uri:'#'}}/>

          <View style={styles.containerGreeting}>
            <Text style={styles.greeting}>Olá</Text>
            <Text style={styles.name}>Fábio</Text>
          </View>
        </View>
        
        <AntDesign name="poweroff" size={24} color="black" />
      </View>
    </View>
  )
}
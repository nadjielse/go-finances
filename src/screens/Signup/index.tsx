import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from './styles';

export function Signup() {
  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.title }>Cadastro</Text>
      </View>

      <View>
        <TextInput style={ styles.name } placeholder="Nome" />
        <TextInput style={ styles.price } placeholder="Preço" />
        <View style={ styles.movementations }>
          <TouchableOpacity style={ styles.income }>
            <AntDesign name="upcircleo" size={ 24 } color="green" />
            <Text style={ styles.movementationText }>Income</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.outcome }>
            <AntDesign name="downcircleo" size={ 24 } color="red" />
            <Text style={ styles.movementationText }>Outcome</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.category }>
          <TextInput placeholder="Categoria" />
          <AntDesign name="down" size={ 24 } color="#969CB2" />
        </View>
      </View>

      <TouchableOpacity style={ styles.button }>
        <Text style={ styles.buttonText }>Enviar</Text>
      </TouchableOpacity>
    </View>
  )
}
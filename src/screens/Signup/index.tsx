import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as styled from './styles';

export function Signup() {
  return (
    <styled.Container>
      <View>
        <styled.Name placeholder="Nome" />
        <styled.Price placeholder="Preço" />
        <styled.Movementations>
          <styled.Income>
            <AntDesign name="upcircleo" size={ 24 } color="green" />
            <styled.MovementationText>Income</styled.MovementationText>
          </styled.Income>
          <styled.Outcome>
            <AntDesign name="downcircleo" size={ 24 } color="red" />
            <styled.MovementationText>Outcome</styled.MovementationText>
          </styled.Outcome>
        </styled.Movementations>
        <styled.Category>
          <TextInput placeholder="Categoria" />
          <AntDesign name="down" size={ 24 } color="#969CB2" />
        </styled.Category>
      </View>

      <styled.Button>
        <styled.ButtonText>Enviar</styled.ButtonText>
      </styled.Button>
    </styled.Container>
  )
}
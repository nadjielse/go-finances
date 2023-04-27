import {Text, View } from 'react-native';

import { Home } from './src/screens/Home';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return (
      <View>
        <Text>Fontes ainda não carregaram</Text>
      </View>
    )
  }
    return (
      <Home/>
    );
  }




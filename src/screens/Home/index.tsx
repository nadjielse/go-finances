import {useNavigation} from '@react-navigation/native';
import { Button } from "../../components/Button";

import Finance from '../../assets/Finance.png';

import { Container, Logo, Title, styles } from './styles';

export function Home() {

  const navigation = useNavigation();
  
  function handleGoScreenDashboard(){
    navigation.navigate("RoutesBottomTab");
  }
  
  return (
    <Container>
      <Logo source={ Finance } />
      
      <Title>
        Controle suas {'\n'} finanças de forma {'\n'}
        muito simples
      </Title>

      <Button 
        title="Clica aqui para entrar" 
        onPress={handleGoScreenDashboard}
      />
    </Container>
  )
}
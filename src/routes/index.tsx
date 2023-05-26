import  { NavigationContainer } from '@react-navigation/native';
import { RoutesPublic } from './routes.public';

export function Routes() {
  return (
    <NavigationContainer>
      <RoutesPublic/>
    </NavigationContainer>
  );
}
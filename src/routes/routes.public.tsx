import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { Home } from '../screens/Home';
import { Dashboard } from '../screens/Dashboard';
import { Signup } from '../screens/Signup';
import { Summary } from '../screens/Summary';

export function RoutesPublic() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={ {
        headerShown: false
      } }
    >
      <Screen name="Home" component={ Home } />
      <Screen name="RoutesBottomTab" component={ RoutesBottomTab } />
    </Navigator>
  );
}

export function RoutesBottomTab() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={ {
        tabBarActiveTintColor: "#FF872C",
        tabBarInactiveTintColor: "#363F5F",
        headerStyle: {
          backgroundColor: "#5636D3"
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Poppins_400Regular",
          fontSize: 18,
        }
      } }
    >
        <Screen
          name="Listagem"
          component={ Dashboard }
          options={ {
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Feather name="list" size={ size } color={ color } />
            )
          } }
        />
        <Screen
          name="Cadastrar"
          component={ Signup }
          options={ {
            tabBarIcon: ({ color, size, focused }) => (
              <Feather name="dollar-sign" size={ size } color={ color } />
            )
          } }
        />
        <Screen
          name="Resumo"
          component={ Summary }
          options={ {
            tabBarIcon: ({ color, size, focused }) => (
              <Feather name="pie-chart" size={ size } color={ color } />
            )
          } }
        />
      </Navigator>
  );
}
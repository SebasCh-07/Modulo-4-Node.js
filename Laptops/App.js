import { NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {LaptopsList} from "./screens/LaptopsList"
import {LaptopForm} from "./screens/LaptopsForm"

export default function App() {
  const stackContacts = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stackContacts.Navigator initialRouteName="LaptopsListNav">
        <stackContacts.Screen name="LaptopsListNav" component={LaptopsList} />
        <stackContacts.Screen name="LaptopFormNav" component={LaptopForm} />
      </stackContacts.Navigator>
    </NavigationContainer>
  );
}
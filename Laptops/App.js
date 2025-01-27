import { NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {LaptopsList} from "./screens/LaptopsList"

export default function App() {
  const stackContacts = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stackContacts.Navigator>
        <stackContacts.Screen name="LaptopsListNav" component={LaptopsList} />
      </stackContacts.Navigator>
    </NavigationContainer>
  );
}
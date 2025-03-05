import { NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {ContactsList} from "./screens/ContactsList"
import {ContactsForm} from "./screens/ContactsForm"

export default function App() {
  const stackContacts = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stackContacts.Navigator initialRouteName="ContactsListNav">
        <stackContacts.Screen name="ContactsListNav" component={ContactsList} />
        <stackContacts.Screen name="ContactsFormNav" component={ContactsForm} />
      </stackContacts.Navigator>
    </NavigationContainer>
  );
}



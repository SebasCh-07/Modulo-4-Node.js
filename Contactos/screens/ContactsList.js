import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native"
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllContacts } from "../rest_client/contactos"
import { useState, useEffect } from "react"

export const ContactsList = ({ navigation }) => {
  const [contactsList, setContactsList] = useState([])

  useEffect(() => {
    console.log("Funcion useEffect")
    getAllContacts(fnRefreshList)
  }, {});

  const ConstactItem = ({ contact }) => {
    return <TouchableHighlight onPress={() => {
      navigation.navigate("ContactsFormNav", { contactParam: contact })
    }}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{contact.nombre} {contact.apellido}</ListItem.Title>
          <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableHighlight>

  }

  fnRefreshList = (contacts) => {
    setContactsList(contacts)
  }
  return <View style={styles.container}>
    <Text>Lista de Contactos</Text>
    <FlatList
      data={contactsList}
      renderItem={({ item }) => {
        return <ConstactItem contact={item} />
      }}
    />
    <FAB
      title="+"
      onPress={() => { navigation.navigate("ContactsFormNav", {}) }}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

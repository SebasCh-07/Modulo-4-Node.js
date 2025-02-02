import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native"
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllLaptops } from "../rest_laptop/laptop"
import { useState, useEffect } from "react"

export const LaptopsList = ({ navigation }) => {
  const [LaptopsList, setLaptopsList] = useState([])

  useEffect(() => {
    console.log("Funcion useEffect")
    getAllLaptops(fnRefreshList)
  },{});


  const LaptopItem = ({ laptop }) => {
    return <TouchableHighlight onPress={() => {
      navigation.navigate('LaptopFormNav', { laptopParam: laptop })
    }}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{laptop.marca} {laptop.procesador}</ListItem.Title>
          <ListItem.Subtitle>RAM: {laptop.memoria} / DISCO: {laptop.disco}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableHighlight>
  }

  fnRefreshList = (laptop) => {
    setLaptopsList(laptop)
  }
  return <View style={styles.container}>
    <FlatList
      data={LaptopsList}
      renderItem={({ item }) => {
        return <LaptopItem laptop={item} />
      }}
    />
    <FAB
      title="+"
      onPress={() => { navigation.navigate("LaptopFormNav", {}) }}
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
import { View,Text,StyleSheet,FlatList } from "react-native"
import {Button,ListItem} from "@rneui/base"
import {getAllLaptops} from "../rest_laptop/laptop"
import { useState } from "react"

export const LaptopsList =()=>{
    const[LaptopsList,setLaptopsList]=useState([])

    const LaptopItem = ({laptop}) => {
        return <ListItem>
        <ListItem.Content>
          <ListItem.Title>{laptop.marca} {laptop.procesador}</ListItem.Title>
          <ListItem.Subtitle>RAM: {laptop.memoria} / DISCO: {laptop.disco}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    }

    fnRefreshList = (laptop) => {
        setLaptopsList(laptop)
    }
    return <View>
        <Text>Lista de Laptops</Text>
        <Button 
            title="Consultar"
            onPress={()=>{getAllLaptops(fnRefreshList)}}      
        />
        <FlatList
            data={LaptopsList}
            renderItem={({item})=>{
                return <LaptopItem laptop={item}/>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

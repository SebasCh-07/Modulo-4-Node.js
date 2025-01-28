import { View,StyleSheet, Alert } from "react-native"
import {Button,Input} from "@rneui/base"
import { useState } from "react"
import {saveLaptopRest} from "../rest_laptop/laptop"


export const LaptopForm = ({navigation}) => {
    const [marca, setMarca] = useState()
    const [procesador, setProcesador] = useState()
    const [memoria, setMemoria] = useState()
    const [disco, setDisco] = useState()
    
    const showMessage = () => {
        Alert.alert("CONFIGURACION", "Se registro la Laptop")
    }

    const guardarLaptop = () => {
        console.log("Guardar")
        navigation.goBack()
        saveLaptopRest({
            marca: marca,
            procesador: procesador,
            memoria: memoria,
            disco: disco
        },
        showMessage
    )
    }

    return <View style={styles.container}>
        <Input 
            value={marca}
            placeholder="MARCA"
            onChangeText={(value)=>{
                setMarca(value)
            }}
        />
        <Input 
            value={procesador}
            placeholder="PROCESADOR"
            onChangeText={(value)=>{
                setProcesador(value)
            }}
        />
        <Input 
            value={memoria}
            placeholder="MEMORIA"
            onChangeText={(value)=>{
                setMemoria(value)
            }}
        />
        <Input 
            value={disco}
            placeholder="DISCO"
            onChangeText={(value)=>{
                setDisco(value)
            }}
        />
        <Button title="GUARDAR" onPress={guardarLaptop}/>

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
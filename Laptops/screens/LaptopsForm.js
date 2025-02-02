import { View, StyleSheet, Alert } from "react-native"
import { Button, Input } from "@rneui/base"
import { useState } from "react"
import { saveLaptopRest, updateLaptopRest, deleteLaptopRest } from "../rest_laptop/laptop"


export const LaptopForm = ({ navigation, route }) => {
    let laptopRetrieved = route.params.laptopParam
    let isNew = true
    if (laptopRetrieved != null) {
        isNew = false;
    }

    const [marca, setMarca] = useState(isNew ? null : laptopRetrieved.marca)
    const [procesador, setProcesador] = useState(isNew ? null : laptopRetrieved.procesador)
    const [memoria, setMemoria] = useState(isNew ? null : laptopRetrieved.memoria)
    const [disco, setDisco] = useState(isNew ? null : laptopRetrieved.disco)

    const showMessage = (msg) => {
        Alert.alert("CONFIGURACION", msg)
        navigation.goBack()
    }

    const crearLaptop = () => {
        console.log("Guardar")
        saveLaptopRest({
            marca: marca,
            procesador: procesador,
            memoria: memoria,
            disco: disco
        },
            showMessage
        )
    }

    const updateLaptop = () => {
        console.log("Actualizar")
        updateLaptopRest({
            id: laptopRetrieved.id,
            marca: marca,
            procesador: procesador,
            memoria: memoria,
            disco: disco
        }, 
        showMessage)
    }

    const confirmDelete = () => {
        Alert.alert("CONFIRMACION", "¿Esta seguro que quiere eliminar?",[{
            text: "SI",
            onPress: deleteContact
        },{
            text: "CANCELAR",
        }])
    }
    const deleteContact = () => {
        deleteLaptopRest({
            id: laptopRetrieved.id
        },
        showMessage
    )
    }
    return <View style={styles.container}>
        <Input
            value={marca}
            placeholder="MARCA"
            onChangeText={(value) => {
                setMarca(value)
            }}
        />
        <Input
            value={procesador}
            placeholder="PROCESADOR"
            onChangeText={(value) => {
                setProcesador(value)
            }}
        />
        <Input
            value={memoria}
            placeholder="MEMORIA"
            onChangeText={(value) => {
                setMemoria(value)
            }}
        />
        <Input
            value={disco}
            placeholder="DISCO"
            onChangeText={(value) => {
                setDisco(value)
            }}
        />
        <Button title="GUARDAR" onPress={isNew ? crearLaptop : updateLaptop} />
        {
            isNew ? <View>Crear</View> : <Button title="ELIMINAR" onPress={confirmDelete} />
        }

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
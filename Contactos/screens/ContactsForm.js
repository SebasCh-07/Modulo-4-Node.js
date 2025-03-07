import { View, Text, StyleSheet, Alert } from "react-native"
import { Button, Input } from "@rneui/base"
import { useState } from "react"
import { saveContactRest, updateContactRest, deleteContactRest, getAllContacts } from "../rest_client/contactos"

export const ContactsForm = ({ navigation, route }) => {
    let ContactRetrieved = route.params.contactParam
    let isNew = true
    if (ContactRetrieved != null) {
        isNew = false;
    }

    const [name, setName] = useState(isNew ? null : ContactRetrieved.nombre)
    const [surName, setSurName] = useState(isNew ? null : ContactRetrieved.apellido)
    const [phoneNumber, setPhoneNumber] = useState(isNew ? null : ContactRetrieved.celular)


    const showMessage = (msg) => {
        Alert.alert("CONFIGURACION", msg)
        navigation.goBack()
    }

    const createContact = () => {
        saveContactRest({
            name: name,
            surname: surName,
            phoneNumber: phoneNumber
        },
            showMessage,
        ) 
    }
    const updateContact = () => {
        updateContactRest({
            id: ContactRetrieved.id,
            name: name,
            surname: surName,
            phoneNumber: phoneNumber
        },
            showMessage,
        )   
    }

    const confirmDelete = () => {
        Alert.alert("CONFIRMACION", "¿Esta seguro que quiere eliminar?", [{
            text: "SI",
            onPress: deleteContact
        }, {
            text: "CANCELAR",
        }])
    }
    const deleteContact = () => {
        deleteContactRest({
            id: ContactRetrieved.id
        },
            showMessage,
        )  
    }

    return <View style={styles.container}>
        <Input
            value={name}
            placeholder="NOMBRE"
            onChangeText={(value) => {
                setName(value)
            }}
        />
        <Input
            value={surName}
            placeholder="APELLIDO"
            onChangeText={(value) => {
                setSurName(value)
            }}
        />
        <Input
            value={phoneNumber}
            placeholder="TELEFONO"
            onChangeText={(value) => {
                setPhoneNumber(value)
            }}
        />
        <Button title="GUARDAR" onPress={isNew ? createContact : updateContact} />
        {
            isNew ? <Text>Crear Contacto</Text> : <Button title="ELIMINAR" onPress={confirmDelete} />
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

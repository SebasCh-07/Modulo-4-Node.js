const IP = "192.168.1.10";
const Port = "8080";
const Url = "http://" + IP + ":" + Port + "/";

export const getAllContacts = (fnRefreshList) => {
    fetch(Url + "contactos")
        .then((response) => response.json())
        .then((body) => {
            fnRefreshList(body);
        });
}

export const saveContactRest = (contact, fnShowMessage, fnRefreshList) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: contact.name,
            apellido: contact.surname,
            celular: contact.phoneNumber,
        })
    };
    fetch(Url + "contactos", config)
        .then((response) => response.json())
        .then((body) => {
            fnShowMessage("Se ha creado el Contacto");
            console.log(body);
            getAllContacts(fnRefreshList); // Actualiza la lista después de crear
        });
}

export const updateContactRest = (contact, fnShowMessage, fnRefreshList) => {
    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: contact.id,
            nombre: contact.name,
            apellido: contact.surname,
            celular: contact.phoneNumber,
        })
    };
    fetch(Url + "contactos/" + contact.id, config)
        .then((response) => response.json())
        .then((body) => {
            fnShowMessage("Se ha Actualizado el contacto");
            console.log(body);
            getAllContacts(fnRefreshList); // Actualiza la lista después de actualizar
        });
}

export const deleteContactRest = (contact, fnShowMessage, fnRefreshList) => {
    const config = {
        method: 'DELETE'
    };
    fetch(Url + "contactos/" + contact.id, config)
        .then((response) => response.json())
        .then((body) => {
            fnShowMessage("Se ha eliminado el contacto");
            console.log(body);
            getAllContacts(fnRefreshList); // Actualiza la lista después de eliminar
        });
}


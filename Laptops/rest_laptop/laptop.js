const IP = "192.168.1.10"
const Port = "8080"
const Url = "http://"+IP+":"+Port+"/"
export const getAllLaptops = (fnRefreshList) => {
    fetch(
        Url+"laptops"
    ).then(
        (response) => {return response.json()}
    ).then(
        (body) => {
            fnRefreshList(body)
        }
    )
}

export const saveLaptopRest = (laptop, fnShowMessage) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }
    fetch(
        Url+"laptops", config
    ).then(
        (response) => {return response.json()}
    ).then(
        (body) => {
            fnShowMessage()
            console.log(body)
        }
    )
}

export const updateLaptopRest = (laptop, fnShowMessage) => {
    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id:laptop.id,
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }
    fetch(
        Url+"laptops/"+laptop.id, config
    ).then(
        (response) => {return response.json()}
    ).then(
        (body) => {
            fnShowMessage()
            console.log(body)
        }
    )
}
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
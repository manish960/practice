import axios from "axios"

const getData =async ()=>{
let {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
return data
}

export {getData};
import axios from "axios"
import { useState } from "react"

const AddBio = ()=>{

    const [bio,setBio] = useState("")

    const handleBio = async()=>{
        await axios.post('',{
           headers: {

           },
           userBio: bio
        })
    }

    return(
        <>
            <input type="text" onChange={e=>{setBio(e.target.value)}} placeholder="Add the bio..."/>
            <button onClick={handleBio}>Add Bio</button>
        </>
    )
}

export default AddBio
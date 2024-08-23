import axios from "axios"
import Navbar from "../Components/Navbar"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = ()=>{

    return(
        <>
           <Navbar/>
           {/* <DeleteUser/> */}
        <div className="flex flex-col items-center">
           <AddBio/>
           <UpdateUsername/>
           <UpdateUserEmail/>
        </div>
        <ToastContainer/>
        </>
    )
}

// const DeleteUser = ()=>{
        
//         const handleDelete = async()=>{
//             const token = localStorage.getItem("token")
//             console.log(token)
    
//             const res = await axios.post("",{
//                 headers:{
//                     token: token
//                 }
//             }) 
            
//             console.log(res)
//         }

//     return(
//         <div className="w-[100%] h-[100px] flex justify-evenly items-center">
//         <p className="text-[20px] font-bold">Delete Account</p>
//            <button className="w-[110px] h-[35px]  text-white rounded-md"  onClick={handleDelete}>Delete</button>
//         </div>
//     )
// }

const AddBio = ()=>{

    const[bio,setBio] = useState("")
    const token = localStorage.getItem("token")
    const apiUrl = import.meta.env.VITE_BACKEND_API_URL

    const handleClick=  async()=>{
         if(bio===""){
            return toast("Bio Can't be empty")
        }
       const res =  await axios.put(`${apiUrl}/api/user/lol/userBio`,{
        description: bio
       }
       ,{
             headers:{
                token:token 
            } ,
        }
        )

        if ((res.data.data)){
            return toast("Bio added successFully")
        }
        else{
            return toast('error adding bio')
        }


    }

    return(
        <div className="w-[60%] h-[100px]  flex justify-between items-center">
        <input onChange={e=>{setBio(e.target.value)}} type="text" placeholder="Add Bio" className="w-[300px] h-[35px] border-b-2 border-slate-600 pl-1 outline-none "/>
        <button className="bg-slate-800 w-[150px] h-[40px] justify-center items-center rounded-md text-white " onClick={handleClick}>Add Bio</button>
        </div>
    )
}

const UpdateUsername = ()=>{

    const[bio,setBio] = useState("")
    const token = localStorage.getItem("token")

    const handleClick=  async()=>{
        if(bio===""){
            return toast("Username Can't be empty")
        }

       const res =  await axios.put('https://server.ppranavvvvv918.workers.dev/api/user/lol/userBio',{
        name: bio
       }
       ,{
             headers:{
                token:token 
            } ,
        }
        )

        if ((res.data.data)){
            return toast("Name changed successFully")
        }
        else{
            return toast('error changing name')
        }

    }

    return(
        <div className="w-[60%] h-[100px]  flex justify-between items-center">
        <input onChange={e=>{setBio(e.target.value)}} type="text" placeholder="Update Username" className="w-[300px] h-[35px] border-b-2 border-slate-600 pl-1 outline-none "/>
        <button className="bg-slate-800 w-[150px] h-[40px] justify-center items-center text-white rounded-md" onClick={handleClick}>Update Name</button>
        </div>
    )
}

const UpdateUserEmail = ()=>{

    const[bio,setBio] = useState("")
    const token = localStorage.getItem("token")

    const handleClick=  async()=>{

        if(bio===""){
            return toast("Email Can't be empty")
        }

       const res =  await axios.put('https://server.ppranavvvvv918.workers.dev/api/user/lol/updateEmail',{
        email: bio
       }
       ,{
             headers:{
                token:token 
            } ,
        }
        )

        if ((res.data.data)){
            return toast("Email changed successFully")
        }
        else{
            return toast('error changing email')
        }

    }

    return(
        <div className="w-[60%] h-[100px]  flex justify-between items-center">
        <input onChange={e=>{setBio(e.target.value)}} type="text" placeholder="Update Email" className="w-[300px] h-[35px] border-b-2 border-slate-600 pl-1 outline-none "/>
        <button className="bg-slate-800 w-[150px] h-[40px] justify-center items-center text-white rounded-md" onClick={handleClick}>Update Email</button>
        </div>
    )
}


export default Settings

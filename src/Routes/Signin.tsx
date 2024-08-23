import {  useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Quote from "../Components/Quote";
import CreateAcc from "../Components/CreateAcc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = ()=>{
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const Navigate = useNavigate()

const create = "Sign In to Continue"
const already = "Don't have an accout?"
const to = "Sign-Up"
const where = ""
const apiUrl = import.meta.env.VITE_BACKEND_API_URL

const handleClick=async()=>{
   const handleSignIn = await axios.post(`${apiUrl}/api/user/signIn`,{
    email: email,
    password: password
   }
   )

   if(!handleSignIn.data.token){
     return toast('User Not Found')
   }

   console.log(handleSignIn)

   localStorage.setItem('token',handleSignIn.data.token)
   localStorage.setItem('username',handleSignIn.data.username)
   Navigate('/blogs')
}
    return(
        <>
         <div className="w-[100%] flex h-screen">
         <div className="md:w-[50%] w-[100%] flex flex-col items-center justify-evenly">
         <CreateAcc create={create} already={already} where={where} to={to}/>
        <div className="flex flex-col w-[50%] h-[220px]  justify-evenly">
            <p className="font-semibold">Email</p>
           <input className="outline-none border-[1px] rounded-md border-slate-500 h-[35px]" type="text" onChange={e=>{
            setEmail(e.target.value)
           }} />
           <p className="font-semibold">Password</p>
           <input className="outline-none border-[1px] rounded-md border-slate-500 h-[35px]" type="text" onChange={e=>{
            setPassword(e.target.value)
           }} />

           <button className="outline-none border-[1px] rounded-md bg-black text-white border-slate-500 h-[35px]" onClick={handleClick}>Sign In</button>
           </div>
        </div>
        <Quote/>
        </div>
        <ToastContainer />
        </>
    )
}


export default Signin
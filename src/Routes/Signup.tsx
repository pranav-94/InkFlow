import { useState } from "react"
import axios from "axios"
import Quote from "../Components/Quote"
import CreateAcc from "../Components/CreateAcc"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = ()=>{

const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const Navigate = useNavigate() 

const create = "Create an Account"
const already = "Already have an accout?"
const where = "SignIn"
const to = "Login"
const apiUrl = import.meta.env.VITE_BACKEND_API_URL

const handleClick=async()=>{
   const handleSignUp = await axios.post(`${apiUrl}/api/user/signUp`,{
    username: username,
    email: email,
    password: password
   }
   )

   console.log(handleSignUp)

   if(!handleSignUp.data.token){
    return toast('Error signing up')
  }

   localStorage.setItem('token',handleSignUp.data.token)
   localStorage.setItem('username',handleSignUp.data.username)
   Navigate('/blogs')
}

    return(
        <div className="w-[100%] flex h-screen">
         <div className="md:w-[50%] w-[100%] flex flex-col items-center justify-evenly">
            <CreateAcc create={create} already={already} where={where} to={to}/>
        <div className="flex flex-col w-[50%] h-[300px]  justify-evenly">
           <p className="font-semibold">Username</p>
           <input type="text" className="outline-none border-[1px] rounded-md border-slate-500 h-[35px]" onChange={e=>{
            setUsername(e.target.value)
           }}/>
            <p className="font-semibold">Email</p>
           <input className="outline-none border-[1px] rounded-md border-slate-500 h-[35px]" type="text" onChange={e=>{
            setEmail(e.target.value)
           }} />
           <p className="font-semibold">Password</p>
           <input className="outline-none border-[1px] rounded-md border-slate-500 h-[35px]" type="text" onChange={e=>{
            setPassword(e.target.value)
           }} />

           <button className="outline-none border-[1px] rounded-md bg-black text-white border-slate-500 h-[35px]" onClick={handleClick}>Sign Up</button>
           </div>
           </div>
           <Quote/>
            <ToastContainer/>
        </div>
    )
        }

export default Signup
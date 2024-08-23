import axios from "axios"
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"

const CreateBlog = ()=>{

    const token = localStorage.getItem('token')
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const navigate = useNavigate()
    const apiUrl = import.meta.env.VITE_BACKEND_API_URL

    const handleClick = async()=>{
        const res = await axios.post(
            `${apiUrl}/api/blog/create`,
            {
                title: title,
                content: content
            },
            {
                headers: {
                    token: token
                }
            }
        );
        console.log(token)
        console.log(res.data)

        if(!res.data.id){
           return alert('jwt auth failed')
        };

        navigate(`/blog/${res.data.id}`)
    }


    return(
        <div className="h-screen">
        <Navbar/>
        <div className=" w-[100%] flex justify-center items-start mt-5">
            <button className=" flex justify-center items-center border-[1px] border-black rounded-full w-[50px] h-[50px] text-[45px] font-light mt-[30px] mr-3" onClick={handleClick}>+</button>
            <div className="flex flex-col w-[65%]  ">
            <input className=" h-[100px] text-[50px] outline-none text-slate-500 border-l-2 border-l-slate-300" type="text" onChange={e=>setTitle(e.target.value)} placeholder="Title" />
            <textarea rows={10} className="outline-none mt-3 text-[22px] text-slate-500" onChange={e=>setContent(e.target.value)} placeholder="Content" >  </textarea>
            </div>
        </div>
        </div>
    )
}

export default CreateBlog
import axios from "axios"
import {useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"

const UpdateBlog = ()=>{

    const token = localStorage.getItem('token')
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    // const location = useLocation()
    const navigate = useNavigate()
    const apiUrl = import.meta.env.VITE_BACKEND_API_URL

    const handleClick = async()=>{
      const id = localStorage.getItem('postId')
      console.log(id)
        const res = await axios.put(
            `${apiUrl}/api/blog/update`,
            {
                id: id,
                title: title,
                content: content
            },
            {
                headers: {
                    token: token
                }
            }
        );
        console.log(res)
        
        if(res.data.msg !== 
            "updated post"){
           return alert('You are not an author')
        };

        navigate(`/blog/${res.data.id}`)
        localStorage.removeItem('id')
    }


    return(
        <>
<div className="h-screen">
          <Navbar/>
          <div className=" w-[100%] flex justify-center items-start mt-5">
          <button className=" flex justify-center items-center border-[1px] border-black rounded-full w-[50px] h-[50px] text-[45px] font-light mt-[30px] mr-3" onClick={handleClick}>+</button>
          <div className="flex flex-col w-[65%]  ">
          <input type="text" className=" h-[100px] text-[50px] outline-none text-slate-500 border-l-2 border-l-slate-300" onChange={e=>setTitle(e.target.value)} placeholder="Title" />
            <textarea rows={10} onChange={e=>setContent(e.target.value)} placeholder="Content" className="outline-none mt-3 text-[22px] text-slate-500">  </textarea>
        </div>
            </div>
</div>
            </>
    )
}

export default UpdateBlog

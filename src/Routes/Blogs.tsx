import axios from 'axios'
import {useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Skeleton from '../Components/Skeleton'
Navbar

const Blogs = ()=>{

    const [blogData,setBlogData] = useState([])
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const apiUrl = import.meta.env.VITE_BACKEND_API_URL
    const [Loading,setLoading] = useState(false)
    console.log(apiUrl)

useEffect(()=>{
    const handleBlog=async()=>{
        setLoading(true)
        const Blogs = await axios.get(`${apiUrl}/api/blog/bulk`,{
           headers: {
            token: token
           }
        })
        setBlogData(Blogs.data.data)
        console.log(Blogs.data.data)
        setLoading(false)
    }
    handleBlog()
},[])

// if(Loading === true){
//     return(
//         <>
//           <p>Loading</p>
//         </>
//     )
// }

    return(
        <div className="h-screen">
      <Navbar/>
      {
        Loading === true? <Skeleton/> : 
        <div className='w-[100%] flex flex-col items-center'>
            {
                blogData.map((item:any)=>{
                    return <div className='cursor-pointer   mt-5 mb-3 w-[85%] md:w-[60%] border-b-[3px] border-b-slate-300' onClick={()=>{
                        navigate(`/blog/${item.id}`)
                    }}>
                    <div className='flex items-center'>
                    <p className="p-[20px] flex justify-center items-center text-[20px] h-[30px] w-[30px] bg-slate-800 rounded-full text-white">{item.author.name.slice(0,1).toUpperCase()}</p>
                        <p className='ml-2 mr-2'>{item.author.name}</p>
                        <p>{item.date}</p>
                    </div>
                    <div className='mt-5 mb-5'>
                        <p className='text-[20px] text-semibold mb-1'>{item.title}</p>
                        <p>{item.content.slice(0,150)} ...</p>
                    </div>
                        <p className='mb-3'>1 minutes read</p>
                    </div>
                })
            }
        </div>
}
    </div>
    )
}

export default Blogs
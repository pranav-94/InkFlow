import { useLocation, useNavigate } from "react-router-dom"
import {useEffect,useState} from 'react'
import axios from "axios"
import UserCard from "../Components/UserCard"
import Navbar from "../Components/Navbar"
import SkeletonBlog from "../Components/SkeletonBlog"

const Blog = ()=>{

    const location = useLocation()
    const id = (location.pathname.substring(6))
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    const navigate = useNavigate()
    const [blogData,setBlogData]:any = useState({})
    const [authorName,setAuthorName] = useState("")
    const [authorBio,setAuthorBio] = useState("")
    const [Loading,setLoading] = useState(false)
    const apiUrl = import.meta.env.VITE_BACKEND_API_URL

    useEffect(()=>{
      const handleBlog = async()=>{
        setLoading(true)
        const blogData = await axios.get(`${apiUrl}/api/blog/get/${id}`,{
            headers:{ 
                token: token
            }
        })
      // console.log(blogData.data.post)
      // console.log(blogData.data)
      // console.log(token)
      setBlogData(blogData.data.post)
      setAuthorName(blogData.data.authorName)
      setAuthorBio(blogData.data.authorDescription)
      setLoading(false)
      }
      handleBlog()
    },[])

    return(
      <div className="h-screen">
      <Navbar/>
      {
       Loading === true? <SkeletonBlog/> : 
        <div className="w-[100%] flex ">
            <div className="md:w-[60%]  flex flex-col items-center">
                <div className="w-[70%] h-[450px] md:overflow-scroll no-scrollbar mt-5 mb-5 ">
                    <div className="mb-5">
                      <p className="text-[30px] font-bold">{blogData.title}</p>
                      <p>Posted on {blogData.date}</p>
                    </div>
                      <p >{blogData.content}</p>
                      <p>{blogData.description}</p>
                    {   !(username === authorName) ? <></> : 
                    <>
                      <button  onClick={()=>{
                       localStorage.setItem('postId',blogData.id)
                       navigate('/updateBlog')
                      }} className="bg-slate-800 w-[150px] h-[40px] justify-center items-center text-white rounded-md mr-3 mt-4 ">Update</button>
                      <button className="bg-slate-800 w-[150px] h-[40px] justify-center items-center text-white rounded-md" onClick={async()=>{
                          await axios.delete('https://server.ppranavvvvv918.workers.dev/api/blog/deleteBlog',{
                          headers: {
                            token: token
                          },
                          data: {
                            id: blogData.id
                          }
                        })
                        navigate('/blogs')
                      }}>Delete</button>
                      </>
                    }
                </div>
            </div>
            <div className="w-[40%] md:flex hidden mt-5">
                    <UserCard name={authorName} bio={authorBio} />
            </div>
        </div>
}
        </div>
    )
}

export default Blog
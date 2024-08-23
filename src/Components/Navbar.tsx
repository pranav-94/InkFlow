import { useNavigate } from "react-router-dom"
// import Logout from "./Logout"
import { useState } from "react"
import SettingsCard from "./SettingsComp"

const Navbar = ()=>{


    const Navigate = useNavigate()

    const handleClick = ()=>{
        Navigate('/blogs')
    }

    return(
            <div className="w-[100%] h-[60px] flex items-center  justify-between shadow-md sticky top-0 bg-white ease-in-out">
                <p onClick={handleClick} className="md:ml-[100px] ml-[50px] cursor-pointer font-bold text-[20px]">InkFlow</p>
                <div className="flex md:mr-[100px] mr-[50px]">
                    <button onClick={()=>{
                        Navigate('/createBlog')
                    }} className="mr-[20px] w-[70px] rounded-full bg-green-500 text-white">New</button>
                    <UserAcc/>
                </div>
            </div>
    )
}

const UserAcc = ()=>{
    const username = localStorage.getItem('username')
    const [handleSettings,setHandleSettings] = useState(false)

    const handleSettingsCard = ()=>{
        setHandleSettings(!handleSettings)
 }

    return(
        <>
        <div className=" bg-white">
          <p onClick={handleSettingsCard} className="p-[20px] flex justify-center items-center text-[20px] h-[40px] w-[40px] cursor-pointer bg-slate-800 rounded-full text-white">{username?.slice(0,1).toUpperCase()}</p>
        </div>
        {
            handleSettings===true? <SettingsCard/> : <></>
        }
</>
    )
}

export default Navbar
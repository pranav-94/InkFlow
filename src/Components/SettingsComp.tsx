import { Link } from "react-router-dom"
import Logout from "./Logout"

const SettingsCard = ()=>{
    return(
        <div className="w-[150px] fixed h-[100px] bg-white flex flex-col justify-evenly items-center top-[60px] right-0 md:right-[50px] border-2 border-slate-200 rounded-md">
        <Link to={'/Settings'} className="">Settings</Link>
        <Logout/>
        </div>
    )
}

export default SettingsCard
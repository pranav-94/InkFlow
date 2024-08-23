import {useNavigate} from 'react-router-dom'

const Logout = ()=>{

    const navigate = useNavigate()

const handleClick=()=>{
    localStorage.removeItem('token')
    navigate('/signUp')
}

    return(
        <div className=' cursor-pointer'>
        <button className='' onClick={handleClick}>LogOut</button>
        </div>
    )
}

export default Logout
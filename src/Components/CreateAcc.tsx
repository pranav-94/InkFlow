import { Link } from "react-router-dom"

const CreateAcc = ({create,already,where,to})=>{
    return(
        <>
        <div>
           <p className="text-[27px] font-bold">{create}</p>
           <p>{already} <Link className="cusrsor-pointer" to={`/${where}`}>{to}</Link></p>
           </div>
        </>
    )
}

export default CreateAcc
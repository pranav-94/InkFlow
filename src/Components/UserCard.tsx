type userTypeCard = {
    name: string,
    bio: string
}

const UserCard:React.FC<userTypeCard> = ({name,bio})=>{
    return(
        <>
           <div>
            <div className="flex items-center">
           <p className="p-[20px] flex justify-center items-center text-[20px] h-[40px] w-[40px] bg-slate-800 rounded-full text-white">{name?.slice(0,1).toUpperCase()}</p>
               <p className="ml-2">{name}</p>
            </div>
               <p className="ml-10">{bio}</p>
           </div>
        </>
    )
}

export default UserCard
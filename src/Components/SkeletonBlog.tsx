
const SkeletonBlog = ()=>{

    return(
       <div className="h-[480px] flex  justify-center ">
            <SkeletonComp2/>
            <SkeletonComp/>
       </div>
    )

}

{/* <div classNameNameName='cursor-pointer   mt-5 mb-3 w-[85%] md:w-[60%] border-b-[3px] border-b-slate-300' onClick={()=>{
                        navigate(`/blog/${item.id}`)
                    }}>
                    <div classNameNameName='flex items-center'>
                    <p classNameNameName="p-[20px] flex justify-center items-center text-[20px] h-[30px] w-[30px] bg-slate-800 rounded-full text-white">{item.author.name.slice(0,1).toUpperCase()}</p>
                        <p classNameNameName='ml-2 mr-2'>{item.author.name}</p>
                        <p>{item.date}</p>
                    </div>
                    <div classNameNameName='mt-5 mb-5'>
                        <p classNameNameName='text-[20px] text-semibold mb-1'>{item.title}</p>
                        <p>{item.content.slice(0,150)} ...</p>
                    </div>
                        <p classNameNameName='mb-3'>1 minutes read</p>
                    </div> */}

    const SkeletonComp = ()=>{
        return(
            <div className="w-[100%] flex flex-col items-center mt-10">
<div role="status" className="md:w-[60%] w-[80%] animate-pulse">
    <div className="h-[50px] bg-gray-200 rounded-full dark:bg-gray-700 w-[50px] mb-4 mr-3"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
    <span className="sr-only">Loading...</span>
</div>
            </div>
        )
    }

    const SkeletonComp2 = ()=>{
        return(
            <>
                       <div className="w-[100%] h-screen flex flex-col items-center mt-20">
<div role="status" className="md:w-[60%] w-[80%] animate-pulse">
    <div className="flex items-center">
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    </div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <span className="sr-only">Loading...</span>
</div>
            </div>
            </>
        )
    }

export default SkeletonBlog

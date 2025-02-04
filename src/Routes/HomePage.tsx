import { Button } from "@/Components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
 
    const navigate = useNavigate()

  return (
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
          <a className="flex items-center justify-center" href="#">
            <span className="sr-only">InkFlow</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="ml-2 text-xl font-bold">InkFlow</span>
         </a>
          <div className="flex items-center space-x-2">
            <Button onClick={()=>{
                navigate('/signin')
            }} variant="ghost" className="text-sm">
              Log In
            </Button>
            <Button onClick={()=>{
                navigate('/signup')                
            }} className="text-sm">Sign Up</Button>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                     Enhance Your Creativity
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unleash Your Creative Genius and Share Your Voice with the World—Start Writing Captivating Blogs on InkFlow Today!
                  </p>
                </div>
                <div className="space-x-4">
                  <Button onClick={()=>{
                    navigate('/signin')
                  }}>Log In</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex items-center justify-center w-full h-14 border-t px-4 md:px-6">
          <a
            href="https://github.com/pranav-94"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
           <p className="flex items-center ">  
  Developed By  
   
 <img src="https://imgs.search.brave.com/_aGX4vmdjIgf86q5rgYuyT37lSb5iEQ--klRmoZJhGs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG5z/Lmljb25tb25zdHIu/Y29tL3dwLWNvbnRl/bnQvcmVsZWFzZXMv/cHJldmlldy8yMDEy/LzI0MC9pY29ubW9u/c3RyLWdpdGh1Yi0x/LnBuZw" className="w-4 h-4 ml-2" alt="" />

  pranav-94  
</p>
          </a>
        </footer>
      </div>
  );
}
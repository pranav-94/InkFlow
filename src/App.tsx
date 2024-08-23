import { BrowserRouter,Routes,Route } from "react-router-dom"
import Signin from "./Routes/Signin"
import Signup from "./Routes/Signup"
import Blogs from "./Routes/Blogs"
import Blog from "./Routes/Blog"
import CreateBlog from "./Routes/CreateBlog"
import UpdateBlog from "./Routes/UpdateBlog"
import Settings from "./Routes/Settings"

const App =()=>{

  return(
    <>
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Signup/>}/>
           <Route path="/signin" element={<Signin/>}/>
           <Route path="/blogs" element={<Blogs/>}/>
           <Route path="/blog/:id" element={<Blog/>}/>
           <Route path="/createBlog" element={<CreateBlog/>}/>
           <Route path="/updateBlog" element={<UpdateBlog/>}/>           <Route path="/updateBlog" element={<UpdateBlog/>}/>
           <Route path="/Settings" element={<Settings/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
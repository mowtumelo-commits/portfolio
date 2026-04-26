import{NavBar} from "@/layout/NavBar";
import{Footer} from "@/layout/Footer";
import {Home} from "@/sections/Home";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";



function App() {
 return (
    <div className="min-h-screen overflow-x-hidden"> 
      <NavBar/>
      <main>
        <Home/>
        <About/>
        <Projects/>
        
       
        

       
      </main>
      <Footer/>
    </div>
  )
}

export default App

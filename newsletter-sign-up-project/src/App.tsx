import NewLetterForm from "./components/NewsLetter.tsx";
import Form from"./components/Form.tsx";
import Image from"./components/Image.tsx";
import'./App.css'
export  default function App(){
  return(
    <div className="app-grid">
    <div className="left-column">
     <NewLetterForm/>
     <Form/>
    </div>

     <div className="right-column">
     <Image/>
     </div>
   
    </div>
  
  
    
  )
}
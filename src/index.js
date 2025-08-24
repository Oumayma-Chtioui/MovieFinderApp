import './style.css'; 
import {createRoot} from "react-dom/client"
import Display from "./Display.jsx"

const root= createRoot(document.getElementById("root"))

root.render(
    <>
        
        <Display/>

    </>
)
import { useState } from "react";
import "./App.css";

function App() {
   const [textColor, setTextColor] = useState("black");

   return (
      <>
         <div>
            <button
               onClick={() => {
                  textColor === "black"? setTextColor("gray") : setTextColor("black")
               }}
            >
               Show/Hide
            </button>
            <h1 style={{ color: textColor }}>This is an example TEXT</h1>
         </div>
      </>
   );
}

export default App;

import "./App.css";

function App() {
   let age = 20;
   

   const increaseAge = () => {
      age++
      console.log(age);
   }

   return (
      <div className="App">
         {age}

         <br />

         <button onClick={increaseAge}>Increase Age</button>

      </div>
   );
}

export default App;

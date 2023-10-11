import "./App.css";

function App() {
   return (
      <>
         <User name="Utkarsh" age={20} email="utkarsh@mail.com" /> <br />
         <User name="Ayush" age={18} email="ayush@mail.com" /> <br />
         <User name="Krishna" age={21} email="krishna@mail.com" />
      </>
   );
}

const User = (props) => {
   return (
      <div>
         <h1>{props.name}</h1>
         <h3>{props.age}</h3>
         <h2>{props.email}</h2>
      </div>
   );
};

export default App;

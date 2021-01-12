// working
import './App.css';
import React from "react";
import Container from "./components/Container";
import Employee from "./pages/Employee";


function App() {
  return (
    <div className="App">
      <Container>
        
          // instructions to search by name 
          <p className="heading">
					Type in a name to activate <code>search by name</code>. You can also
					click on any table heading to <code>sort by that category</code>.
				
        </p>
          <Employee />
          //render to show employee.js
      </Container>
    </div>
  );
}

export default App;

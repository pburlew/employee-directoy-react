import React from "react";
import API from "../utils/API";
import SearchInput from "../components/SearchInput";

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        
    }

//componentDidMount(){
   // API.viewAll()
    //    .then()

}

handleInputChange = event => {
     // Getting the value and name of the input which triggered the change
     let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

};


///the main file for everything to render 
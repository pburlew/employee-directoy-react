import React from "react";
import API from "../utils/API";
import TableBody from "../components/TableBody";
import SearchForm from "../components/SearchForm";

class Employee extends Component {
    state = {
      search: "",
      employees: [],
      results: [],
        
    };


componentDidMount() {
  API.viewAll()
    .then((res) => {
      let eData = res.data.results;
      let eArray = [];
      for (let i = 0; i < eData.length; i++) {
        let temp = {
          name: eData[i].name.first + " " + eData[i].name.last,
          location: eData[i].location.city + ", " + eData[i].location.state,
          email: eData[i].email,
          dob: eData[i].dob.date,
          mobile: eData[i].cell,
          photo: eData[i].picture.medium,
        };
        eArray.push(temp);
      }
      // console.log(eArray);
      this.setState({ employees: eArray });
    })
    .catch((err) => console.log(err));
}

// if value changed, set search to that
handleInputChange = (event) => {
  this.setState({ search: event.target.value });
};

///the main file for everything to render 


handleFormSubmit = (event) => {
  event.preventDefault();
  let filteredArray = API.filterByName(
    this.state.employees,
    this.state.search
  );
  this.setState({ employees: filteredArray });
};

handleSortClick = (key) => {
  // let nameArray = [];
  // let map = this.state.employees.map(x => x.name)
  // nameArray.push(map);
  // console.log(map);
  this.setState({
    employees: this.state.employees.sort((a, b) => {
      const asc = this.state.employees.name;
      if (a.state.employees[key].name < b.state.employees[key].name) {
        return asc ? -1 : 1;
      } else if (a.state.employees[key].name > b.state.employees[key].name) {
        return asc ? 1 : -1;
      } else {
        return 0;
      }
    }),
  });
};
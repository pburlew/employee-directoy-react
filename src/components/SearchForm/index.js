import React from "react";



function SearchForm(props) {
    return (
        <div className="search">
            <input 
            placeholder="Search for Employee"
            type="search"
            name="employee"
            type="text"
            onChange={props.handleInputChange} 
            />
        </div>
    )
}

export default SearchForm;